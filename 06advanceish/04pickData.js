var user = ["denish", 3, "admin"];
// var name = user[0];
// var role = user[2];

var [name, courseCount, role] = user; //same result

console.log(name);
console.log(role);

var myUser = {
    name : "denish", 
    courseCount: 4, 
    role: "admin"
};

// console.log(myUser.name);
// console.log(myUser.role);


//same result

//IMPORTANT:
//while destructuring array the names must be same
var {name, courseCount, role} = myUser;

console.log(name);
console.log(courseCount);
console.log(role);