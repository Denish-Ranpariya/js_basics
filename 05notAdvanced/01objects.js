//this one is called as prototype 
//almost same as class in other languages
var User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        return this.courseCount;
    }
}

var denish = new User('denish', 4); //since we are using new keyword here this function call is not regular function call so won't refer to global context

console.log(denish);

var hitesh = new User('hitesh', 2);

console.log(hitesh);
