import { Injectable } from '@angular/core';

import { Recipe } from './recipe'

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Ruby on Rails',
      'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin',
      '../../../assets/images/1486453061_ruby-rails.png',
      []
    ),
    new Recipe(
      'dots-three-horizontal',
      'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin',
      '../../../assets/entypo/entypo/dots-three-horizontal.svg',
      []
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
}
