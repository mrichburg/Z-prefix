const express = require('express');

const env = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[env]
const knex = require('knex')(config)

const router = express.Router();



//Shows me all posts
router.get('/', (req, res) => {
  knex('posts')
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

//creates a post
router.post('/', (req, res) => {
  console.log(req.body)
  knex('posts')
  .insert(req.body, ['*'])
  .then(data => res.status(201).json(data))
});

//updates a post (if the user_id matches the id of the user)
router.patch('/', (req, res) => {
  console.log(req.body)
  knex('posts')
    .where('id', req.body.id)
    .update(req.body, ['*'])
    .then(data => res.status(200).json(data));
});

//shows all posts from a specific user
router.get('/:user_id', (req, res) => {
  knex('posts')
    .where('user_id', req.params.user_id)
    .then(data => res.json(data))
})

//deletes a post (if the user_id matches the id of the user)
router.delete('/', (req, res) => {
  console.log(req.body)
  knex('posts')
    .where('id', req.body.id)
    .del()
    .then(data => res.status(204).json(data))
});






module.exports = router;