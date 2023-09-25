import Race from './Race';

class Elf extends Race {
  life = 99;
  public static instance = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.instance += 1;
  }

  get maxLifePoints(): number {
    return this.life;
  }

  static override createdRacesInstances(): number {
    return Elf.instance;
  }
}

export default Elf;