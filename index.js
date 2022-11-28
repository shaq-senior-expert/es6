
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



const add = (function(){
    let counter = 0;
    return function(){counter += 1; return counter;}
})();

console.log(add());
