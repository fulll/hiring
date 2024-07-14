import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'assert';
import { Fleet } from '../../src/Domain/Fleet';
import { RegisterVehicleCommand } from '../../src/App/Commands/RegisterVehicleCommand';
import { FleetNotFoundError, VehicleAlreadyRegisteredError } from '../../src/Domain/Errors';
import { fleetData } from '../fixtures/mock';
import { CucumberContext } from '../cucumberContext';

Given('the fleet of another user', function () {
    this.otherFleet = new Fleet(fleetData.fleet2.id);
    this.fleetRepository.save(this.otherFleet);
});

Given('this vehicle has been registered into the other user\'s fleet', function () {
    const command = new RegisterVehicleCommand(this.otherFleet.id, this.vehicle.plateNumber);
    this.registerVehicleHandler.handle(command);
});

When('I register this vehicle into my fleet', function () {
    try {
        const command = new RegisterVehicleCommand(this.fleet.id, this.vehicle.plateNumber);
        this.registerVehicleHandler.handle(command);
    } catch (e) {
        this.error = e;
    }
});

When('I try to register this vehicle into my fleet', function () {
    try {
        const command = new RegisterVehicleCommand(this.fleet.id, this.vehicle.plateNumber);
        this.registerVehicleHandler.handle(command);
    } catch (e) {
        this.error = e;
    }
});

Then('this vehicle should be part of my vehicle fleet', function (this: CucumberContext) {
    const fleetFound = this.fleetRepository.findById(this.fleet.id);
    if(!fleetFound) {
        throw new FleetNotFoundError();
    }

    const vehicleFound = fleetFound.getVehicle(this.vehicle.plateNumber);

    assert.strictEqual(vehicleFound?.plateNumber, this.vehicle.plateNumber);
});

Then('I should be informed this vehicle has already been registered into my fleet', function () {
    assert(this.error instanceof VehicleAlreadyRegisteredError);
});
