abstract class Race {
  private names: string;
  private dex: number;

  constructor(
    name: string,
    dexterity: number,
  ) {
    this.names = name;
    this.dex = dexterity;
  }

  public get name(): string {
    return this.names;
  }

  public get dexterity(): number {
    return this.dex;
  }

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;