//this one is called as prototype 
//almost same as class in other languages
var User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        return this.courseCount;
    }
}

//prototype is used to add new methods or properties without touching actual prototype
User.prototype.getFirstName = function() {
    console.log(`Your firstname is: ${this.firstName}`);
}

var denish = new User('denish', 4); //since we are using new keyword here this function call is not regular function call so won't refer to global context

//and new kwyword will be responsible for creating new instance of the prototype

// console.log(denish);

console.log(denish.getCourseCount());
denish.getFirstName();

var hitesh = new User('hitesh', 2);

// console.log(hitesh);
console.log(hitesh.getCourseCount());
hitesh.getFirstName();


