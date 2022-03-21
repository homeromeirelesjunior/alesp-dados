const express = require('express')
const app = express()
const axios = require('axios').default
const parseString = require('xml2js').parseString
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/db-deputados.db')

const port = process.env.PORT || 9000

const cont = 1

app.use(express.json())

axios.get("https://www.al.sp.gov.br/repositorioDados/deputados/despesas_gabinetes.xml")
    .then(response => {
    
        const despesasXML  = response.data
        console.log(`oi`)
        parseString(despesasXML, (err, result) => {
            
            result.despesas.despesa.forEach(item => {
                
                db.run(`INSERT INTO deputados VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?)`, 
                [item.deputado, item.matricula, item.ano, item.mes, item.tipo, item.cnpj, item.fornecedor, item.valor], (err) => {
                    cont++
                    if (err) {
                        console.log('Erro')
                        // res.end(JSON.stringify({ success: false }))
                    } else {
                        console.log('Ok ')
                        // res.end(JSON.stringify({ success: true }))
                    }
                })
            })
            console.log('fim')
        })
    })
    .catch(error => console.log(error)
)

app.listen(port, () => {
    console.log(`Servidor na porta ${port}`)
})