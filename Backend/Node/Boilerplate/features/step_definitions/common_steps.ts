import { Given } from "@cucumber/cucumber";
import { Vehicle } from "../../src/Domain/Vehicle";
import { Fleet } from "../../src/Domain/Fleet";
import { fleetData, vehicleData } from "../fixtures/mock";

Given('my fleet', function () {
    this.fleet = new Fleet(fleetData.fleet1.id);
    this.fleetRepository.save(this.fleet);
});

Given('a vehicle', function () {
    this.vehicle = new Vehicle(vehicleData.vehicle1.plateNumber);
});

Given('I have registered this vehicle into my fleet', function () {
    this.fleet.registerVehicle(this.vehicle);
});