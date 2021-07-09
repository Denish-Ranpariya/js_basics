//two different methods to declare array

var countries = ['India', 'USA', 'Japan', 'Russia'];

var states = new Array('Gujarat', 'Rajasthan', 'Delhi', 'Maharastra');

// console.log(countries[0]);
// console.log(countries.length);

states[0] = 'Karnataka';

// console.log(states);

user = ['denish', 'denish@dev.com', 3, 34, true];

// console.log(user);

user.pop(); //removes at end
// console.log(user);

user.unshift('NEW VALUE'); //add at start and shift other elements 
//this is a cost effective operation

// console.log(user);

user.shift(); //removes from start

// console.log(user);

console.log(user.indexOf(3));

var name = 'denish';

//Array.from() method accepts any iterable
console.log(Array.from(name));

