var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

// console.log(testArray.fill(0));

// console.log(testArray.fill('d', 2)); //starting index is 2

// console.log(testArray.fill('d', 2, 5)); 
//starting index is 2 (inclusive) and ending index is 5 (exclusive) 

const myNumbers = [22, 34, 45, 68, 98, 12];

const result = myNumbers.filter((n) => n != 34); 
//removes 34 from myNumbers array and create new array and assign it to result array

console.log(result);

var users = ['Ted', 'Tim', 'Ton', 'Sam', 'Sor', 'Sod'];

console.log(users.slice(2, 5));
//slice array
//2 is inclusive
//5 is exclusive

users.splice(2, 3, 'Hey');
// 2 is starting index 
// 3 is count
// hey is value to be replaced

console.log(users);
//result will be ['Ted', 'Tim', 'Hey', 'Sod']