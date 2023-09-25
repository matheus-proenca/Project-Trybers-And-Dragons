import { EnergyType } from '../Energy';

abstract class Archetype {
  private names: string;
  private poder: number;
  private custo: number;

  constructor(name:string) {
    this.names = name;
    this.poder = 0;
    this.custo = 0;
  }

  get name(): string {
    return this.names;
  } 

  get special(): number {
    return this.poder;
  }

  get cost(): number {
    return this.cost;
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;