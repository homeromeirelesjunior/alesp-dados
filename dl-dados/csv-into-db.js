const sql3 = require('better-sqlite3');
const db = new sql3( 'deputados.db' );
const csv = require('csv-parser');
const fs = require('fs');

db.exec(`CREATE TABLE IF NOT EXISTS "deputados" (
	"Id"	INTEGER,
	"Ano"	INTEGER,
	"Matricula"	INTEGER,
	"Mes"	INTEGER,
	"Valor"	REAL,
	"CNPJ"	TEXT,
	"Deputado"	TEXT,
	"Tipo"	TEXT,
	"Fornecedor"	TEXT,
	PRIMARY KEY("Id" AUTOINCREMENT)`
)
// db.exec( 'DROP TABLE deputados;' );

// const insrow = db.prepare( 'insert into deputados ( Id, Ano, Matricula, Mes, Valor, CNPJ, Deputado, Tipo, Fornecedor ) VALUES (?, ?, ?, ?. ?, ?, ?, ?)' );

// fs.createReadStream('./despesas_gabinetes.csv')
//   .pipe(csv({"separator":","}))
//   .on('data', (row) => {
    
//     insrow.run( row.Ano, row.Matricula, row.Mes, row.Valor, row.CNPJ, row.Deputado, row.Tipo, row.Fornecedor );
//     console.log(row);
//   })
//   .on('end', () => {
//     console.log('CSV file successfully processed');
//     db.close();
//   });