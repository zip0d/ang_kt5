import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-lunch-recipes-easy',
  templateUrl: './lunch-recipes-easy.component.html',
  styleUrl: './lunch-recipes-easy.component.css'
})
export class LunchRecipesEasyComponent implements OnInit {
  constructor(public recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes()
  }
}
