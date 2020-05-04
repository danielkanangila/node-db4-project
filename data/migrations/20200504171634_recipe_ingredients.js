exports.up = function (knex) {
  return knex.schema.createTable("recipe_ingredients", function (t) {
    t.increments();
    t.integer("recipeId")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    t.integer("ingredientId")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    t.float("ingredientQty").notNullable();
    t.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("recipe_ingredients");
};
