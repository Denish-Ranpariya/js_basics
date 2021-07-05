const uid = 'abc123';

var firstName = 'Denish Ranpariya';
var email = 'denish1234@gmail.com';
var password = 'test1234';
var confirmPassword = 'test1234';
var courseCount = 0;
var isLoggedInWithGoogle = false;

console.log('Unique ID: ' + uid);
console.log('Email id: ' + email);
console.log('Password: ' + password);
console.log('Confirm Password: ' + confirmPassword);
console.log('Number of courses: ' + courseCount);
console.log('Is user signed in with google? :' + isLoggedInWithGoogle);

//another method to print data
console.log(`
    User id: ${uid}
    Email id: ${email}
    Password: ${password}
    Confirm Password: ${confirmPassword}
    Number of courses: ${courseCount}
    Is user signed in with google? : ${isLoggedInWithGoogle}    
`);