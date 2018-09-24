import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

private receitas: Recipe[] = [ new Recipe('A test recipe', 'Some ingredients' , 'https://i.ytimg.com/vi/jPOxWOE-3Xk/maxresdefault.jpg')
];
recipeSelected = new EventEmitter<Recipe>();

getRecipes () {
	
	return this.receitas.slice();
}


  constructor() { }
}
