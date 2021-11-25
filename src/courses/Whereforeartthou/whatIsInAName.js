const whatIsInAName = (collection, source) => {
    let sourceKeys = Object.keys(source);
    return collection.filter(x => {
        let checkKeys = true;
        sourceKeys.forEach(key => {
            if (!x[key]) {
                checkKeys = false;
            } else if (x[key] !== source[key]) {
                checkKeys = false;
            }
        })
        return checkKeys;
    })
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }), [{ first: "Tybalt", last: "Capulet" }]);
console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }), [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]);
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }), [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]);
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }), [{ "apple": 1, "bat": 2, "cookie": 2 }]);
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 }), [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]);
console.log(whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 }), []);