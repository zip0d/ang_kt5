import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-lunch-recipes-medium',
  templateUrl: './lunch-recipes-medium.component.html',
  styleUrl: './lunch-recipes-medium.component.css'
})
export class LunchRecipesMediumComponent implements OnInit {
  constructor(public recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes()
  }
}
