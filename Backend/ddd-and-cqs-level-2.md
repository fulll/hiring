## [back/ddd/cqs] Vehicle fleet parking management

### Instructions

I have a vehicle fleet and I want to manage where every vehicle is parked.
This is the second part, we now want to expose our work to the world!

### Subject

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
2. Take a look at your **B**eavior **D**riven **D**evelopment tool (BDD),
   especially profiles and/or suites and/or tags to only switch pertinent tests
   on real infrastructure (with persistence) while keeping not critical
   as they was before.

#### Tips

- Bonus: for code quality, you can use some tools.
- Bonus: you can consider to setup a ci/cd process.

#### Evaluation

- Quality of the code.
- Please be careful to not over engineer your solution!
- Usage of good practices and modern programming language features.
