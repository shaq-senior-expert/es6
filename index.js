const fruits = ["Banana", "Orange", "Apple", "Mango"];
const digits = new Array(40, 100, 1, 5, 25, 10);

fruits.pop();
fruits.push("Tomato");
digits.sort();
digits.sort((a, b) => b - a);
fruits.reverse();

console.log(digits);

fruits.forEach(myFunction);

function myFunction(value) {
    console.log(value);
}

function myArrayMax(arr){
    return Math.max.apply(null, arr);
}

function myArrayMin(arr){
    return Math.min.apply(null, arr);
}

console.log(myArrayMin(digits));

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];

cars.sort((a, b) => {return a.year - b.year});
console.log(cars);

// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array) {
//   return value * 2;
// }

// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.filter(myFunction);

// function myFunction(value) {
//   return value > 10;
// }

// const numbers1 = [45, 4, 9, 16, 25];
// let sum = numbers1.reduce(myFunction);
// let sum = numbers1.reduceRight(myFunction, 100);

// function myFunction(total, value, index, array) {
//   return total + value;
// }

const numbers1 = [5, 4, 9, 16, 25];
let allOver18 = numbers1.find(myFunction);

function myFunction(value) {
  return value > 18;
}

console.log(allOver18);





