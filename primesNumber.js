function getFactor(num) {
    let factor
    let result = 0
    for (let i=12; i<=num; i++) {
        factor = []
        for(let j=2; j<=i; j++) {
            if (i % j === 0) {
                factor.push(j)
                if (factor.length === 6) {
                    break
                }
            }
        }
        // console.log(i, primes)
        if (factor.length === 5) {
            factor = []
            result++
        }
    }
    console.log(result)
}

getFactor(134217728)