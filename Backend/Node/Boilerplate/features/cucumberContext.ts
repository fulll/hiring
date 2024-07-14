import { ParkVehicleHandler } from "../src/App/Handlers/ParkVehicleHandler";
import { RegisterVehicleHandler } from "../src/App/Handlers/RegisterVehicleHandler";
import { Fleet } from "../src/Domain/Fleet";
import { Location } from "../src/Domain/Location";
import { FleetRepository } from "../src/Domain/FleetRepository";
import { Vehicle } from "../src/Domain/Vehicle";

export interface CucumberContext {
  fleet: Fleet;
  otherFleet: Fleet;
  fleetRepository: FleetRepository;
  vehicle: Vehicle;
  location: Location;
  error: Error | null;
  registerVehicleHandler: RegisterVehicleHandler;
  parkVehicleHandler: ParkVehicleHandler;
}
