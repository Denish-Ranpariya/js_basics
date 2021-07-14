//example 1
// function init(){
//     var firstName = 'denish';

//     function sayFirstName() {
//         console.log(firstName);
//     }

//     return sayFirstName;
// }

// var value = init();
// value();

//example 2


function doAddition(x){
    return function add(y){
        return x + y;
    }
}

var temp = doAddition(2);
var result = temp(4);
console.log(result);

//another way to call this function 
console.log(doAddition(5)(5)); //this is called curring