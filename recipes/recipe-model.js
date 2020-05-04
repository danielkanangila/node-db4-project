const db = require("./../data/db-config");

class Recipe {
  getRecipes() {
    return db("recipes");
  }

  getShoppingList(recipeId) {
    return db("recipe_ingredients as ri")
      .join("ingredients as i", "i.id", "ri.ingredientId")
      .select("i.name", "ri.ingredientQty as quantity")
      .where("ri.recipeId", recipeId);
  }

  getInstructions(recipeId) {
    return db("cooking_steps").where("recipeId", recipeId);
  }
}

module.exports = new Recipe();
