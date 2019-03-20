
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'FSWEB 1'},
        {name: 'FSWEB 2'},
        {name: 'FSWEB 3'}
      ]);
    });
};
