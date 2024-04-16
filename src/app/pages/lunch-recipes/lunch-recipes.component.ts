import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-lunch-recipes',
  templateUrl: './lunch-recipes.component.html',
  styleUrl: './lunch-recipes.component.css'
})
export class LunchRecipesComponent implements OnInit {
  constructor(public recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes()
  }
}
