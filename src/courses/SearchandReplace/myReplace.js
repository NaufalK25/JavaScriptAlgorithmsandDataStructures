const myReplace = (str, before, after) => {
    const beforeArr = before.split('')
    const afterArr = after.split('')
    afterArr[0] = afterArr[0].toLowerCase();
    if (beforeArr[0] === beforeArr[0].toUpperCase()) afterArr[0] = afterArr[0].toUpperCase();
    return str.replace(beforeArr.join(''), afterArr.join(''));
}

console.log(myReplace("Let us go to the store", "store", "mall"), "Let us go to the mall");
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch");
console.log(myReplace("I think we should look up there", "up", "Down"), "I think we should look down there");
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"), "This has a spelling error");
console.log(myReplace("His name is Tom", "Tom", "john"), "His name is John");
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"), "Let us get back to more Algorithms");