//MMIMP
//for all regular function calls, this points to window object

console.log(this); //in this line 'this' keyword represents global context

var user = {
    firstName: 'Denish',
    courseCount: 10,
    getCourseCount: function () {
        console.log(this); //in this line 'this' keyword represents object context 
        function sayHello(){
            console.log(this); // in this line 'this' keyword represents global context because it is still a regular function
        }
        sayHello();
    }
};

user.getCourseCount();