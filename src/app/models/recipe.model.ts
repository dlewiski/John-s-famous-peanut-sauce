import { Ingredient } from './ingredient.model';
import { Instruction } from './instruction.model';

export class Recipe {
  constructor(public title: string, public ingredients: Ingredient[]=[], public instructions: Instruction[]){};
}
