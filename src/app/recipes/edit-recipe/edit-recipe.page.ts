import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.page.html',
  styleUrls: ['./edit-recipe.page.scss'],
})
export class EditRecipePage implements OnInit {
  id:number;
  selectedRecipe:Recipe=null;
  form;
  constructor(private modalCtrl: ModalController,private recipeService: RecipeService) {}

  ngOnInit() {
    this.selectedRecipe = this.recipeService.getRecipe(this.id);
    console.log(this.selectedRecipe);
    this.form = new FormGroup({
      name: new FormControl(this.selectedRecipe.name, [Validators.required]),
      description: new FormControl(this.selectedRecipe.description, [Validators.required]),
      imageUrl: new FormControl(this.selectedRecipe.imageUrl,[Validators.required]),
      duration: new FormControl(this.selectedRecipe.duration, [
        Validators.required,
        Validators.min(1),
      ]),
      rating: new FormControl(this.selectedRecipe.rating, [
        Validators.required,
        Validators.min(1),
        Validators.max(5),
      ]),
    });
  }

  onSubmit() {
    console.log(this.form.value);
    const name = this.form.value.name;
    const description = this.form.value.description;
    const rating = this.form.value.rating;
    const duration = this.form.value.duration;
    const imageUrl = this.form.value.imageUrl;

    const recipe: Recipe = {
      id: this.id,
      name: name,
      description: description,
      rating: rating,
      duration: duration,
      imageUrl: imageUrl
    }
    this.recipeService.updateRecipe(this.id,recipe);
    this.modalCtrl.dismiss();
  }

  onClose(){
    this.modalCtrl.dismiss();
  }

}
