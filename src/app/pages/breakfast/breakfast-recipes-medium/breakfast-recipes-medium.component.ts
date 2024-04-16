import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-breakfast-recipes-medium',
  templateUrl: './breakfast-recipes-medium.component.html',
  styleUrl: './breakfast-recipes-medium.component.css'
})
export class BreakfastRecipesMediumComponent implements OnInit {
  constructor(public recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes()
  }
}
