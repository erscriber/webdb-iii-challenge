
exports.up = function(knex, Promise) {
  // define the cohort table
  return knex.schema.createTable('cohorts', chrts => {
  	chrts.increments();
  	chrts.string('name', 128)
  		.notNullable()
  		.unique();
  })
};

exports.down = function(knex, Promise) {
  // remove the cohort table
  return knex.schema.dropTableIfExists('cohorts');
};
