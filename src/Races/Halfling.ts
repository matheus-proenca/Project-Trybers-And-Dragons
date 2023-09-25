import Race from './Race';

class Halfling extends Race {
  life = 60;
  public static instance = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.instance += 1;
  }

  get maxLifePoints(): number {
    return this.life;
  }

  static override createdRacesInstances(): number {
    return Halfling.instance;
  }
}

export default Halfling;