import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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
  @Output() dataListner = new EventEmitter<Recipe>();
  // recipe = new Recipe(
  //   'Ruby on Rails',
  //   'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin',
  //   '../../../assets/images/1486453061_ruby-rails.png'
  // );

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
  	this.dataListner.emit(recipe);
  }

}
