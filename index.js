const http = require('http')
const Cal = require('./calc')
const AsyncFunctions = require('./AsyncFunctions')

const server = http.createServer((req, res) => {
    // let num1 = 10
    // let num2 = 4
    // let CalcObj = new Cal(num1,num2)
    // let sum = CalcObj.add()
    // res.end(`The addition of ${num1} and ${num2} is ${sum}`)


    let asObj = new AsyncFunctions('Anya', 25, 'Tester');
    asObj.pushPersonData();
    res.end(asObj)
})

server .listen(4000, () => {
    console.log('server is running i n 4000')
})