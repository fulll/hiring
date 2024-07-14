import { FleetNotFoundError } from '../../Domain/Errors';
import { Vehicle } from '../../Domain/Vehicle';
import { RegisterVehicleCommand } from '../Commands/RegisterVehicleCommand';
import { FleetRepository } from './../../Domain/FleetRepository';

export class RegisterVehicleHandler {
    constructor(private fleetRepository: FleetRepository) {}

    handle(command: RegisterVehicleCommand): void {
        const fleet = this.fleetRepository.findById(command.fleetId);
        if(!fleet) {
            throw new FleetNotFoundError();
        }

        const vehicle = new Vehicle(command.plateNumber);
        fleet.registerVehicle(vehicle);
        this.fleetRepository.save(fleet);
    }
}