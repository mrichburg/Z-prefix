const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const posts = require('./src/routes/posts.js')
const users = require('./src/routes/users.js')


const app = express()

const PORT = process.env.PORT || 3001;

const serverURL = `http://localhost:${PORT}`

// const knex = require("knex")(require("./knexfile.js")["development"])


app.use(express.json())
app.use(cors())
app.use(cookieParser())



app.get('/', (req, res) => {
  res.status(201).send('This is working')
})


//different routes
app.use('/api/users', users);
app.use('/api/posts', posts)


app.listen(PORT, () => {
  console.log(`Server is up and listening to ${serverURL}`)
})

