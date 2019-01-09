import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeGuardComponent } from '../auth/recipe-guard/recipe-guard.component';

const routes: Routes = [
   
    {
        path: '', component: RecipesComponent, children: [
          { path: '', component: RecipeStartComponent,},
          { path: 'new', component: RecipeEditComponent, canActivate: [RecipeGuardComponent]},
          { path: ':id', component: RecipeDetailComponent},
          { path: ':id/edit', component: RecipeEditComponent, canActivate: [RecipeGuardComponent]}


          ]
    }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  providers: [RecipeGuardComponent],
  exports: [RouterModule]
})
export class RecipeRoutingModule { 


}
