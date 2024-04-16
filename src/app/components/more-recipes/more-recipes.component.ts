import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-more-recipes',
  templateUrl: './more-recipes.component.html',
  styleUrl: './more-recipes.component.css'
})
export class MoreRecipesComponent implements OnInit {
  constructor(public recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes()
  }
}