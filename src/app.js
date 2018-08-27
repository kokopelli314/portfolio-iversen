require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT
const STATIC_DIR = path.join(__dirname, 'public')

// Serve static files and image media
app.use(express.static(STATIC_DIR))
app.use(express.static(process.env.MEDIA_DIR))

// Pug
app.set('view engine', 'pug')

app.get('/', (req, res) => {
	res.render(path.join(`${STATIC_DIR}`, 'index'))
})

// Start it up
app.listen(PORT, () => {
	console.log(`Express is listening on port ${PORT}!`)
})
