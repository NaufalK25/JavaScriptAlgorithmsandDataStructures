const steamrollArray = (arr) => {
    return arr.reduce((acc, curr) => Array.isArray(curr) ? acc.concat(steamrollArray(curr)) : acc.concat(curr), []);
}

console.log(steamrollArray([[["a"]], [["b"]]]), ["a", "b"]);
console.log(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);
console.log(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4]);
console.log(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4]);