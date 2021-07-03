const fs = require('fs');

function firstOccurance() {
    let string = fs.readFileSync('gistfile2.txt', 'utf8').split("")
    let uniqeChracter = []
    for (let i=0; i<string.length; i++) {
        if (uniqeChracter.indexOf(string[i]) === -1) {
            uniqeChracter.push(string[i])
        }
    }
    return uniqeChracter.join("")
}

console.log(firstOccurance())