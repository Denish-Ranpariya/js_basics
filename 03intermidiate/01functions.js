function sayHello(){
    console.log('Hello Denish');
}

function sayHelloTo(name){
    console.log(`Hello ${name}`);
}

function namastey(){
    return 'Hello in India';
}


sayHello();
sayHelloTo();
sayHelloTo('denish');

var greetings = namastey();

console.log(greetings);
console.log(namastey());