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

 ingredientChanged = new Subject<Ingredient[]>();
 startedEditing = new Subject<number>();

  constructor() { 

  }

  addIngredient (ing: Ingredient) {

  	this.ingredients.push(ing);
    this.ingredientChanged.next(this.ingredients.slice());
  }

    updateIngredient (index: number, ing: Ingredient) {

    this.ingredients[index] = ing;
    this.ingredientChanged.next(this.ingredients.slice());
  }

    deleteIngredient (index: number) {

    this.ingredients.splice(index,1);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  getIngredient () {

  	return this.ingredients.slice();
  }

   getIngredients (index: number) {

    return this.ingredients[index];
  }


   addIngredientsToShoppingList (ingredients: Ingredient[]) {


      this.ingredients.push(...ingredients);
      this.ingredientChanged.next(this.ingredients.slice());

  }



  
}
