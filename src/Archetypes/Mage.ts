import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  energy: EnergyType = 'mana';
  public static instance = 0;

  constructor(name: string) {
    super(name);
    Mage.instance += 1;
  }

  static override createdArchetypeInstances(): number {
    return Mage.instance;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}

export default Mage;