// falsy values
// undefined
// null
// NaN
// ''

//falsy values are by default false

var user = null;

if(user){
    console.log('Condition is true.');
}else{
    console.log('Condition is false.');
}

console.log(2 + 2); //4
console.log(2 + '2');//22
console.log('2' + 2);//22


var num = 2;

//loosely compared
if(num == '2'){
    console.log('Condition is true.');
}else{
    console.log('Condition is false.')
}

//strictly compared
if(num === '2'){
    console.log('Condition is true.');
}else{
    console.log('Condition is false.')
}