var user = {
    firstName : 'Denish',
    lastName : 'Ranpariya',
    role : 'user',
    loginCount : '33',
    signedInWithGoogle : true,
};

console.log(user);

//two methods to access 
console.log(user.firstName);
console.log(user['firstName']); //pass as a string

user.loginCount = 44;

console.log(user);
console.table(user); //print it like a table structure (key-value pair)

