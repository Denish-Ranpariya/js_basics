var counter = document.getElementById('counter');
var followers = document.getElementById('followers');

var count = 1;

//same as setTimeout but execute the function continuosly 
setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerHTML = count;
    }
}, 1);

//takes function as an argument and wait for the time and then executes the function
setTimeout(() => {
    followers.innerHTML = 'Followers on instagram';
}, 5000);