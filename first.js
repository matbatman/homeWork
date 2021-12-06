const colors = require('colors')

let simpleNum = () => {
    const min = Number(process.argv[2])
    const max = Number(process.argv[3])
    let mass = []

    if (isNaN(min) || isNaN(max)) {
        throw new Error('Один из аргументов не является числом')
    }

    iteration:
        for (let i = min; i <= max; i++) {
            for (let j = min; j < i; j++) {
                if (i % j === 0) continue iteration;
            }
            mass.push(i)
        }
    return mass
}

let massGroupedBy = (simpleNum, n) => {
    let mass = simpleNum()
    let groupedMass = [];
    let len = mass.length;

    let lineNum = len % 4 === 0 ? len / 4 : Math.floor((len / 4) + 1);
    for (let i = 0; i <= lineNum; i++) {
        let temp = mass.slice(i * n, i * n + n);
        groupedMass.push(temp);
    }

    return groupedMass
}

function collorOutput(massGroupedBy, simpleNum) {
    let mass = massGroupedBy(simpleNum, 3)

    if (mass.length === 0) {
        console.log(colors.red('Нет простых чисел в последовательности'))
        return
    }

    for (let i = 0; i < mass.length; i++) {
        for (let j = 0; j < mass[i].length; j++) {
            switch (j) {
                case 0:
                    console.log(colors.green(mass[i][j]))
                    break
                case 1:
                    console.log(colors.yellow(mass[i][j]))
                    break
                case 2:
                    console.log(colors.red(mass[i][j]))
                    break
            }
        }
    }

}

collorOutput(massGroupedBy, simpleNum)