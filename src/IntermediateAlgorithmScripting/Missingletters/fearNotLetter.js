const fearNotLetter = (str) => {
    let alphaArr = [];
    for (let i = 97; i <= 122; i++) {
        alphaArr.push(String.fromCharCode(i));
    }
    let alphaStr = alphaArr.join('');
    let firstChar = str[0];
    let idxFirstChar = alphaStr.indexOf(firstChar);
    let idxLastChar = idxFirstChar + str.length + 1;
    let partStr = alphaStr.slice(idxFirstChar, idxLastChar);
    for (let char of partStr) {
        if (!str.includes(char)) {
            return char;
        }
    }
}

console.log(fearNotLetter("abce"), "d");
console.log(fearNotLetter("abcdefghjklmno"), "i");
console.log(fearNotLetter("stvwx"), "u");
console.log(fearNotLetter("bcdf"), "e");
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"), undefined);