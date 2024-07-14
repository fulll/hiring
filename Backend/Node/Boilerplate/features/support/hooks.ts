import { Before } from '@cucumber/cucumber';
import { InMemoryFleetRepository } from '../../src/Infra/InMemoryFleetRepository';
import { RegisterVehicleHandler } from '../../src/App/Handlers/RegisterVehicleHandler';
import { ParkVehicleHandler } from '../../src/App/Handlers/ParkVehicleHandler';

Before(function () {
    this.fleetRepository = new InMemoryFleetRepository();
    this.registerVehicleHandler = new RegisterVehicleHandler(this.fleetRepository);
    this.parkVehicleHandler = new ParkVehicleHandler(this.fleetRepository);
    this.error = null;
});