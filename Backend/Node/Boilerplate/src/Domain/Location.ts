export class Location {
  constructor(
    public latitude: number,
    public longitude: number,
    public altitude?: number
  ) {}

  equals(location: Location): boolean {
    return (
      this.latitude === location.latitude &&
      this.longitude === location.longitude &&
      this.altitude === location.altitude
    );
  }
}
