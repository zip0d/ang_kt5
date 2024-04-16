import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-dinner-recipes',
  templateUrl: './dinner-recipes.component.html',
  styleUrl: './dinner-recipes.component.css'
})
export class DinnerRecipesComponent implements OnInit {
  constructor(public recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes()
  }
}
