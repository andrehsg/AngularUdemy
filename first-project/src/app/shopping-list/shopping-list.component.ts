import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store} from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';
import { Subscription, Observable } from 'rxjs';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  private subscription: Subscription;

  constructor(private shopListService: ShoppingListService, private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) {

  }

  ngOnInit() {

    this.shoppingListState = this.store.select('shoppingList');
   // this.subscription = this.shopListService.ingredientChanged
    //.subscribe(
    //  (ing: Ingredient[]) => {  this.shoppingListState = ing}
    // );





  }

  ngOnDestroy () {

      this.subscription.unsubscribe();
  }

  onEditItem (index: number) {

    this.shopListService.startedEditing.next(index);
  }



}
