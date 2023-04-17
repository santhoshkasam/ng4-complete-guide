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
    const id = this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params: Params) => { 
        this.id = +params['id']; 
        this.recipe = this.recipeService.getRecipe(id);
      }
    )
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
