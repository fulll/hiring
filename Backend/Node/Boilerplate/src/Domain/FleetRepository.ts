import { Fleet } from "./Fleet";

export interface FleetRepository {
  findById(fleetId: string): Fleet | undefined;
  save(fleet: Fleet): void;
}
