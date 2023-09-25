import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  energy: EnergyType = 'stamina';
  public static instance = 0;

  constructor(name: string) {
    super(name);
    Warrior.instance += 1;
  }

  static override createdArchetypeInstances(): number {
    return Warrior.instance;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}

export default Warrior;