import { Fleet } from './Fleet';
export class VehicleAlreadyRegisteredError extends Error {
    constructor() {
        super('Vehicle already registered in the fleet');
        this.name = 'VehicleAlreadyRegisteredError';
    }
}

export class VehicleIsAlreadyParkedAtLocationError extends Error {
    constructor() {
        super('Vehicle is already parked at this location');
        this.name = 'VehicleIsAlreadyParkedAtLocationError';
    }
}

export class FleetNotFoundError extends Error {
    constructor() {
        super('Fleet not found');
        this.name = 'FleetNotFoundError';
    }
}