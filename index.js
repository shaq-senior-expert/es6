// let age = 35;

// let voteable = (age < 18) ? "Too young":"Old enough";

// console.log(voteable);

// const person = {fname:"John", lname:"Doe", age:25};
// const person = ["apple", "peach", "remon"];

// let text = "";
// for (let x of person) { 
//   text += x;
// }

// console.log(text);

const name = new Set(["John", "Mark", "Charlse"]);
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 400]
]);

for(const x of fruits){
    console.log(x[0]);
}

console.log(name);

let x = 12;
if(x > 10)
    throw "Greater than 10";
else
    throw "Lesser than 10";

