import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from "./home.component";
import { GreetingComponent } from './greeting/greeting.component';
import { DropdownDirective } from './dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';

import { routing } from './app.routing';
import { ShoppingListModule } from "./shopping-list/shopping-list.module";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GreetingComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    ShoppingListModule,
    routing
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
