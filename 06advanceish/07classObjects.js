//import User class in this file 

const User = require("./06classjs.js");

var denish = new User("denish", "denish@abc.xyz");

// console.log(denish);

console.log(denish.getInfo());

denish.enrollInCourse("JS");
denish.enrollInCourse("ReactJS");
denish.enrollInCourse("MERN stack");

// console.log(denish.getCourses());

const courses = denish.getCourses();

courses.forEach((course) => console.log(course));