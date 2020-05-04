exports.seed = function (knex) {
  return knex("ingredients").insert([
    { name: "medium Granny Smith apples" },
    { name: "refrigerated crescent rolls" },
    { name: "sugar" },
    { name: "butter, softened" },
    { name: "ground cinnamon" },
    { name: "Vanilla ice cream" },
  ]);
};
