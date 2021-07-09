const states = [
    'Gujarat',
    'Maharashtra',
    'Rajasthan',
    'Delhi',
    'Kerala',
    1947,
    'Karnataka'
];

// for (let i = 0; i < states.length; i++){
//     if(typeof states[i] !== 'string') continue;
//     console.log(states[i]);
// }

let i = 0;

// while(i < states.length){
//     console.log(states[i]);
//     i++;
// }

do{
    console.log(states[i]);
    i++;
}while(i < states.length)