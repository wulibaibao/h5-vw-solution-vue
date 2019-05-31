const express = require('express')

const app = express()
const path = require('path')

const projPath = process.cwd()

app.listen('8888')

app.use( `/` , express.static( path.join(projPath, 'dist') ) )

app.get( `*` , ( req , res ) => res.sendFile(path.join(__dirname, 'build', 'index.html')) )