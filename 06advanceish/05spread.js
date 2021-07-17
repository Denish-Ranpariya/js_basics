// var maxElement = Math.max(2, 5, 6, 7, 9, 0);
// console.log(maxElement);

// var myObj = {};

// Object.assign(myObj,{a : 1, b : 2, c : 3}, {d : 4, e : 5});

// console.log(myObj); // print {a: 1, b: 2, c: 3, d: 4, e: 5}

function sumOne(a, b) {
    return a + b;
}

console.log(sumOne(4, 5)); // 9

myList = [4, 5];
console.log(sumOne(myList)); // 4,5undefined (beacuse types doesn't matched)

console.log(sumOne(...myList)); // 9 
//this is spread operator
//it takes group and give multiple values 


function sumTwo(...args) { //this is rest operator
    console.log(args); //this will print an array of passed arguments
    let sum = 0;
    for (arg of args) {
        sum += arg;
    }
    return sum;
}

console.log(sumTwo(2, 4, 5, 3, 2, 1));

//so spread and rest operators are opposite of each other


//modify function to return multiplication of first two numbers and addition of others

function multipliAndAdd(a, b, ...args) {
    let multi = a * b;

    let sum = 0;

    for (arg of args) {
        sum += arg;
    }

    return [multi, sum];
}

console.log(multipliAndAdd(2, 4, 1, 4, 5));