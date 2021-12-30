const translatePigLatin = (str) => {
    let charBeforeVowel = str.split(/[aiueo]/)[0];
    const restChar = str.replace(charBeforeVowel, '');
    if (!charBeforeVowel) charBeforeVowel = 'w';
    return `${restChar}${charBeforeVowel}ay`;
}

console.log(translatePigLatin("california"), "aliforniacay");
console.log(translatePigLatin("paragraphs"), "aragraphspay");
console.log(translatePigLatin("glove"), "oveglay");
console.log(translatePigLatin("algorithm"), "algorithmway");
console.log(translatePigLatin("eight"), "eightway");
console.log(translatePigLatin("schwartz"), "artzschway");
console.log(translatePigLatin("rhythm"), "rhythmay");