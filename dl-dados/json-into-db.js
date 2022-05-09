const fs = require('fs')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('../db/db-deputados.db')

const despesasJSON = fs.readFileSync('./despesas_gabinetes.json')
// const despesasJSON = fs.readFileSync('./despesas_gabinetes.json')

let count = 0
// console.log(typeof despesasJSON)

// console.log(despesasJSON.length)

const despesasArray = JSON.parse(despesasJSON)

const createTable = 'CREATE TABLE IF NOT EXISTS "deputados" ("Id"	INTEGER NOT NULL,"Ano"	INTEGER NOT NULL,	"Matricula"	TEXT NOT NULL,"Mes"	TEXT NOT NULL,	"Valor"	REAL NOT NULL,	"CNPJ"	TEXT NOT NULL,	"Deputado"	TEXT NOT NULL,	"Tipo"	TEXT NOT NULL,	"Fornecedor"	TEXT NOT NULL,	PRIMARY KEY("Id" AUTOINCREMENT));'
const dropTable = 'DROP TABLE IF EXISTS deputados'

// db.run(dropTable, (err) => {
//   if (err) {
//     console.log('Erro, tabela não deletada.')
//   } else {
//     console.log('Tabela deletada.')
//   }
// })

// db.run(createTable, (err) => {
//   if (err) {
//     console.log('Erro, verificar criação de tabelas.')
//   } else {
//     console.log('Tabela criada.')
//   }
// });


// despesasFlat.forEach(item => {
//   values.push(item.Ano, item.Matricula, item.Mes, item.Valor, item.CNPJ, item.Deputado, item.Tipo, item.Fornecedor)

//   console.log(values)
// });

// Funcionando
despesasArray.despesas.despesa.forEach(item => {            
  db.run(`INSERT INTO deputados VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?)`, 
  [item.Ano, item.Matricula, item.Mes, item.Valor, item.CNPJ, item.Deputado, item.Tipo, item.Fornecedor], (err) => {
      count++
      if (err) {
          console.log(`Erro: ${ err }`)
          // res.end(JSON.stringify({ success: false }))
      } else {
          console.log('Ok')
          console.log(count)
          // res.end(JSON.stringify({ success: true }))
      }
  })
})

// console.log(despesasArray.despesas.despesa.length)

// despesasArray.despesas.despesa.forEach(item => {
//     let values = []
//     values = item.push()
    
//     if (values.length === 1000) {
//         db.run(`INSERT INTO deputados VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?)`, 
//         [item.Ano, item.Matricula, item.Mes, item.Valor, item.CNPJ, item.Deputado, item.Tipo, item.Fornecedor], (err) => {
//             count++
//             if (err) {
//                 console.log(`Erro: ${ err }`)
//                 // res.end(JSON.stringify({ success: false }))
//             } else {
//                 console.log('Ok')
//                 console.log(count)
//                 // res.end(JSON.stringify({ success: true }))
//             }
//         })
//     }
//   })

// arrayCompleto = despesasArray.despesas.despesa

// arrayLength = arrayCompleto.length

// for (let i = 1; i < arrayLength; i+= 1000) {

//    for (let j = 1; i < 1000; j++) {

//    }
// }

// let values = {
//    Ano: '',
//    Matricula: '',
//    Mes: '',
//    Valor: 0,
//    CNPJ: '',
//    Deputado: '',
//    Tipo: '',
//    Fornecedor: ''
// }

// let fullValues = []

// arrayCompleto.forEach(item => {   
//    values.Ano = item.Ano
//    values.Matricula = item.Matricula
//    values.Mes = item.Mes
//    values.Valor = item.Valor
//    values.CNPJ = item.CNPJ
//    values.Deputado = item.Deputado
//    values.Tipo = item.Tipo
//    values.Fornecedor = item.Fornecedor

//    fullValues.push(values)
// });

// console.log(fullValues)
// const sql = 'INSERT INTO deputados VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?)'

// arrayCompleto.forEach(item => {   
//    values.Ano = item.Ano
//    values.Matricula = item.Matricula
//    values.Mes = item.Mes
//    values.Valor = item.Valor
//    values.CNPJ = item.CNPJ
//    values.Deputado = item.Deputado
//    values.Tipo = item.Tipo
//    values.Fornecedor = item.Fornecedor

//    fullValues.push(values)
// });

// console.log(fullValues[0].Ano)

// let valuesSQL = []

// for (let i = 0; i < 10000; i++) {
//    valuesSQL.push(fullValues[i].Ano, fullValues[i].Matricula, fullValues[i].Mes, fullValues[i].Valor, fullValues[i].CNPJ, fullValues[i].Deputado, fullValues[i].Tipo, fullValues[i].Fornecedor)
// }

// let newValue = valuesSQL.join(', ')

// db.run(sql, [newValue], (err) => {
//    if (err) {
//        console.log(`Erro: ${ err }`)
//    } else {
//        console.log('Ok')
//    }
// })


// db.run(sql, [fullValues[0].Ano, fullValues[0].Matricula, fullValues[0].Mes, fullValues[0].Valor, fullValues[0].CNPJ, fullValues[0].Deputado, fullValues[0].Tipo, fullValues[0].Fornecedor], (err) => {
//       if (err) {
//           console.log(`Erro: ${ err }`)
//       } else {
//           console.log('Ok')
//       }
// })

// console.log(fullValues[0].Ano)

// for (let i = 1; i < arrayLength; i+= 1000) {
//    db.run(sql, [fullValues[i].Ano, fullValues[i].Matricula, fullValues[i].Mes, fullValues[i].Valor, fullValues[i].CNPJ, fullValues[i].Deputado, fullValues[i].Tipo, fullValues[i].Fornecedor], (err) => {
//       if (err) {
//           console.log(`Erro: ${ err }`)
//       } else {
//           console.log('Ok')
//       }
// })
// }