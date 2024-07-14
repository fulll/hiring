import { FleetNotFoundError } from "../../Domain/Errors";
import { FleetRepository } from "../../Domain/FleetRepository";
import { Vehicle } from "../../Domain/Vehicle";
import { ParkVehicleCommand } from "../Commands/ParkVehicleCommand";

export class ParkVehicleHandler {
    constructor(private fleetRepository: FleetRepository) {}

    handle(command: ParkVehicleCommand): void {
        const fleet = this.fleetRepository.findById(command.fleetId);
        if(!fleet) {
            throw new FleetNotFoundError();
        }

        const vehicle = new Vehicle(command.vehiclePlateNumber);
        fleet.parkVehicle(vehicle, command.location);
        this.fleetRepository.save(fleet);
    }
}