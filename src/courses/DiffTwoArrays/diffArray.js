const diffArray = (arr1, arr2) => {
    let resArr = [];
    for (let words of arr1) if (!arr2.includes(words)) resArr.push(words);
    for (let words of arr2) if (!arr1.includes(words)) resArr.push(words);
    return resArr;
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["pink wool"]);
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["diorite", "pink wool"]);
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]), []);
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4]);
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]), ["piglet", 4]);
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]), ["snuffleupagus", "cookie monster", "elmo"]);
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]), [1, "calf", 3, "piglet", 7, "filly"]);