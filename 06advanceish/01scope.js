// console.log(name);

//in case of var this code doesn't give the error but prints undefined
//in case of let this code will give error
let name = 'denish'; 

//-------------------//

//in other programming languages this code will give error as the scope is defined in these programming languages by {}

//but js will print 'denish' because in javascript scope is defined by functions and in this case if is not a function

//to remove this ambiguity let is defined afterwards

if(true){
    var firstName = 'denish';
}

console.log(firstName);

// ----- soln. ----- 
//in this case it will give error
if(true){
    let firstName = 'denish';
}

console.log(firstName);