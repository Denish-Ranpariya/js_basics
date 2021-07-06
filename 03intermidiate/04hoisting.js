tipper('80');

function tipper(amount){
    var bill = parseInt(amount);
    console.log(bill + 5);
}

//this code will work perfectly fine
// bigTipper(200);

// function bigTipper(amount){
//     var bill = parseInt(amount);
//     console.log(bill + 15);
// }

//this code will not work 
// BigTipper(200);

// var bigTipper = function (amount){
//     var bill = parseInt(amount);
//     console.log(bill + 15);
// }

//VVIMP
// function declaration are scanned and made available
// variable declaration are scanned and made undefined


var firstName = 'denish';
console.log(firstName);
//above code will print the name because name is already declared and defined

console.log(myName);
var myName = 'denish';
//above code will print undefined because name is not already defined


