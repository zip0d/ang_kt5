import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-breakfast-recipes-easy',
  templateUrl: './breakfast-recipes-easy.component.html',
  styleUrl: './breakfast-recipes-easy.component.css'
})
export class BreakfastRecipesEasyComponent implements OnInit {
  constructor(public recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes()
  }
}
