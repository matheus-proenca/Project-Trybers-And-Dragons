import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private maxLifePoints_: number;
  private lifePoints_: number;
  private strength_: number;
  private defense_: number;
  private dexterity_: number;
  private energy_: Energy;

  constructor(
    private name_:string,
    private race_:Race = new Elf(name_, getRandomInt(1, 10)),
    private archetype_:Archetype = new Mage(name_),
  ) {
    this.defense_ = getRandomInt(1, 10);
    this.dexterity_ = getRandomInt(1, 10);
    this.energy_ = { 
      type_: archetype_.energyType, amount: getRandomInt(1, 10) };
    this.maxLifePoints_ = race_.maxLifePoints;
    this.lifePoints_ = this.maxLifePoints_;
    this.strength_ = getRandomInt(1, 10);
  }

  get race():Race {
    return this.race_;
  }

  get archetype(): Archetype {
    return this.archetype_;
  }

  get lifePoints(): number {
    return this.lifePoints_;
  }

  get strength(): number {
    return this.strength_;
  }

  get defense(): number {
    return this.defense_;
  }

  get dexterity(): number {
    return this.dexterity_;
  }

  get energy(): Energy {
    return { ...this.energy_ };
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength_);
  }

  special(enemy: Fighter): void {
    enemy.receiveDamage(this.strength_ * 2);
  }

  levelUp(): void {
    this.maxLifePoints_ += getRandomInt(1, 10);
    this.strength_ += getRandomInt(1, 10);
    this.dexterity_ += getRandomInt(1, 10);
    this.defense_ += getRandomInt(1, 10);
    this.energy_ = { type_: this.archetype_.energyType, amount: 10 };
    if (this.maxLifePoints_ < this.race_.maxLifePoints) {
      this.lifePoints_ = this.maxLifePoints_;
    }
    if (this.maxLifePoints_ > this.race_.maxLifePoints) {
      this.lifePoints_ = this.race_.maxLifePoints;
    }
  }

  receiveDamage(attackPoints: number): number {
    const damage = this.defense_ - attackPoints;
    if (damage < 0) {
      this.lifePoints_ -= attackPoints;
    }
    if (damage >= 0) {
      this.lifePoints_ -= 1;
    }
    if (this.lifePoints_ <= 0) {
      this.lifePoints_ = -1;
    }
    return this.lifePoints_;
  }
}

export default Character;