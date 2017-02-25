import { Injectable } from '@angular/core';

import { Recipe } from './recipe'
import { Ingredient } from '../ingredient'

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Ruby on Rails',
      'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin',
      '../../../assets/images/1486453061_ruby-rails.png',
      [
        new Ingredient('French Fries', 2),
        new Ingredient('Pork Meat', 1)
      ]
    ),
    new Recipe(
      'dots-three-horizontal',
      'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin',
      '../../../assets/entypo/entypo/dots-three-horizontal.svg',
      [
        new Ingredient('Tomato', 10),
        new Ingredient('Cheese', 6)
      ]
    ),
    new Recipe(
      'sweden',
      'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin',
      '../../../assets/entypo/entypo/sweden.svg',
      []
    )
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
  
  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
