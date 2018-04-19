import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('apple', 1),
        new Ingredient('dirt', 100),
        new Ingredient('water', 5)
      ]
    ),
    new Recipe(
      'A Test Another Recipe',
      'This is simply another a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('salt', 1),
        new Ingredient('pepper', 100),
        new Ingredient('banana', 5)
      ]
    )
  ];

  getRecipes() {
    // if we pass on this 'recipes' array without adding '.slice()',
    // when we change it (whereever we access it) we will modify it in this file as well
    // this way we're passing on a copy of the array to be modify
    console.log('fromRecipeService: ', this.recipes.slice());
    return this.recipes.slice();
  }
}
