const names = ['YouTube', 'Instagram', 'Facebook', 'Netflix', 'Amazon'];

//for of loop is used for array
for(const name of names){
    console.log(name);
}

const symbols = {
    'yt' : 'YouTube',
    'ig' : 'Instagram',
    'fb' : 'Facebook',
    'lco' : 'LearnCodeOnline'
};

//for in loop is used for objects
for(const i in symbols){
    console.log(`Key is: ${i} and value is: ${symbols.i}`);
}