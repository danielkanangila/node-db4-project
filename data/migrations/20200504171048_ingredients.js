exports.up = function (knex) {
  return knex.schema.createTable("ingredients", function (t) {
    t.increments();
    t.string("name").notNullable();
    t.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ingredients");
};
