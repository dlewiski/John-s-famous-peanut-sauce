import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { Ingredient } from './models/ingredient.model';
import { Instruction } from './models/instruction.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  peanut_sauce = new Recipe(); 

}
