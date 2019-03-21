const express = require('express');
const helmet = require('helmet');

const db = require('../data/db.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
	res
		.send(`<h2>Lambda WebDB III Challenge</h2>`);
	
});

// GET
server.get('/api/cohorts', async (req, res) => {
  // get the roles from the database
  try {
    const cohorts = await db('cohorts'); 
    res
    	.status(200)
    	.json(cohorts);
  } 
  catch (err) {
    res
    	.status(500)
    	.json(err);
  }
});

// GET BY ID
server.get('/api/cohorts/:id', async (req, res) => {
  // get specific cohort from the database
  try {
    const cohort = await db('cohorts')
      .where({ id: req.params.id })
      .first();
    res
    	.status(200)
    	.json(cohort);
  } 
  catch (err) {
    res
    	.status(500)
    	.json(err);
  }
});

// GET BY STUDENT
server.get('/api/cohorts/:id/students', (req, res) => {
	const studentCohort = req.params.id;
	db
		.from('students')
		.where({ cohort_id: `${studentCohort} `})
		.then(students => {
			res
				.status(200)
				.json(students);
		})
		.catch(err => {
			res
				.status(500)
				.json(err);
		});
});

// POST
server.post('/api/cohorts', async (req, res) => {
  try {
    const [id] = await db('cohorts').insert(req.body);
    const newCohort = await db('cohorts')
      .where({ id })
      .first();
	res
		.status(201)
		.json(newCohort);
	}
	catch(err) {
		res
			.status(500)
			.json(err);
	};
});

// PUT
server.put('/api/cohorts/:id', async (req, res) => {
  try {
    const count = await db('cohorts')
      .where({ id: req.params.id })
      .update(req.body);

    if (count > 0) {
      const updatedCohort = await db('cohorts')
        .where({ id: req.params.id })
        .first();

      res
      	.status(200)
      	.json(updatedCohort);
    } 
    else {
      res
      	.status(404)
      	.json({ message: 'Records not found' });
    }
  } 
  catch (error) {

  }
});

// DELETE
server.delete('/api/cohorts/:id', async (req, res) => {
  try {
    const count = await db('cohorts')
      .where({ id: req.params.id })
      .del();

    if (count > 0) {
      res
      	.status(204)
      	.end();
    } 
    else {
      res
      	.status(404)
      	.json({ message: 'Records not found' });
    }
  } 
  catch (error) {
  	
  }
});

module.exports = server;