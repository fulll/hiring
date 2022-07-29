## [back/ddd/cqrs] Vehicle fleet parking management

### Instructions

I have a vehicle fleet and I want to manage where every vehicle is parked.

### Step 1

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
3. Write corresponding bdd tests ([behat](https://behat.org/en/latest/),
   [cucumber.js](https://cucumber.io/docs/installation/javascript/), ...)
4. Your code should resides into the following directory structure:

#### Bonus

We use DDD and suggest its use but all architectures are acceptable for this test

- apply [CQRS & DDD principles](https://martinfowler.com/tags/domain%20driven%20design.html).

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
- Ask you: how many entities do I have?
- Ask you: how many Commands? Queries?
- At the moment, you don't have to persist data elsewhere than **in memory**.
- Here's an indication of ≈ expected number of line of codes, for implementations
  in **php** and **javascript**:

## Step 2

I have a vehicle fleet and I want to manage where every vehicle is parked.
This is the second part, we now want to expose our work to the world!

Please wrap the part 1 into a complete application. We want:

1. A command line cli with the following commands:

```shell
./fleet create <userId> # returns fleetId on the standard output
./fleet register-vehicle <fleetId> <vehiclePlateNumber>
./fleet localize-vehicle <fleetId> <vehiclePlateNumber> lat lng [alt]
```

2. To persist fleet and vehicles into a real repository/database.

#### Guidelines

1. Feel free to use helpful framework/libs to manage command line cli
2. Take a look at your **B**ehavior **D**riven **D**evelopment tool (BDD),
   especially profiles and/or suites and/or tags to only switch pertinent tests
   on real infrastructure (with persistence) while keeping not critical
   as they was before.

## Step 3 (Bonus)

- For code quality, you can use some tools : which one and why (in a few words) ?
- you can consider to setup a ci/cd process : describe the necessary actions in a few words


#### Evaluation

- Quality of the code.
- Please be careful to not over engineer your solution!
- Usage of good practices and modern programming language features.
