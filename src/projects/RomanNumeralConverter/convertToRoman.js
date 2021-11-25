const convertToRoman = (num) => {
    let romanNumeral = '';
    while (num > 0) {
        if (num >= 1000) {
            romanNumeral += 'M';
            num -= 1000;
        } else if (num >= 900) {
            romanNumeral += 'CM';
            num -= 900;
        } else if (num >= 500) {
            romanNumeral += 'D';
            num -= 500;
        } else if (num >= 100) {
            romanNumeral += 'C';
            if (num >= 400) {
                romanNumeral += 'D';
                num -= 400;
            } else {
                num -= 100;
            }
        } else if (num >= 90) {
            romanNumeral += 'XC';
            num -= 90;
        } else if (num >= 50) {
            romanNumeral += 'L';
            num -= 50;
        } else if (num >= 10) {
            romanNumeral += 'X';
            if (num >= 40) {
                romanNumeral += 'L';
                num -= 40;
            } else {
                num -= 10;
            }
        } else if (num === 9) {
            romanNumeral += 'IX';
            num -= 9;
        } else if (num >= 5) {
            romanNumeral += 'V';
            num -= 5;
        } else if (num >= 1) {
            romanNumeral += 'I';
            if (num === 4) {
                romanNumeral += 'V';
                num -= 4;
            } else {
                num -= 1;
            }
        }
        if (num <= 0) {
            break;
        }
    }
    return romanNumeral;
}

console.log(convertToRoman(2), 'II');
console.log(convertToRoman(3), 'III');
console.log(convertToRoman(4), 'IV');
console.log(convertToRoman(5), 'V');
console.log(convertToRoman(9), 'IX');
console.log(convertToRoman(12), 'XII');
console.log(convertToRoman(16), 'XVI');
console.log(convertToRoman(29), 'XXIX');
console.log(convertToRoman(44), 'XLIV');
console.log(convertToRoman(45), 'XLV');
console.log(convertToRoman(68), 'LXVIII');
console.log(convertToRoman(83), 'LXXXIII');
console.log(convertToRoman(97), 'XCVII');
console.log(convertToRoman(99), 'XCIX');
console.log(convertToRoman(400), 'CD');
console.log(convertToRoman(500), 'D');
console.log(convertToRoman(501), 'DI');
console.log(convertToRoman(649), 'DCXLIX');
console.log(convertToRoman(798), 'DCCXCVIII');
console.log(convertToRoman(891), 'DCCCXCI');
console.log(convertToRoman(1000), 'M');
console.log(convertToRoman(1004), 'MIV');
console.log(convertToRoman(1006), 'MVI');
console.log(convertToRoman(1023), "MXXIII");
console.log(convertToRoman(2014), 'MMXIV');
console.log(convertToRoman(3999), 'MMMCMXCIX');