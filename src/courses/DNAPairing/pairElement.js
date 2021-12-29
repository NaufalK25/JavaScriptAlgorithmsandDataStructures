const pairElement = (str) => {
    let pairArr = [];
    let strArr = str.split('');
    for (let dnaPair of strArr) {
        switch (dnaPair) {
            case 'A':
                pairArr.push(['A', 'T']);
                break;
            case 'T':
                pairArr.push(['T', 'A']);
                break;
            case 'C':
                pairArr.push(['C', 'G']);
                break;
            case 'G':
                pairArr.push(['G', 'C']);
                break;
        }
    }
    return pairArr;
}

console.log(pairElement("ATCGA"), [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]]);
console.log(pairElement("TTGAG"), [["T", "A"], ["T", "A"], ["G", "C"], ["A", "T"], ["G", "C"]]);
console.log(pairElement("CTCTA"), [["C", "G"], ["T", "A"], ["C", "G"], ["T", "A"], ["A", "T"]]);