import { Injectable, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Ingredient[] = [
  new Ingredient('tomato',10),
  new Ingredient('potato',2)
  ];

  @Output() ingredientChanged = new Subject<Ingredient[]>();

  constructor() { 

  }

  addIngredient (ing: Ingredient) {

  	this.ingredients.push(ing);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  getIngredient () {

  	return this.ingredients.slice();
  }


   addIngredientsToShoppingList (ingredients: Ingredient[]) {


      this.ingredients.push(...ingredients);
      this.ingredientChanged.next(this.ingredients.slice());

  }



  
}
