const pairElement = (str) => {
    let pairArr = [];
    let strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        let pair;
        switch (strArr[i]) {
            case "A":
                pair = "T";
                break;
            case "T":
                pair = "A";
                break;
            case "C":
                pair = "G";
                break;
            default:
                pair = "C";
                break;
        }
        pairArr.push([strArr[i], pair])
    }
    return pairArr;
}

console.log(pairElement("ATCGA"), [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
console.log(pairElement("TTGAG"), [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]);
console.log(pairElement("CTCTA"), [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]);