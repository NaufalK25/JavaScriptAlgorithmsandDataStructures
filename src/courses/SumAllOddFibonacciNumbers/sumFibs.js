const sumFibs = (num) => {
    let [sum, a, b] = [0, 0, 1];
    while (b <= num) {
        if (b % 2 !== 0) sum += b;
        [a, b] = [b, a + b];
    }
    return sum;
}

console.log(sumFibs(1), 2);
console.log(sumFibs(1000), 1785);
console.log(sumFibs(4000000), 4613732);
console.log(sumFibs(4), 5);
console.log(sumFibs(75024), 60696);
console.log(sumFibs(75025), 135721);