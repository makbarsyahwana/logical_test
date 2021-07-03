function getPrimes(num) {
    let primes
    let result = 0
    for (let i=12; i<=num; i++) {
        primes = []
        for(let j=2; j<=i; j++) {
            if (i % j === 0) {
                primes.push(j)
                if (primes.length === 6) {
                    break
                }
            }
        }
        // console.log(i, primes)
        if (primes.length === 5) {
            primes = []
            result++
        }
    }
    console.log(result)
}

getPrimes(262144)