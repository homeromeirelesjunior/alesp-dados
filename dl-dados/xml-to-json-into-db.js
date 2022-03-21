const fs = require('fs')
const xml2js = require('xml2js')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/db-deputados.db')

// const despesasXML = './dados-xml/despesas_gabinetes.xml'
const despesasXML = fs.readFileSync('./dados-xml/despesas_gabinetes.xml')

xml2js.parseString(despesasXML, { mergeAttrs: true }, (err, result) => {
    if(err) {
        throw err
    }

    const json = JSON.stringify(result, null, 4)

    fs.writeFileSync('despesas_gabinetes.json', json)
})

// parseString(despesasXML, (err, results) => {
//     let data = JSON.stringify(results)

//     console.log(data)
// })

// rotina para inserir dados no db
// data.despesas.despesa.forEach(item => {
      
//     db.run(`INSERT INTO deputados VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?)`, 
//     [item.deputado, item.matricula, item.ano, item.mes, item.tipo, item.cnpj, item.fornecedor, item.valor], (err) => {
//         cont++
//         if (err) {
//             console.log('Erro')
//             // res.end(JSON.stringify({ success: false }))
//         } else {
//             console.log(`Inserção número: ${cont}`)
//             // res.end(JSON.stringify({ success: true }))
//         }
//     })
// })