const sumPrimes = (num) => {
    let total = 0;
    for (let i = 2; i <= num; i++) if (isPrime(i)) total += i;
    return total;
}

const isPrime = (num) => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return true;
}

console.log(sumPrimes(10), 17);
console.log(sumPrimes(977), 73156);