// function add(){
//     let counter = 0;
//     function plus(){
//         counter += 1;
//     }
//     plus();
//     return counter;
// }

// console.log(add());


const add = (function(){
    let counter = 0;
    return function(){counter += 1; return counter;}
})();

console.log(add());