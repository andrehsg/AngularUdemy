import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shopListService: ShoppingListService) {

  }

  ngOnInit() {

    this.ingredients = this.shopListService.getIngredient();
    this.subscription = this.shopListService.ingredientChanged
    .subscribe(
      (ing: Ingredient[]) => {  this.ingredients = ing}
     );





  }

  ngOnDestroy () {

      this.subscription.unsubscribe();
  }



}
