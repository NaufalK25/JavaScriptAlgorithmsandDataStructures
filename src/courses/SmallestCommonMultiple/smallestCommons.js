const smallestCommons = (arr) => {
    const range = [...arr].sort((a, b) => a - b);
    let [a, b] = range;
    let lcm = a;
    while (a < b) {
        if (lcm % a !== 0 || lcm % b !== 0) {
            lcm += 1;
            [a, b] = range;
        } else {
            a += 1;
        }
    }
    return lcm;
}

console.log(smallestCommons([1, 5]), 60);
console.log(smallestCommons([5, 1]), 60);
console.log(smallestCommons([2, 10]), 2520);
console.log(smallestCommons([1, 13]), 360360);
console.log(smallestCommons([23, 18]), 6056820);