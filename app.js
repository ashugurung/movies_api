const express = require('express')
const movies = require("./movies.json")
const app = express()


app.get("/", (req, res) => {
    res.send("Welcome to the movies API")
})

app.get("/movie", (req, res) => {
    res.send("HELLOW")
})

//Single movies - READ
app.get("/movie/:id", (req, res) => {
    const id = req.params.id.toLowerCase()
    console.log(id)
    const movie = movies.find(movie => movie.id === id)
    console.log(movie);

    if(movie === undefined){
        res.status(404).send({error: `movie id: ${id} not found`})
    }
    res.send(movie)
})

//Adding new movies - Create
app.post('/movies', (req, res) => {
    let ids = movies.map(movie => movie.id)
    let  maxId = Math.max(...ids)

    const movie = movies.find(movie => movies.name === req.body.name)

    if(song !== undefined){
        res.status(409).send({error: "movie already exists"})
    } else {
        maxId += 1
        const newMovie = req.body
        newMovie.id = maxId
        
        movies.push(newMovie)

        res.status(201).send(newMovie)
    }
})

//PATCH && DELETE 

module.exports = app;