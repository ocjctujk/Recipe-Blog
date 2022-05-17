import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowRecipePageRoutingModule } from './show-recipe-routing.module';

import { ShowRecipePage } from './show-recipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowRecipePageRoutingModule
  ],
  declarations: [ShowRecipePage]
})
export class ShowRecipePageModule {}
