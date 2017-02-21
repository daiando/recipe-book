import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';
import { RecipeService } from '../recipe.service'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  // @Output() dataListner = new EventEmitter<Recipe>();
  // recipe = new Recipe(
  //   'Ruby on Rails',
  //   'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin',
  //   '../../../assets/images/1486453061_ruby-rails.png'
  // );

  constructor(private RecipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.RecipeService.getRecipes();
  }

  // onSelected(recipe: Recipe) {
  // 	this.dataListner.emit(recipe);
  // }

}
