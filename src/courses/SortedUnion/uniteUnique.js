const uniteUnique = (...arr) => {
    return arr
        .reduce((acc, curr) => acc.concat(curr), [])
        .filter((item, index, self) => self.indexOf(item) === index);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
console.log(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]);
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [1, 2, 3, 5, 4, 6, 7, 8]);