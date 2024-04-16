import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'] 
})
export class RecipeItemComponent {
  @Input() id: number = 0;
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() ingredients: Array<string> = [];
  @Input() calories: number = 0;
  @Input() rating: number = 0;
  @Input() prepTime: number = 0;
  @Input() cookTime: number = 0; 
}
