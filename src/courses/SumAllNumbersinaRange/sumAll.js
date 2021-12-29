const sumAll = (arr) => {
    let total = 0;
    arr = (arr[0] < arr[1]) ? arr : arr.reverse();
    for (let i = arr[0]; i < arr[1] + 1; i++) total += i;
    return total;
}

console.log(sumAll([1, 4]), 10);
console.log(sumAll([4, 1]), 10);
console.log(sumAll([5, 10]), 45);
console.log(sumAll([10, 5]), 45);