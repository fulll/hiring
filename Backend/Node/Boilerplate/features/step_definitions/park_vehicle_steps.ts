import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'assert';
import { Location } from '../../src/Domain/Location';
import { ParkVehicleCommand } from '../../src/App/Commands/ParkVehicleCommand';
import { VehicleIsAlreadyParkedAtLocationError } from '../../src/Domain/Errors';
import { locationData } from '../fixtures/mock';
import { CucumberContext } from '../cucumberContext';

Given('a location', function () {
    this.location = new Location(locationData.location1.latitude, locationData.location1.longitude, locationData.location1.altitude);
});

Given('my vehicle has been parked into this location', function () {
    this.fleet.parkVehicle(this.vehicle, this.location);
});

When('I park my vehicle at this location', function () {
    try {
        const command = new ParkVehicleCommand(this.fleet.id, this.vehicle.plateNumber, this.location);
        this.parkVehicleHandler.handle(command);
    } catch (e) {
        this.error = e;
    }
});

When('I try to park my vehicle at this location', function () {
    try {
        const command = new ParkVehicleCommand(this.fleet.id, this.vehicle.plateNumber, this.location);
        this.parkVehicleHandler.handle(command);
    } catch (e) {
        this.error = e;
    }
});

Then('the known location of my vehicle should verify this location', function (this: CucumberContext) {
    const vehicleLocation = this.fleet.getVehicleLocation(this.vehicle);
    assert.strictEqual(vehicleLocation?.latitude, this.location.latitude);
    assert.strictEqual(vehicleLocation?.longitude, this.location.longitude);
    assert.strictEqual(vehicleLocation?.altitude, this.location.altitude);
});

Then('I should be informed that my vehicle is already parked at this location', function () {
    assert(this.error instanceof VehicleIsAlreadyParkedAtLocationError);
});
