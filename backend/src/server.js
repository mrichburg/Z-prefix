import express from 'express'
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const knexImport = require('knex')
const knexfile = require('../knexfile.js')
const posts = require('./routes/posts.js')
const users = require('./routes/users.js')


const app = express()
const PORT = 3001

const serverURL = `http://localhost:${PORT}`

// const knex = require("knex")(require("./knexfile.js")["development"])
const knex = knexImport(knexfile['development'])

const router = express.Router();


app.use(express.json())
app.use(cors())
app.use(cookieParser())



app.get('/', (req, res) => {
  res.status(201).json('This is working')
})


//different routes
app.use('api/users', users);
app.use('api/posts', posts)


app.listen(PORT, () => {
  console.log(`Server is up and listening to ${serverURL}`)
})

