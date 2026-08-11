@fulll @bonus
Feature: Fulll Website User Interactions
  As a visitor of the fulll.fr website
  I want to navigate through solutions and filter the blog
  In order to find the information I need easily

  @navigation @solutions
  Scenario: Navigate to Production Comptable solution via Mega Menu
    Given the user is on the Fulll homepage
    When they open the "Solutions" menu
    And they select the "Production comptable" solution
    Then they should be redirected to the "Production comptable" page
    And the page heading should contain "production comptable"

 

  @contact @form
  Scenario Outline: Submit a contact request with valid data
    Given the user is on the Fulll Contact page
    When they fill the contact form with:
      | firstName | <firstName> |
      | lastName  | <lastName>  |
      | company   | <company>   |
      | email     | <email>     |
      | phone     | <phone>     |
      | message   | <message>   |
    And they submit the form
    Then they should see a success message

    Examples:
      | firstName | lastName | company      | email                   | phone             | message                                      |
      | Jean      | Dupont   | TechCorp     | jean.dupont@hotmail.com |  7 69 29 08 93 | Je suis intéressé par votre solution.        |
      | Marie     | Martin   | FinancePlus  | marie.martin@hotmail.fr |  6 12 34 56 78 | Pouvons-nous avoir une démo de Production ?  |

