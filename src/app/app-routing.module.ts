import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakfastRecipesComponent } from './pages/breakfast-recipes/breakfast-recipes.component';
import { LunchRecipesComponent } from './pages/lunch-recipes/lunch-recipes.component';
import { DinnerRecipesComponent } from './pages/dinner-recipes/dinner-recipes.component';
import { BreakfastRecipesEasyComponent } from './pages/breakfast/breakfast-recipes-easy/breakfast-recipes-easy.component';
import { BreakfastRecipesMediumComponent } from './pages/breakfast/breakfast-recipes-medium/breakfast-recipes-medium.component';
import { BreakfastRecipesAllComponent } from './pages/breakfast/breakfast-recipes-all/breakfast-recipes-all.component';
import { LunchRecipesAllComponent } from './pages/lunch/lunch-recipes-all/lunch-recipes-all.component';
import { LunchRecipesEasyComponent } from './pages/lunch/lunch-recipes-easy/lunch-recipes-easy.component';
import { LunchRecipesMediumComponent } from './pages/lunch/lunch-recipes-medium/lunch-recipes-medium.component';
import { DinnerRecipesAllComponent } from './pages/dinner/dinner-recipes-all/dinner-recipes-all.component';
import { DinnerRecipesEasyComponent } from './pages/dinner/dinner-recipes-easy/dinner-recipes-easy.component';
import { DinnerRecipesMediumComponent } from './pages/dinner/dinner-recipes-medium/dinner-recipes-medium.component';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { NotFoundComponent } from './components/404/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'breakfast/all'
  },
  {
    path: 'breakfast',
    component: BreakfastRecipesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all'
      },
      {
        path: 'all',
        component: BreakfastRecipesAllComponent
      },
      {
        path: 'easy',
        component: BreakfastRecipesEasyComponent
      },
      {
        path: 'medium',
        component: BreakfastRecipesMediumComponent
      },
    ]
  },
  {
    path: 'lunch',
    component: LunchRecipesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all'
      },
      {
        path: 'all',
        component: LunchRecipesAllComponent
      },
      {
        path: 'easy',
        component: LunchRecipesEasyComponent
      },
      {
        path: 'medium',
        component: LunchRecipesMediumComponent
      },
    ]
  },
  {
    path: 'dinner',
    component: DinnerRecipesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all'
      },
      {
        path: 'all',
        component: DinnerRecipesAllComponent
      },
      {
        path: 'easy',
        component: DinnerRecipesEasyComponent
      },
      {
        path: 'medium',
        component: DinnerRecipesMediumComponent
      },
    ]
  },
  {
    path: 'recipe/:id',
    component: RecipePageComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
