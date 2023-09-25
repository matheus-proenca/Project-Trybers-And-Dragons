import Race from './Race';

class Orc extends Race {
  life = 74;
  public static instance = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.instance += 1;
  }

  get maxLifePoints(): number {
    return this.life;
  }

  static override createdRacesInstances(): number {
    return Orc.instance;
  }
}

export default Orc;