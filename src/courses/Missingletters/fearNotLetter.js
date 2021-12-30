const fearNotLetter = (str) => {
    const alphaArr = [];
    for (let i = 97; i <= 122; i++) alphaArr.push(String.fromCharCode(i));
    const alphaStr = alphaArr.join('');
    const firstChar = str[0];
    const idxFirstChar = alphaStr.indexOf(firstChar);
    const idxLastChar = idxFirstChar + str.length + 1;
    const partStr = alphaStr.slice(idxFirstChar, idxLastChar);
    for (const char of partStr) if (!str.includes(char)) return char;
}

console.log(fearNotLetter("abce"), "d");
console.log(fearNotLetter("abcdefghjklmno"), "i");
console.log(fearNotLetter("stvwx"), "u");
console.log(fearNotLetter("bcdf"), "e");
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"), undefined);