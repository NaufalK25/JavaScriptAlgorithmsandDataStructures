const rot13 = (str) => {
    let strArr = str.split('');
    let rotArr = [];
    for (let i = 0; i < strArr.length; i++) {
        if (/[A-Z]/.test(strArr[i])) {
            let strToASCII = strArr[i].charCodeAt(0);
            let asciiToStr;
            if (strToASCII >= 65 && strToASCII <= 77) strToASCII += 13;
            else strToASCII -= 13;
            asciiToStr = String.fromCharCode(strToASCII);
            rotArr.push(asciiToStr);
        } else {
            rotArr.push(strArr[i]);
        }
    }
    return rotArr.join('')
}

console.log(rot13("SERR PBQR PNZC"), "FREE CODE CAMP");
console.log(rot13("SERR CVMMN!"), "FREE PIZZA!");
console.log(rot13("SERR YBIR?"), "FREE LOVE?");
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."), "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");