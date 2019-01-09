import { Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import { AuthserviceService } from '../auth/authservice.service';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


	constructor(private shopService: ShoppingListService,
	            private http: HttpClient,
	            private authService: AuthserviceService) {

		
	}

	httpOptions = {
	  headers: new HttpHeaders({
	    'Content-Type':  'application/json',
	    'Authorization': 'AIzaSyDWtfv4O4iA3A6DzVKOB2F4Pfb0wXRFAx8'
	  })
	};

    Url = 'https://recipe-book-cd7de.firebaseio.com/recipes.json';
    error = '';
	recipeChanged = new Subject<Recipe[]> ();
	errorSubject = new Subject<String> ();
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


   // not being used
   setRecipes (rec: Recipe[]) {
		
		this.receitas = rec;
		this.recipeChanged.next(this.receitas.slice());
   }

   getRecipes () {
		
		return this.receitas.slice();
   }

    getRecipe (index: number) {
	
		return this.receitas[index];
   }

   addIngredientsToShoppingList (ingredients: Ingredient[]) {
   		this.shopService.addIngredientsToShoppingList(ingredients);
  }

  addRecipe (recipe: Recipe) {
  		this.receitas.push(recipe);
  		this.recipeChanged.next(this.receitas.slice());
  }

  updateRecipe (index: number, newRecipe: Recipe) {
  		this.receitas[index] = newRecipe;
  		this.recipeChanged.next(this.receitas.slice());
  }

  deleteRecipe (index: number) {

    	this.receitas.splice(index,1);
    	this.recipeChanged.next(this.receitas.slice());

  }

  fetchRecipes (){

  	const token = this.authService.getToken();
  	console.log (this.Url + "?auth=" + token);

  	return this.http.get(this.Url + "?auth=" + token)
    .pipe(
      catchError(this.handleError)
      )
      .subscribe(
	        (data: any) => {
		        console.log(data);
		      	this.receitas = data, // success path
		      	this.recipeChanged.next(this.receitas.slice());
		      	error => this.error = error // error path
		      	
	      	},
	      	  err => console.error('Observer got an error: ' + err),
  			  () => console.log('Observer got a complete notification')
      	);

   

  }

  saveRecipes () {
	  return this.http.put(this.Url, this.getRecipes())
	    .pipe(
	      catchError(this.handleError)
	    );
}

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};

  
}
