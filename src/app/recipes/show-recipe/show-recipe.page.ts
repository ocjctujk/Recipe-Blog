import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';
import { EditRecipePage } from '../edit-recipe/edit-recipe.page';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.page.html',
  styleUrls: ['./show-recipe.page.scss'],
})
export class ShowRecipePage implements OnInit {
  id: number;
  selectedRecipe: Recipe;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.selectedRecipe = this.recipeService.getRecipe(this.id);
  }

  onEditRecipe(id:number){
    this.modalCtrl.create({
      component: EditRecipePage,
      componentProps: { id: id}
    }).then(modal=>{
      modal.present();
    })
  }

  onDeleteRecipe() {
    this.alertCtrl.create({
      header: 'Are you sure you want to delete the recipe?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.recipeService.deleteRecipe(this.id);
            this.navCtrl.navigateBack('/recipes');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    }).then(alert=>{
      alert.present();
    })
  }
}
