import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
  new Ingredient('tomato',10),
  new Ingredient('potato',2)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded (ing: Ingredient) {

    this.ingredients.push(ing);
  }

}
