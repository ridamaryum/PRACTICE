// This is a simple JavaScript program demonstrating various data types and operations
//arithmetic operators

let a = 5;
let b = 10;
let sum = a + b;
console.log("a=", a + ", b=" + b);
console.log("sum=", sum);
let sub = b-a;
console.log("sub=", sub);
let mul = a*b;
console.log("mul=", mul);
let div = b/a;
console.log("div=", div);
let mod = a%b;
console.log("mod=",mod);    
let exp = a**2;
console.log("exp=", exp);

// comparison operators
let x = 20;
let y = 15;
console.log("x > y:", x > y);
console.log("x < y:", x < y);
console.log("x == y:", x == y);
console.log("x != y:", x != y);

// logical operators
let isAdult = true;
let hasPermission = false;
console.log("isAdult && hasPermission:", isAdult && hasPermission);
console.log("isAdult || hasPermission:", isAdult || hasPermission);

// string concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName);

// boolean values
let isTrue = true;
let isFalse = false;
console.log("isTrue:", isTrue);
console.log("isFalse:", isFalse);

// null and undefined
let emptyValue = null;
let notDefined;
console.log("emptyValue:", emptyValue);
console.log("notDefined:", notDefined);

// object creation
let person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 30
};
console.log("Person Object:", person);

// array creation
let numbers = [1, 2, 3, 4, 5];
console.log("Numbers Array:", numbers);

// function definition
function greet(name) {
    return "Hello, " + name + "!";
}   
console.log(greet("Alice"));

// arrow function
const add = (x, y) => x + y;
console.log("Add using arrow function:", add(5, 3));    

// class definition
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        return `${this.name} says hello!`;
    }
}
let dog = new Animal("Buddy", "Dog");
console.log("Animal Object:", dog);
console.log(dog.speak());


// unary operators
let A = 6;
let B = 3;
A++;
console.log("A:", A);

B--;
console.log("B:", B);

// assignment operators
let x1 = 10;
let y1 = 5;
x1 -= y1;
console.log("x1:", x1);

let c = 2;
let d = 3;
c *= 3;
console.log("c:", c);

d /= 2;
console.log("d:", d);

// bitwise operators
let bitA = 5; // 0101 in binary
let bitB = 3; // 0011 in binary
console.log("bitA & bitB:", bitA & bitB); // AND    
console.log("bitA | bitB:", bitA | bitB); // OR
console.log("bitA ^ bitB:", bitA ^ bitB); // XOR
console.log("~bitA:", ~bitA); // NOT
console.log("bitA << 1:", bitA << 1); // Left Shift
console.log("bitA >> 1:", bitA >> 1); // Right Shift







