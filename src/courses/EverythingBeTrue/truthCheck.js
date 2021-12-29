const truthCheck = (collection, pre) => collection.every(x => x.hasOwnProperty(pre) && !!x[pre]);

console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"), true);
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"), false);
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male", "age": 0 }, { "user": "Dipsy", "sex": "male", "age": 3 }, { "user": "Laa-Laa", "sex": "female", "age": 5 }, { "user": "Po", "sex": "female", "age": 4 }], "age"), false);
console.log(truthCheck([{ "name": "Pete", "onBoat": true }, { "name": "Repeat", "onBoat": true }, { "name": "FastForward", "onBoat": null }], "onBoat"), false);
console.log(truthCheck([{ "name": "Pete", "onBoat": true }, { "name": "Repeat", "onBoat": true, "alias": "Repete" }, { "name": "FastForward", "onBoat": true }], "onBoat"), true);
console.log(truthCheck([{ "single": "yes" }], "single"), true);
console.log(truthCheck([{ "single": "" }, { "single": "double" }], "single"), false);
console.log(truthCheck([{ "single": "double" }, { "single": undefined }], "single"), false);
console.log(truthCheck([{ "single": "double" }, { "single": NaN }], "single"), false);