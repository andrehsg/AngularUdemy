import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

receitas: Recipe[] = [ new Recipe('A test recipe', 'Some ingredients' , 'https://i.ytimg.com/vi/jPOxWOE-3Xk/maxresdefault.jpg')
];
  constructor() {
  this.receitas.push(new Recipe('A tests rsecipe', 'Some ingredients' , 'https://i.ytimg.com/vi/jPOxWOE-3Xk/maxresdefault.jpg')); }

  ngOnInit() {
  }

}
