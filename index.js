

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

hello1 = () =>{
    return "Hello world!";
}

hello2 = () => "Hello world!";
hello3 = (val) => 3 + val;
hello4 = val => 3 + val;

console.log(hello4(7));

