const fs = require('fs');


function maximumProfit() {

    let historicalPrice = fs.readFileSync('gistfile1.txt', 'utf8').split(" ")
    let prices = historicalPrice.map(price => Number(price))
    // console.log(prices)

    let lowIndex = -1
    let highIndex = -1

    for(let i=0; i<=prices.length; i++) {
        if (lowIndex === -1) {
            lowIndex = 0
        } else if (prices[i] < prices[lowIndex]) {
            lowIndex = i
        } else if (
            prices[i] > (highIndex === -1 ? 0 : prices[highIndex])
        ) {
            highIndex = i
        }
    }

    let profit = highIndex > -1 ? (prices[highIndex] - prices[lowIndex]) : 0    

    if (profit > 0) {
        console.log(`buy at ${lowIndex+1}rd hour, sell at ${highIndex+1}rd hour for $${profit} maximum profit jacky can made`)
    } else {
        console.log(`maximum profit for jacky is $${profit} `)
    }
}

maximumProfit()