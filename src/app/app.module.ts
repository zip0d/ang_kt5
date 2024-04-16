import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { MoreRecipesComponent } from './components/more-recipes/more-recipes.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BreakfastRecipesComponent } from './pages/breakfast-recipes/breakfast-recipes.component';
import { DinnerRecipesComponent } from './pages/dinner-recipes/dinner-recipes.component';
import { LunchRecipesComponent } from './pages/lunch-recipes/lunch-recipes.component';
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

@NgModule({
  declarations: [
    AppComponent,
    RecipeItemComponent,
    MoreRecipesComponent,
    BreakfastRecipesComponent,
    DinnerRecipesComponent,
    LunchRecipesComponent,
    BreakfastRecipesEasyComponent,
    BreakfastRecipesMediumComponent,
    BreakfastRecipesAllComponent,
    LunchRecipesAllComponent,
    LunchRecipesEasyComponent,
    LunchRecipesMediumComponent,
    DinnerRecipesAllComponent,
    DinnerRecipesEasyComponent,
    DinnerRecipesMediumComponent,
    RecipePageComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    RouterLinkActive
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
