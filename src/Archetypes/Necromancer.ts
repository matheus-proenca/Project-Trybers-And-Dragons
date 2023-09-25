import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  energy: EnergyType = 'mana';
  public static instance = 0;

  constructor(name: string) {
    super(name);
    Necromancer.instance += 1;
  }

  static override createdArchetypeInstances(): number {
    return Necromancer.instance;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}

export default Necromancer;