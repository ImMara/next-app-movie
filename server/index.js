const { createServer } = require('http')
const { parse } = require('url')
const bodyParser = require('body-parser')
const next = require('next')
const express = require('express')

const dev = process.env.NODE_ENV !=='production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(( )=> {
    const server = express();
    server.use(bodyParser.json())

    server.get('/api/v1/movies',(req,res)=>{
        return res.json({message:"hello world"})
    })

    // server.get('/faq',(req, res) =>{
    //     res.send('<html><head></head><body><h1>hello world</h1></body></html>')
    // })

    server.get('*', (req, res) => {
        return handle(req, res)
    })
    server.post('/api/v1/movies', (req, res) => {
        const movie = req.body
        console.log(JSON.stringify(movie))
        return res.json({...movie,createdTime : 'today', author : 'testuser'})
    })
    server.patch('/api/v1/movies/:id', (req, res) => {
        const { id } = req.params
        return res.json({message:"updating post of id : "+id})
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