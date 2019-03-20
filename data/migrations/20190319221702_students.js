
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', stdnts => {
  	stdnts.increments();
  	stdnts.string('name', 128)
  		.notNullable();

  	stdnts.integer('cohort_id')
  		.unsigned()
  		.references('id')
  		.inTable('cohorts')
  		.onDelete('CASCADE')
  		.onUpdate('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stdnts');
};


