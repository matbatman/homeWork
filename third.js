const fs = require('fs')
const readline = require('readline')
const ACCESS_LOG = './access.log'
const fName1 = '89.123.1.41'
const fName2 = '34.48.240.111'

const readStream = fs.createReadStream(ACCESS_LOG)
const wStream1 = fs.createWriteStream(`${fName1}_requests.log`);
const wStream2 = fs.createWriteStream(`${fName2}_requests.log`);

const rl = readline.createInterface({
    input: readStream,
    terminal: true
})

rl.on('line', (line) => {
    if (line.includes(fName1)) {
        wStream1.write(`${line}\n`)
    } else if (line.includes(fName1)) {
        wStream2.write(`${line}\n`)
    }
})