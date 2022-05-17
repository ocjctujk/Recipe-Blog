import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {
  AlertController,
  ModalController,
  NavController,
} from '@ionic/angular';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required, Validators.min(1)]),
    rating: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
  });
  constructor(
    private modalCtrl: ModalController,
    private recipeService: RecipeService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.form.value);
    const name = this.form.value.name;
    const description = this.form.value.description;
    const rating = this.form.value.rating;
    const duration = this.form.value.duration;
    const imageUrl = this.form.value.imageUrl;

    const recipe: Recipe = {
      id: Math.random(),
      name: name,
      description: description,
      rating: rating,
      duration: duration,
      imageUrl: imageUrl,
    };
    this.recipeService.addRecipe(recipe);
    this.onClose();
  }
  onClose() {
    this.modalCtrl.dismiss().then(
      () => {},
      () => {
        this.navCtrl.navigateBack('/home');
      }
    );
  }
}
