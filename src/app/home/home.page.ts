import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Recipe } from '../shared/recipe.model';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit,OnDestroy {

  recipes:Recipe[];
  private subscription: Subscription;

  constructor(private recipeService: RecipeService,private navCtrl: NavController) {}

  ngOnInit(): void {
    this.subscription = this.recipeService.recipeSubject.subscribe(recipe=>{
      this.recipes = [...recipe];
    })
    this.recipes.splice(8);
  }

  onOpenRecipe(id: number){
    this.navCtrl.navigateForward('/recipes/'+id);
  }








  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
