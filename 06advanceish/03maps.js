let myMap = new Map();

myMap.set(1, 'uno');
myMap.set(2, 'dos');
myMap.set(3, 'tres');
myMap.set(4, 'cuatro');

console.log(myMap.get(3));

for(let key of myMap.keys()){
    console.log(`key is  ${key}`);
    console.log(`value is ${myMap.get(key)}`);
}

myMap.forEach((value) => console.log(value));

myMap.delete(2);
console.log(myMap);