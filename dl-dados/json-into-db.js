const fs = require('fs')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/db-deputados.db')

const despesasJSON = fs.readFileSync('./despesas_gabinetes.json')

// rotina para inserir dados no db
despesasJSON.despesas.despesa.forEach(item => {
      
    db.run(`INSERT INTO deputados VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?)`, 
    [item.Deputado, item.Matricula, item.Ano, item.Mes, item.Tipo, item.CNPJ, item.Fornecedor, item.Valor], (err) => {
        cont++
        if (err) {
            console.log('Erro')
            // res.end(JSON.stringify({ success: false }))
        } else {
            console.log(`Inserção número: ${cont}`)
            // res.end(JSON.stringify({ success: true }))
        }
    })
    console.log('cabou')
})