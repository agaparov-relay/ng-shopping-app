import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is a test recipe 1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1bPJyZFSVNJArocOLzfbkRMC5_GsbZFUfw&usqp=CAU'),
    new Recipe('A Test Recipe 2', 'This is a test recipe 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1bPJyZFSVNJArocOLzfbkRMC5_GsbZFUfw&usqp=CAU'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
