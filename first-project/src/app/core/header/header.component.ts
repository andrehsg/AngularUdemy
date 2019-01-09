import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../../recipes/recipe.service';
import { AuthserviceService } from '../../auth/authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private recipeService: RecipeService,
              private authService: AuthserviceService) { }

  
  ngOnInit() {
  }

  onSave () {


	   this.recipeService.saveRecipes()
	   .subscribe( (response: Response) => {console.log(response)} 

   		);
   }

   onLogOut () {

       this.authService.logOut();
   }

   isLoggedIn () {

      return this.authService.isLoggedIn();
   }



   onFetch () {


	   this.recipeService.fetchRecipes();

  }



}
