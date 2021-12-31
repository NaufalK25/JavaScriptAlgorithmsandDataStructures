const checkCashRegister = (price, cash, cid) => {
    const UNIT_AMOUNT = {
        "PENNY": .01,
        "NICKEL": .05,
        "DIME": .10,
        "QUARTER": .25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    }
    const totalCID = cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2);
    let changeToGive = cash - price;
    const changeArray = [];
    if (changeToGive > totalCID) return { status: "INSUFFICIENT_FUNDS", change: changeArray };
    if (changeToGive.toFixed(2) === totalCID) return { status: "CLOSED", change: cid };
    for (const elem of cid.reverse()) {
        let temp = [elem[0], 0];
        while (changeToGive >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
            temp[1] += UNIT_AMOUNT[elem[0]];
            elem[1] -= UNIT_AMOUNT[elem[0]];
            changeToGive -= UNIT_AMOUNT[elem[0]];
            changeToGive = changeToGive.toFixed(2);
        }
        if (temp[1] > 0) changeArray.push(temp);
    }
    if (changeToGive > 0) return { status: "INSUFFICIENT_FUNDS", change: [] };
    return { status: "OPEN", change: changeArray };
}

console.log(
    checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]),
    { status: "OPEN", change: [["QUARTER", 0.5]] }
);
console.log(
    checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]),
    { status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]] }
);
console.log(
    checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]),
    { status: "INSUFFICIENT_FUNDS", change: [] }
);
console.log(
    checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]),
    { status: "INSUFFICIENT_FUNDS", change: [] }
);
console.log(
    checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]),
    { status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]] }
);