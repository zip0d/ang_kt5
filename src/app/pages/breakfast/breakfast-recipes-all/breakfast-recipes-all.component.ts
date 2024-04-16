import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-breakfast-recipes-all',
  templateUrl: './breakfast-recipes-all.component.html',
  styleUrl: './breakfast-recipes-all.component.css'
})
export class BreakfastRecipesAllComponent implements OnInit {
  constructor(public recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes()
  }
}
