import { Injectable, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Ingredient[] = [
  new Ingredient('tomato',10),
  new Ingredient('potato',2)
  ];

  @Output() ingredientChanged = new EventEmitter<Ingredient[]>();

  constructor() { 

  }

  addIngredient (ing: Ingredient) {

  	this.ingredients.push(ing);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  getIngredient () {

  	return this.ingredients.slice();
  }


   addIngredientsToShoppingList (ingredients: Ingredient[]) {


      this.ingredients.push(...ingredients);
      this.ingredientChanged.emit(this.ingredients.slice());

  }



  
}
