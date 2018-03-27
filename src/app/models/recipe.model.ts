import { Ingredient } from './ingredient.model';
import { Instruction } from './instruction.model';

export class Recipe {
  public ingredients: Ingredient[] = []
  public instructions: Instruction[] = []
  constructor(public title: string)
}
