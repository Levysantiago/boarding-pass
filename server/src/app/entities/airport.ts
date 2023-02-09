export class Airport {
  private city: string;
  private state: string;
  private country: string;

  getCity(): string {
    return this.city;
  }

  getState(): string {
    return this.state;
  }

  getCountry(): string {
    return this.country;
  }
}
