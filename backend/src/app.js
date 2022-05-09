import express from 'express'
import bodyParser from 'body-parser'
import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('../db/db-deputados.db')
const router = express.Router()
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('Tratamento de dados Alesp')
})

app.get('/deputados', (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    try {
        db.all(`SELECT * FROM deputados`, [], (err, rows) => {
           if (err) {
               console.log(err)
           }

           res.end(JSON.stringify(rows))
        }) 
    } catch (error) {
        console.log(error)
    }
})

app.get('/deputados/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    let id = req.params.id

    try {
        db.get(`SELECT * FROM deputados WHERE Id =  ?`, [id], (err, rows) => {
           if (err) {
               console.log(err)
           }

           res.end(JSON.stringify(rows))
        }) 
    } catch (error) {
        console.log(error)
    }    
})

// app.get('/busca', (req, res) => {
//     res.setHeader('Content-Type', 'application/json')
//     let deputado = req.query.deputado

//     // console.log(`SELECT * FROM deputados WHERE Deputado LIKE '%${deputado}%'`)

//     try {
//         db.all(`SELECT * FROM deputados WHERE Deputado LIKE '%${deputado}%'`, [], (err, rows) => {
//             if (err) {
//                 console.log(err)
//             }

//             res.end(JSON.stringify(rows))
//         })
//     } catch (error) {
//         console.log(error)
//     }
// })

app.get('/busca', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    let deputado = req.query.deputado
    let ano = req.query.ano

    // console.log(`SELECT * FROM deputados WHERE Deputado LIKE '%${deputado}%'`)

    console.log(`SELECT * FROM deputados WHERE Deputado LIKE '%${deputado}%' AND Ano = ${ano}`)

    try {
        db.all(`SELECT * FROM deputados WHERE Deputado LIKE '%${deputado}%' AND Ano = ${ano}`, [], (err, rows) => {
            if (err) {
                console.log(err)
            }

            res.end(JSON.stringify(rows))
        })
    } catch (error) {
        console.log(error)
    }
})

export default app