import { Fleet } from "../Domain/Fleet";
import { FleetRepository } from "../Domain/FleetRepository";

export class InMemoryFleetRepository implements FleetRepository {
  private fleets: Map<string, Fleet> = new Map();

  findById(fleetId: string): Fleet | undefined {
    return this.fleets.get(fleetId);
  }

  save(fleet: Fleet): void {
    this.fleets.set(fleet.id, fleet);
  }
}
