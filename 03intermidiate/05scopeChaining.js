//VVIMP
//small guy can ask for icecream from bigger guy
//but big guy cannot ask for icecream from smaller guy
//remember this icecream example for scope chaining in js

var name = 'denish';

console.log(name);

function printName(){
    console.log(name);
}

//this will print name from line number 4
printName();

function printNewName(){
    var name = 'Mr. D';
    console.log(name);
    printNameNested();
    function printNameNested(){
        var name = 'Mr. DR';
        console.log(name);
    }
}

//this will print name from line 16
printNewName();