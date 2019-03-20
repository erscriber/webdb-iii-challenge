
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Warren D', cohort_id: 1 },
        {name: 'Matt K', cohort_id: 2 },
        {name: 'Sage W', cohort_id: 1 }
      ]);
    });
};
