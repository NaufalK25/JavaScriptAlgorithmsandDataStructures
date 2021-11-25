const addTogether = (...arr) => {
    if (typeof arr[0] === 'number') {
        if (arr.length > 1) {
            if (typeof arr[1] === 'number') {
                return arr[0] + arr[1];
            }
        } else {
            return (num) => {
                if (typeof num === 'number')
                    return arr[0] + num;
            }
        }
    }
}

console.log(addTogether(2, 3), 5);
console.log(addTogether(23, 30), 53);
console.log(addTogether(5)(7), 12);
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"), undefined);
console.log(addTogether(2, "3"), undefined);
console.log(addTogether(2)([3]), undefined);