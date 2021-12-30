const spinalCase = (str) => {
    const removeCamel = str.replace(/[A-Z]/g, char => ` ${char}`);
    const splitStr = removeCamel.trim().split(/[\W_]+/);
    splitStr.forEach((word, idx) => splitStr[idx] = word.toLowerCase());
    return splitStr.join('-');
}

console.log(spinalCase("This Is Spinal Tap"), "this-is-spinal-tap");
console.log(spinalCase("thisIsSpinalTap"), "this-is-spinal-tap");
console.log(spinalCase("The_Andy_Griffith_Show"), "the-andy-griffith-show");
console.log(spinalCase("Teletubbies say Eh-oh"), "teletubbies-say-eh-oh");
console.log(spinalCase("AllThe-small Things"), "all-the-small-things");