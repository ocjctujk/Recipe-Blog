import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddRecipePage } from './recipes/add-recipe/add-recipe.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private modalCtrl:ModalController) {}

  onAddRecipe(){
    this.modalCtrl.create({
      component: AddRecipePage
    }).then(modal=>{
      modal.present();
    })
  }

  
}
