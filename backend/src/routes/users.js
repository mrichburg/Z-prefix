const express = require('express')

const env = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[env]
const knex = require('knex')(config)

const router = express.Router();

router.get('/', (req, res) => {
  knex('users')
    

})




export default router