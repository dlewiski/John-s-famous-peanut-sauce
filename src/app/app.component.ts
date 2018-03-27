import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { Ingredient } from './models/ingredient.model';
import { Instruction } from './models/instruction.model';
import { RECIPES } from './models/master_recipe_maker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  recipes = RECIPES;
}
