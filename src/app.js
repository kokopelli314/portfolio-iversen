const express = require('express')
const path = require('path')
const app = express()

const PORT = 3000
const STATIC_DIR = path.join(__dirname, 'public')

app.use(express.static(STATIC_DIR))

// Start it up
app.listen(PORT, () => {
	console.log(`Express is listening on port ${PORT}!`)
})
