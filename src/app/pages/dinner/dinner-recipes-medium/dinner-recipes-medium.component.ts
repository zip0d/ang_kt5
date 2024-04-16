import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-dinner-recipes-medium',
  templateUrl: './dinner-recipes-medium.component.html',
  styleUrl: './dinner-recipes-medium.component.css'
})
export class DinnerRecipesMediumComponent implements OnInit {
  constructor(public recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes()
  }
}
