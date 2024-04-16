import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-dinner-recipes-all',
  templateUrl: './dinner-recipes-all.component.html',
  styleUrl: './dinner-recipes-all.component.css'
})
export class DinnerRecipesAllComponent implements OnInit {
  constructor(public recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes()
  }
}
