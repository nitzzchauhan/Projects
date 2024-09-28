 
// function counter() {
//     let count = 0;
    
//     return function() {
//         count += 1;
//         return count;
//     };
// }


// const increment = counter();
// console.log(increment()); // Output: 1
// console.log(increment()); // Output: 2
// console.log(increment()); // Output: 3


// function outerFunction() {
//     let outerVariable = 'I am outside!';
    
//     function innerFunction() {
//         console.log(outerVariable); // innerFunction has access to outerVariable
//     }
    
//     return innerFunction;
// }

// const myFunction = outerFunction();
// myFunction(); // Output: I am outside!
// console.log(myFunction)

function createArrayOfFunctions() {
    let arr = [];
    
    for (let i = 0; i < 3; i++) {
        arr.push(function() {
            console.log(i);
        });
    }
    
    return arr;
}

const functions = createArrayOfFunctions();
console.log(functions);
// functions

functions[0](); // Output: 3
functions[1](); // Output: 3
functions[2](); // Output: 3


const person = (function() {
    let age = 25; // Private variable

    function getAge() {
        return age;
    }

    function growOlder() {
        age += 1;
    }

    return {
        getAge,
        growOlder
    };
})();

console.log(person.getAge()); // Output: 25
person.growOlder();
console.log(person.getAge()); // Output: 26


