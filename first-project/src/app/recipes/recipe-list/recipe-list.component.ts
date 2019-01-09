import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

receitas: Recipe[];
subs: Subscription;
subs2: Subscription;
error: String;


constructor (private recipeService: RecipeService,
			private router: Router,
			private route: ActivatedRoute) {
  

}
  ngOnInit() {

    this.subs = this.recipeService.recipeChanged.subscribe (
      (recipes: Recipe[]) => {

        this.receitas = recipes;
      }

    );

    this.subs2 = this.recipeService.errorSubject.subscribe (
      (error: String) => {

        this.error = error;
      }

    );

    //this.recipeService.fetchRecipes();
    
  }

  onNewRecipe () {

  	this.router.navigate(['new'], {relativeTo: this.route} );
    
  }

  ngOnDestroy () {

     this.subs.unsubscribe();
  }



}
