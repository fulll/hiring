@transfer @bank
Feature: Bank Transfer Creation
  As an authorized user (Administrator or Purchase Manager)
  I want to create bank transfers via a dedicated form
  In order to pay my beneficiaries following business rules and security requirements

  Background:
    Given the user is logged in as an "Administrator"
    And the user navigates to the "Bank Transfer" creation page

  @happy-path @fixture
  Scenario: Create a successful transfer using predefined test data
    When they fill the transfer form using "validTransfer" data
    And they select the "Instant" transfer mode
    And they submit the transfer form
    Then a success notification "Transfer successfully created" should be displayed

  @boundary @amount
  Scenario Outline: Validate transfer amount boundaries
    When they enter an amount from fixture "<DataKey>"
    And they submit the transfer form
    Then they should see a validation message for "<DataKey>" as "<Status>"

    Examples:
      | DataKey  | Status  | Comment      |
      | minValid | Success | Min Valid    |
      | maxValid | Success | Max Valid    |
      | belowMin | Error   | Below Min    |
      | aboveMax | Error   | Above Max    |

  @boundary @iban
  Scenario Outline: Validate IBAN length constraints
    When they enter an IBAN length from fixture "<DataKey>"
    And they submit the transfer form
    Then they should see a validation status for "IBAN" as "<Status>"

    Examples:
      | DataKey  | Status  | Comment        |
      | minValid | Success | Min length     |
      | maxValid | Success | Max length     |
      | tooShort | Error   | Too short      |
      | tooLong  | Error   | Too long       |

  @boundary @date
  Scenario Outline: Validate date constraints for scheduled transfers
    And they select the "Scheduled" transfer mode
    When they set the transfer date to "<DatePhrase>"
    And they submit the transfer form
    Then the system should "<Outcome>" the date

    Examples:
      | DatePhrase | Outcome | Comment           |
      | tomorrow   | Accept  | Min Wait (1 day)  |
      | +90 days   | Accept  | Max Wait (90 days)|
      | yesterday  | Reject  | Past date         |
      | +91 days   | Reject  | Beyond limit      |

  @error-handling @label
  Scenario: Reject label with special characters
    When they enter the invalid label from fixture
    And they submit the transfer form
    Then they should see an error for the "Label" field

  @rbac @security
  Scenario: Deny transfer creation for unauthorized roles
    Given the user is logged in as a "Standard User"
    When they attempt to access the bank transfer creation page
    Then they should be redirected to the "Dashboard"
    And the transfer form should not be accessible
