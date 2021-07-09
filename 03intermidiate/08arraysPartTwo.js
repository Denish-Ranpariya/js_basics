//declare function as a variable and remove function keyword and add =>
//this will be arrow function 

//keep this thing in mind
//if curly braces are there then return keyword should be present
//if curly braces are not there then return keyword is not required

var isEven =  (number) => {
    // if(number % 2 === 0){
    //     return true;
    // }

    // return false;

    return number % 2 === 0;
}

// console.log(isEven(5));

// var numbers = [2, 4, 6, 8];
// var result = numbers.every(isEven);
// console.log(result);

//call back function
var numbers = [2, 4, 6, 8];
var result = numbers.every((e) => e % 2 === 0);
console.log(result);