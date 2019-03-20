
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'Full Stack Web1'},
        {name: 'Full Stack Web2'},
        {name: 'Full Stack Web3'}
      ]);
    });
};
