import express from 'express'
import bodyParser from 'body-parser'
import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('../dl-xml-db/db/db-deputados.db')
const router = express.Router()
const app = express()

app.use(express.json())

router.get('/deputados', (req, res) => {
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

export default app
