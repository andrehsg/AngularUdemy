import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


	constructor(private shopService: ShoppingListService) {

		
	}

	recipeSelected = new EventEmitter<Recipe>();
	private receitas: Recipe[] = [
	new Recipe(
	'Italian pizza',
	'made at italy',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUzESnvMKEaINIuKQyI8ZC2XuYVoedDNxNhX4HIpKHq1OxXnnm',
	 [
	 	new Ingredient('Meat', 1),
	 	new Ingredient('French Fries', 1)
	 ]
	 ),
	new Recipe(
	'X burger',
	'you can eat a lot',
	'https://cdn-images-1.medium.com/max/1000/1*OL4q5Jrem4nnD3BuDHg7wg.png',
	 [
	 	new Ingredient('Bread', 1),
	 	new Ingredient('Ham', 2),
	 	new Ingredient('Cheese', 2)
	 ]
	 ),
	 ];



   getRecipes () {
	
	return this.receitas.slice();
   }

   addIngredientsToShoppingList (ingredients: Ingredient[]) {

   		this.shopService.addIngredientsToShoppingList(ingredients);

  }


  
}
