## [back/ddd/cqs] Vehicle fleet parking management

### Instructions

I have a vehicle fleet and I want to manage where every vehicle is parked.

### Subject

register_vehicle.feature

```feature
Feature: Register a vehicle

    In order to follow many vehicles with my application
    As an application user
    I should be able to register my vehicle

    @critical
    Scenario: I can register a vehicle
        Given my fleet
        And a vehicle
        When I register this vehicle into my fleet
        Then this vehicle should be part of my vehicle fleet

    Scenario: I can't register same vehicle twice
        Given my fleet
        And a vehicle
        And I have registered this vehicle into my fleet
        When I try to register this vehicle into my fleet
        Then I should be informed this this vehicle has already been registered into my fleet

    Scenario: Same vehicle can belong to more than one fleet
        Given my fleet
        And the fleet of another user
        And a vehicle
        And this vehicle has been registered into the other user's fleet
        When I register this vehicle into my fleet
        Then this vehicle should be part of my vehicle fleet
```

park_vehicle.feature

```feature
Feature: Park a vehicle

    In order to not forget where I've parked my vehicle
    As an application user
    I should be able to indicate my vehicle location

    Background:
        Given my fleet
        And a vehicle
        And I have registered this vehicle into my fleet

    @critical
    Scenario: Successfully park a vehicle
        And a location
        When I park my vehicle at this location
        Then the known location of my vehicle should verify this location

    Scenario: Can't localize my vehicle to the same location two times in a row
        And a location
        And my vehicle has been parked into this location
        When I try to park my vehicle at this location
        Then I should be informed that my vehicle is already parked at this location
```

### Definitions:

- **Vehicle**: a car, truck, motocycle, or any transportation mode that can help
  me to move from point A to point B on planet earth.
- **Fleet**: a collection a distinct vehicles.
- **Location**: a way to localize on planet earth, like GPS coordinates
  for example.

#### Guidelines

1. **Don't use any framework at this step!**
2. Prefer **not** using any production dependency
   (therefore, for **javascript**
   [ramda](https://www.npmjs.com/package/ramda) and/or
   [lodash](https://www.npmjs.com/package/lodash) can be used)
3. apply [CQS & DDD principles](https://martinfowler.com/tags/domain%20driven%20design.html).
4. Write corresponding bdd tests ([behat](https://behat.org/en/latest/),
   [cucumber.js](https://cucumber.io/docs/installation/javascript/), ...)
5. Your code should resides into the following directory structure:

```shell
./src/
   App    # Command, Queries and corresponding handlers
   Domain # Domain model.s/structure.s and value objects
          # (classes or structures & functions if fp)
   Infra  # Implementation of repositories and every specific
          # infrastructure related implementation.s.
```

#### Tips

- Try to first write bdd/gherkin tests, then implement the code.
- Ask you: how many entities do I have? Which one aggregates every action?
- Ask you: how many Commands? Queries?
- At the moment, you don't have to persist data elsewhere than **in memory**.
- Here's an indication of ≈ expected number of line of codes, for implementations
  in **php** and **javascript**:

**php**

```shell
➜ cloc --exclude-dir=vendor .
      13 text files.
      13 unique files.
       2 files ignored.

github.com/AlDanial/cloc v 1.82  T=0.02 s (573.7 files/s, 23186.9 lines/s)
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
PHP                              9             64             48            304
Cucumber                         2              8              0             41
JSON                             1              0              0             20
-------------------------------------------------------------------------------
SUM:                            12             72             48            365
-------------------------------------------------------------------------------
```

**javasript**

```shell
➜ cloc --exclude-dir=node_modules .
      12 text files.
      12 unique files.
       3 files ignored.

github.com/AlDanial/cloc v 1.82  T=0.02 s (534.2 files/s, 14852.0 lines/s)
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
JavaScript                       7             37              0            175
Cucumber                         2              8              0             41
JSON                             1              0              0             17
-------------------------------------------------------------------------------
SUM:                            10             45              0            233
-------------------------------------------------------------------------------
```

#### Evaluation

- Questions (max: 5) before starting to code.
- Quality of the code.
- Please be careful to not over engineer your solution!
- Usage of good practices and modern programming language features.
