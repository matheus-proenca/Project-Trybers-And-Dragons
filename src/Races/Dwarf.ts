import Race from './Race';

class Dwarf extends Race {
  life = 80;
  public static instance = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.instance += 1;
  }

  get maxLifePoints(): number {
    return this.life;
  }

  static override createdRacesInstances(): number {
    return Dwarf.instance;
  }
}

export default Dwarf;