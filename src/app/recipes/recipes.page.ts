import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Recipe } from '../shared/recipe.model';
import { RecipeService } from '../shared/recipe.service';
import { AddRecipePage } from './add-recipe/add-recipe.page';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  private subscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit(): void {
    this.subscription = this.recipeService.recipeSubject.subscribe((recipe) => {
      this.recipes = [...recipe];
    });
  }

  onOpenRecipe(id: number) {
    this.navCtrl.navigateForward('/recipes/' + id);
  }

  onAddRecipe() {
    this.modalCtrl.create({
      component: AddRecipePage
    }).then(modal=>{
      modal.present();
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
