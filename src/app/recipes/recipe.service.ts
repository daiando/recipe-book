import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Recipe } from './recipe'
import { Ingredient } from '../ingredient'

@Injectable()
export class RecipeService {
  recipeChanged = new EventEmitter<Recipe[]>();

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
  constructor(private http: Http) { }

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

  private apiEndpoint = 'https://recipebook-test-5f4c1.firebaseio.com/recipes.json'
  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-type': 'application/json'
    });

    return this.http.put(
      this.apiEndpoint,
      body,
      {headers: headers}
    );
  }

  fetchData() {
    return this.http.get(this.apiEndpoint)
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipeChanged.emit(this.recipes);
        }
      );
  }
}
