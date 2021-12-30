const convertHTML = (str) => {
    const htmlEntities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    };
    return str.replace(/[&<>"']/g, char => htmlEntities[char]);
}

console.log(convertHTML("Dolce & Gabbana"), 'Dolce &amp; Gabbana');
console.log(convertHTML("Hamburgers < Pizza < Tacos"), 'Hamburgers &lt; Pizza &lt; Tacos');
console.log(convertHTML("Sixty > twelve"), 'Sixty &gt; twelve');
console.log(convertHTML('Stuff in "quotation marks"'), 'Stuff in &quot;quotation marks&quot;');
console.log(convertHTML("Schindler's List"), 'Schindler&apos;s List');
console.log(convertHTML("<>"), '&lt;&gt;');
console.log(convertHTML("abc"), 'abc');