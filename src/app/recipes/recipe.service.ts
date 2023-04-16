import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-853x1024.jpg'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-853x1024.jpg')
    ];

    getRecipes(){
        return this.recipes.slice();//This will create a new array with exact copy like Recipe
    }
}