import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class RecipesService {
    public recipes: Array<any> = []
    public recipe: any
    public randomRecipes: Array<any> = []

    public breakfastRecipes: Array<any> = []
    public lunchRecipes: Array<any> = []
    public dinnerRecipes: Array<any> = []

    public easyBreakfastRecipes: Array<any> = []
    public mediumBreakfastRecipes: Array<any> = []

    public easyLunchRecipes: Array<any> = []
    public mediumLunchRecipes: Array<any> = []

    public easyDinnerRecipes: Array<any> = []
    public mediumDinnerRecipes: Array<any> = []

    public getRecipes() {
        fetch('https://dummyjson.com/recipes?limit=50')
            .then(res => res.json())
            .then(data => this.recipes = data.recipes)
            .then(() => this.breakfastRecipes = this.recipes.filter((el) => el.mealType.includes('Breakfast')))
            .then(() => this.lunchRecipes = this.recipes.filter((el) => el.mealType.includes('Lunch')))
            .then(() => this.dinnerRecipes = this.recipes.filter((el) => el.mealType.includes('Dinner')))

            .then(() => this.easyBreakfastRecipes = this.breakfastRecipes.filter((el) => el.difficulty === 'Easy'))
            .then(() => this.mediumBreakfastRecipes = this.breakfastRecipes.filter((el) => el.difficulty === 'Medium'))

            .then(() => this.easyLunchRecipes = this.lunchRecipes.filter((el) => el.difficulty === 'Easy'))
            .then(() => this.mediumLunchRecipes = this.lunchRecipes.filter((el) => el.difficulty === 'Medium'))

            .then(() => this.easyDinnerRecipes = this.dinnerRecipes.filter((el) => el.difficulty === 'Easy'))
            .then(() => this.mediumDinnerRecipes = this.dinnerRecipes.filter((el) => el.difficulty === 'Medium'))
            .finally(() => this.randomRecipes = this.recipes.sort(() => 0.5 - Math.random()).slice(0, 6))
    }

    public getRecipe(id: number){
        fetch('https://dummyjson.com/recipes/'+id)
        .then(res => res.json())
        .then(data => this.recipe = data)
    }
}