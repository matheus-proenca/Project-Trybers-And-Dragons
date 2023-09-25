import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  energy: EnergyType = 'stamina';
  public static instance = 0;

  constructor(name:string) {
    super(name);
    Ranger.instance += 1;
  }

  static override createdArchetypeInstances(): number {
    return Ranger.instance;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}

export default Ranger;