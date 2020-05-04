exports.seed = function (knex) {
  return knex("recipe_ingredients").insert([
    { recipeId: 7, ingredientId: 1, ingredientQty: 2 },
    { recipeId: 7, ingredientId: 2, ingredientQty: 2 },
    { recipeId: 7, ingredientId: 3, ingredientQty: 1 },
    { recipeId: 7, ingredientId: 4, ingredientQty: 1.3 },
    { recipeId: 7, ingredientId: 5, ingredientQty: 3.4 },
    { recipeId: 7, ingredientId: 6, ingredientQty: 3.4 },
  ]);
};
