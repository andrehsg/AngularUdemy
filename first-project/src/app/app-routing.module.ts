import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';     // Add your component here
import { ShoppingListComponent } from './shopping-list/shopping-list.component';  // Add your component here
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';  // Add your component here
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';  // Add your component here
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';  // Add your component here

//This is my case 
const routes: Routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: RecipesComponent,
        children: [
          { path: '', component: RecipeStartComponent},
          { path: 'new', component: RecipeEditComponent},
          { path: ':id', component: RecipeDetailComponent},
          { path: ':id/edit', component: RecipeEditComponent}


          ]
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }