import { VehicleAlreadyRegisteredError, VehicleIsAlreadyParkedAtLocationError } from "./Errors";
import { Location } from "./Location";
import { Vehicle } from "./Vehicle";

export class Fleet {
    private vehicles: Map<string, Vehicle> = new Map();
    private vehicleLocations: Map<string, Location> = new Map();

    constructor(public id: string) {}

    registerVehicle(vehicle: Vehicle): void {
        if(this.vehicles.has(vehicle.plateNumber)) {
            throw new VehicleAlreadyRegisteredError();
        }
        this.vehicles.set(vehicle.plateNumber, vehicle);
    }

    hasVehicle(vehicle: Vehicle): boolean {
        return this.vehicles.has(vehicle.plateNumber);
    }

    parkVehicle(vehicle: Vehicle, location: Location): void {
        const currentLocation = this.vehicleLocations.get(vehicle.plateNumber);
        if(currentLocation && currentLocation.equals(location)) {
            throw new VehicleIsAlreadyParkedAtLocationError();
        }
        this.vehicleLocations.set(vehicle.plateNumber, location);
    }

    getVehicle(plateNumber: string): Vehicle | undefined {
        return this.vehicles.get(plateNumber);
    }

    getVehicleLocation(vehicle: Vehicle): Location | undefined {
        return this.vehicleLocations.get(vehicle.plateNumber);
    }
}