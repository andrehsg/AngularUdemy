import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  receita: Recipe;
  id: number;
  constructor (private recipeService: RecipeService, private route: ActivatedRoute) {

  	   

   }

  ngOnInit() {
    this.route.params
    .subscribe (
      (params: Params) => {
      this.id = +params['id'];
      this.receita = this.recipeService.getRecipe(this.id);
      }

    );
  
  }

  OnAddToShoppingList () {

    this.recipeService.addIngredientsToShoppingList(this.receita.ingredients);
  }

}
