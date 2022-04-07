const converter = require('json-2-csv')
const fs = require('fs')

const despesasXML = JSON.parse(fs.readFileSync('./despesas_gabinetes.json'))

converter.json2csv(despesasXML, (err, csv) => {
    if(err) {
        throw err
    }

    console.log(csv)

    fs.writeFileSync('despesas_gabinetes.csv', csv)
})