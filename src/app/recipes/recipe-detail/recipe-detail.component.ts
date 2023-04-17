import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  id: number;
  recipe: Recipe;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }
  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    //subscribing the change that happens when params chaneged and executing the body where we read
    // id and callgetrecipe method.
    this.route.params.subscribe(
      (params: Params) => { 
        this.id = +params['id']; 
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
