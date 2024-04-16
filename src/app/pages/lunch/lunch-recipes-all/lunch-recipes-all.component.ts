import { Component } from '@angular/core';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-lunch-recipes-all',
  templateUrl: './lunch-recipes-all.component.html',
  styleUrl: './lunch-recipes-all.component.css'
})
export class LunchRecipesAllComponent {
  constructor(public recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes()
  }
}
