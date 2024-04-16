import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-breakfast-recipes',
  templateUrl: './breakfast-recipes.component.html',
  styleUrl: './breakfast-recipes.component.css'
})
export class BreakfastRecipesComponent implements OnInit {
  constructor(public recipeService: RecipesService) { }
  
  ngOnInit(): void {
    this.recipeService.getRecipes()
  }
}
