var isLoggedIn = true;
var isEmailVerified = true;
var isCardInfoValid = false;

// if(isLoggedIn){
//     console.log('User is logged in.');
//     if(isEmailVerified){
//         console.log('Email id is verified.');
//         if(isCardInfoValid){
//             console.log('Card info is valid.');
//         }
//     }
// }

if(isLoggedIn && isEmailVerified && isCardInfoValid){
    console.log('Allow user to make a purchase.');
}else{
    console.log('You are not allowed to make purchase.');
}