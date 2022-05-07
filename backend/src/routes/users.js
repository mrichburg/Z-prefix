const express = require('express')

const env = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[env]
const knex = require('knex')(config)

const router = express.Router();


// router.all('/', (req, res) => {
//   res.sendStatus(405);
// });


router.get('/', (req, res) => {
  knex('users')
    .select('*')
    .then(data => res.json(data))
    .catch(err => 
      res.status(404).json({
        message:
        'The data you are looking for could not be found. Please try again later.'
      })
  );
    //create the page for all users data

})

router.post('/', (req, res) => {
  knex('users')
  .insert(req.body, ['*'])
  .then(data => res.status(201).json(data))
});

router.delete('/', (req, res) => {
  console.log(req.body)
  knex('users')
    .where('id', req.body.id)
    .del()
    .then(data => res.status(204).json(data))
});

    
router.patch('/', (req, res) => {
  console.log(req.body)
  knex('users')
    .where('id', req.body.id)
    .update(req.body, ['*'])
    .then(data => res.status(200).json(data));
});
    

router.get('/token/:token', (req, res) => {
  console.log(req.body)
  knex('users')
    .where('token', req.params.token)
    .then(data => res.json(data))
})


router.get('/:id', (req, res) => {
  console.log(req.body)
  knex('users')
    .where('id', req.params.id)
    .then(data => {
      console.log(req.params.id)
      console.log(req.params)
      res.json(data)
    })
})



router.delete('/:id', (req, res) => {
  console.log(req.body)
  knex('users')
    .where('id', req.body.id)
    .del()
    .then(data => res.status(204).json(data))
});

router.patch('/:id', (req, res) => {
  console.log(req.body)
  knex('users')
    .where('id', req.params.id)
    .update(req.body, ['*'])
    .then(data => res.status(200).json(data));
});


//may need this example later
// router.put('/cards/:id', (req, res) => {
//   knex('cards')
//     .where('id', req.params.id)
//     .del()
//     .then(() => {
//       knex('cards')
//         .where('id', req.params.id)
//         .insert({ ...req.body, id: req.params.id }, ['*'])
//         .then(data => res.status(200).json(data));
//     });
// });

// router.patch('/cards/:id', (req, res) => {
//   console.log(req.body);
//   knex('cards')
//     .where('id', req.params.id)
//     .update(req.body, ['*'])
//     .then(data => res.status(200).json(data));
// });

// router.delete('/cards/:id', (req, res) => {
//   knex('cards')
//     .where('id', req.params.id)
//     .del()
//     .then(data => res.status(204).json(data));
// });

//SELECT * FROM posts WHERE user_id IN (SELECT id FROM users WHERE first_name = 'Derek');

module.exports = router