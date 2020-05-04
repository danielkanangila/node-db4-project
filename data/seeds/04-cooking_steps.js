exports.seed = function (knex) {
  return knex("cooking_steps").insert([
    {
      recipeId: 7,
      step_number: 1,
      instructions:
        "Preheat oven to 350°. Peel, core and cut each apple into 8 wedges. Unroll both tubes of crescent dough; separate each into 8 triangles. Wrap a triangle around each wedge. Place in a greased 13x9-in. baking dish.",
    },
    {
      recipeId: 7,
      step_number: 2,
      instructions:
        "In a bowl, mix sugar, butter and cinnamon until blended; sprinkle over dumplings. Slowly pour soda around the rolls (do not stir).",
    },
    {
      recipeId: 7,
      step_number: 3,
      instructions:
        "Bake, uncovered, until golden brown and apples are tender, 35-40 minutes. Serve warm with ice cream.",
    },
  ]);
};
