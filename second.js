const data = process.argv[2]
const today = new Date();
const Emitter = require('events')
let emitter = new Emitter()
let eventName = 'timer'
let dataArr = []

let simpleDataCheck = (data) => {
    if (Number(data[0]) > 23) {
        throw new Error('hours more than 23')
    }
    if (Number(data[1]) > 31) {
        throw new Error('days more than 31')
    }
    if (Number(data[2]) > 12) {
        throw new Error('months more than 12')
    }

    if (Number(data[3]) < today.getFullYear()) {
        throw new Error('wrong year')
    }

}

let dataParse = (simpleDataCheck, data) => {
    let dataArr = []

    if (data.match(/[-]/g).length != 3 || data.match(/[.]/g)) {
        throw new Error('Wrong data format - should be hour-day-month-year')
    }

    dataArr = data.split('-')
    simpleDataCheck(dataArr)

    return dataArr

}

dataArr = dataParse(simpleDataCheck, data)

emitter.on(eventName, function (data) {
    let timerHours = setInterval(() => console.log(today.getHours()), 1000);
    if (Number(data[0]) === Number(today.getHours())) {
        clearInterval(timerHours);
        console.log('timer hours is done');
    }

    let timerDays = setInterval(() => console.log(today.getDate()), 1000);
    if (Number(data[1]) === Number(today.getDate())) {
        clearInterval(timerDays);
        console.log('timer days is done');
    }

    let timerMonths = setInterval(() => console.log(today.getMonth()), 1000);
    if (Number(data[2]) === Number(today.getMonth())) {
        clearInterval(timerMonths);
        console.log('timer months is done');
    }

    let timerYear = setInterval(() => console.log(today.getFullYear()), 1000);
    if (Number(data[3]) === Number(today.getFullYear())) {
        clearInterval(timerYear);
        console.log('timer year is done');
    }
})

emitter.emit(eventName, dataArr)

