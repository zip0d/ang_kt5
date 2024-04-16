import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-dinner-recipes-easy',
  templateUrl: './dinner-recipes-easy.component.html',
  styleUrl: './dinner-recipes-easy.component.css'
})
export class DinnerRecipesEasyComponent implements OnInit {
  constructor(public recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes()
  }
}
