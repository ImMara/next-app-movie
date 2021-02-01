const { createServer } = require('http')
const { parse } = require('url')
const bodyParser = require('body-parser')
const next = require('next')
const express = require('express')

const dev = process.env.NODE_ENV !=='production'
const app = next({dev})
const handle = app.getRequestHandler()

const moviesData = require('./data.json')

app.prepare().then(( )=> {
    const server = express();
    server.use(bodyParser.json())

    server.get('/api/v1/movies',(req,res)=>{
        return res.json(moviesData)
    })

    server.get('/api/v1/movies/:id', (req, res) => {
        const { id } = req.params
        const movie = moviesData.findIndex(m => m.id === id)
        return res.json(movie)
    })

    server.post('/api/v1/movies', (req, res) => {
        const movie = req.body
        console.log(JSON.stringify(movie))
        return res.json({...movie,createdTime : 'today', author : 'testuser'})
    })

    server.delete('/api/v1/movies/:id', (req, res) => {
        const { id } = req.params
        return res.json({message:"delete post of id : "+id})
    })

    const PORT = process.env.PORT || 3000;

    server.use(handle).listen(PORT, (err) => {
        if (err) throw err
        console.log('Server listening on port' + PORT)
    })
})