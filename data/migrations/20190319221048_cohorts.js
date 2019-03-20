
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', chrts => {
  	chrts.increments();
  	chrts.string('name', 128)
  		.notNullable()
  		.unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExisits('chrts');
};
