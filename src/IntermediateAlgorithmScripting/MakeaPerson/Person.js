const Person = function (firstAndLast) {
    this.getFullName = () => firstAndLast;
    this.getFirstName = () => firstAndLast.split(' ')[0];
    this.getLastName = () => firstAndLast.split(' ')[1];
    this.setFirstName = (firstName) => {
        firstAndLast = `${firstName} ${firstAndLast.split(' ')[1]}`;
    };
    this.setLastName = (lastName) => {
        firstAndLast = `${firstAndLast.split(' ')[0]} ${lastName}`;
    };
    this.setFullName = (fullName) => firstAndLast = fullName
    return firstAndLast;
};

const bob = new Person('Bob Ross');
console.log(bob.getFullName(), 'Bob Ross');
console.log(Object.keys(bob).length, 6);
console.log(bob instanceof Person, true);
console.log(bob.firstName, undefined);
console.log(bob.lastName, undefined);
console.log(bob.getFirstName(), "Bob");
console.log(bob.getLastName(), "Ross");
console.log(bob.getFullName(), "Bob Ross");
bob.setFirstName("Haskell");
console.log(bob.getFullName(), "Haskell Ross");
bob.setLastName("Curry");
console.log(bob.getFullName(), "Haskell Curry");
bob.setFullName("Haskell Curry");
console.log(bob.getFullName(), "Haskell Curry");
bob.setFullName("Haskell Curry");
console.log(bob.getFirstName(), "Haskell");
bob.setFullName("Haskell Curry");
console.log(bob.getLastName(), "Curry");