var uno = () => {
    console.log("this is one");
};

var dos = () => {
    setTimeout(() => {
        console.log("Woo hoo");
    }, 3000);
    console.log("this is two");
};

var tres = () => {
    console.log("this is three");
};

uno();
tres();
dos();

//output: 
//this is one
//this is three
//this is two
//Woo hoo

//as js was made for web 
//because it will complete all the statements as many as possible 
//after that it will wait