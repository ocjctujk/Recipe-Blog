import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private _recipes: Recipe[] = [
    {
      id: 1,
      name: 'Egg Half Fry',
      description:
        'A healthy breakfast that includes some of your favourite dishes is sure to put a wide grin on your face. Eating protein has become essential as the pandemic rages on. You may not always like to dig into a traditional English breakfast that contains a lot of greasy items. But you can always eat eggs right in the morning to give your body a healthy start. How about a delicious egg half fry, something not too oily, yet delights your taste buds? Besides, it is quite easy to make with no heavy cooking skills involved: it will be on your plate within 5 minutes. Go ahead and make the simplest breakfast that you can enjoy every day of your life. ',
      duration: 60,
      imageUrl:
        'https://images.unsplash.com/photo-1574179048386-51307266fe7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZWdnJTIwY3Vycnl8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      ingredients: [
        {
          id: 1,
          name: 'Tomato',
          quantity: 3,
        },
        {
          id: 2,
          name: 'Onion',
          quantity: 2,
        },
        {
          id: 3,
          name: 'Eggs',
          quantity: 4,
        },
      ],
      rating: 4,
    },
    {
      id: 2,
      name: 'Chicken Salad',
      description:
        'A healthy breakfast that includes some of your favourite dishes is sure to put a wide grin on your face. Eating protein has become essential as the pandemic rages on. You may not always like to dig into a traditional English breakfast that contains a lot of greasy items. But you can always eat eggs right in the morning to give your body a healthy start. How about a delicious egg half fry, something not too oily, yet delights your taste buds? Besides, it is quite easy to make with no heavy cooking skills involved: it will be on your plate within 5 minutes. Go ahead and make the simplest breakfast that you can enjoy every day of your life. ',
      duration: 60,
      imageUrl:
        'https://images.unsplash.com/photo-1580013759032-c96505e24c1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGJpcnlhbml8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      ingredients: [
        {
          id: 1,
          name: 'Tomato',
          quantity: 3,
        },
        {
          id: 2,
          name: 'Onion',
          quantity: 2,
        },
        {
          id: 3,
          name: 'Eggs',
          quantity: 4,
        },
      ],
      rating: 4,
    },
    {
      id: 3,
      name: 'Chicken Wings',
      description:
        'Is there anything that screams game day more than chicken wings? Whether you’re heading out or staying home to watch the Superbowl, wings can really kick off the party. Sure, you could just order your standard order from your favorite wing spot. And honestly, we get it— wings are tradition, and sometimes you just gotta have your faves. But! We bet you’ve got the time and energy to step outside your comfort zone to make your own this year. Use these recipes as inspiration, and who knows, you might find a new favorite you’ll make for years to come.',
      duration: 100,
      imageUrl:
        'https://images.unsplash.com/photo-1566918214014-a3b3e0132267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHRhbmRvb3JpJTIwY2hpY2tlbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
      ingredients: [
        {
          id: 1,
          name: 'Chicken',
          quantity: 3,
        },
      ],
      rating: 3,
    },
    {
      id: 4,
      name: 'Strawberry candy',
      description: 'Like candied apples these candied strawberries have a thick hard candy shell with the fresh juicy berry inside.  The candy coating, like a sucker, will leave a lovely shiny shell around the berry.',
      duration: 30,
      imageUrl:
        'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      rating: 4,
    },
    {
      id: 5,
      name: 'Pizza',
      description: 'Sift flour, sugar, 1 tablespoon oregano, and 1 teaspoon salt into a large bowl. Mix egg and oil into dry ingredients; stir in yeast mixture. When dough has pulled together, turn out onto a lightly floured surface and knead until smooth and elastic, about 8 minutes. Lightly oil a large bowl, then place dough in bowl and turn to coat with oil. Cover with a light cloth and let rise in a warm place (80 to 95 degrees F (27 to 35 degrees C)) until doubled in volume, about 1 hour.',
      duration: 45,
      imageUrl:
        'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      rating: 4,
    },
    {
      id: 6,
      name: 'Waffels',
      description: 'Outside of Belgium, Belgian waffles are a variety of waffle with a lighter batter, larger squares, and deeper pockets than American waffles. Belgian waffles were originally leavened with yeast, but baking powder is now often used',
      duration: 55,
      imageUrl:
        'https://images.unsplash.com/photo-1459789034005-ba29c5783491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZvb2R8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      rating: 4,
    },
    {
      id: 7,
      name: 'Chicken Burger',
      description: 'The trick to cooking a good chicken burger is watching the cook time: they can go from juicy to bone dry quickly once overcooked. They should take about 4 to 5 minutes per side, but there are a lot of factors that lead to different cook times: whether you are cooking on a gas stove or grill, what kind of pan youa are using and how well it conducts heat, and how cold your patty was when it hit the pan.',
      duration: 30,
      imageUrl:
        'https://images.unsplash.com/photo-1572448862527-d3c904757de6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZvb2R8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      rating: 5,
    },
    {
      id: 8,
      name: 'Lentils with Rice',
      description: 'Are you familiar with mujadara? It’s a beautiful dish layered with lentils and rice at the bottom, followed by caramelized onions (the more, the better), and hopefully a couple of creamy or spicy sauces on the side. It’s one of my favorite items to order at Middle Eastern restaurants, and this recipe tastes just like it.Mujadara is served across the Middle East in various forms and goes by differing names, depending on where you are. It has many spelling variations: mujadarra, mujadarah, majadra, mejadra, moujadara, mudardara, and megadarra.',
      duration: 30,
      imageUrl: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGZvb2R8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      rating: 4
    },
    {
      id: 9,
      name: 'Vegatable Soup',
      description: 'This soup recipe was a long time coming! Over the years, I made some lackluster lentil soups that never saw the light of day on this website. No vegetarian food blog would be complete without a proper lentil soup, though, so I perfected one of my own.Here it is. My lentil soup is made with mostly pantry ingredients but includes hearty greens and a squeeze of lemon for bright, fresh flavor. It’s seasoned with a few of my favorite spices and plenty of freshly ground black pepper. Honestly, it’s the best lentil soup I’ve ever had.',
      duration: 15,
      imageUrl: 'https://images.unsplash.com/photo-1627054886476-0cdee47fde3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk3fHxmb29kfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      rating: 5
    }
  ];
  recipeSubject = new BehaviorSubject<Recipe[]>(this._recipes);

  getRecipe(id: number): Recipe {
    const recipe = [
      ...this._recipes.filter((recipe) => {
        return recipe.id === id;
      }),
    ][0];
    return recipe;
  }

  addRecipe(newRecipe: Recipe){
    this._recipes.push(newRecipe);
    this.recipeSubject.next(this._recipes);
  }
  deleteRecipe(id: number){
      this._recipes = this._recipes.filter(recipe=>{
          return recipe.id!=id;
      })
      this.recipeSubject.next(this._recipes);
  }
  updateRecipe(id: number,newRecipe:Recipe){
    let oldRecipe = this._recipes.filter(recipe=>{
        return recipe.id===id;
    })[0];
    oldRecipe.name = newRecipe.name;
    oldRecipe.description = newRecipe.description;
    oldRecipe.duration = newRecipe.duration;
    oldRecipe.imageUrl = newRecipe.imageUrl;
    oldRecipe.ingredients = newRecipe.ingredients;
    oldRecipe.rating = newRecipe.rating;
    console.log(this._recipes);
  }

}
