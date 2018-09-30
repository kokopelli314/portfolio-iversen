require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const router = express.Router()

///////////////////
// Configuration
const PORT = process.env.PORT
const STATIC_DIR = path.join(__dirname, 'public')
// While developing, set ROOT_PATH to the URL prefix that'll be used in production.
// This helps make sure absolute/relative paths come out right.
const ROOT_PATH = process.env.ROOT_PATH || '/'

// Serve static files and image media
app.use(ROOT_PATH, express.static(STATIC_DIR))
app.use(ROOT_PATH, express.static(process.env.MEDIA_DIR))
// Template engine === Pug
app.set('view engine', 'pug')

///////////////////
// Views
router.get('/', (req, res) => {
	res.render(path.join(`${STATIC_DIR}`, 'index'))
})

router.get('/work/ui', (req, res) => {
	res.render(path.join(`${STATIC_DIR}`, 'work-ui'))
})

router.get('/work/ux', (req, res) => {
	res.render(path.join(`${STATIC_DIR}`, 'work-ux'))
})

app.use(ROOT_PATH, router)

///////////////////
// Start it up
app.listen(PORT, () => {
	console.log(`Express is listening on port ${PORT}!`)
})
