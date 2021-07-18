var uno = () => {
    return "this is one";
};

// var dos = () => {
//     setTimeout(() => {
//         return "I am Two";
//     }, 3000);
// };

var dos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("That went right");
        }, 3000);
    });
}

var tres = () => {
    return "this is three";
};

var callMe = async () => {
    var valOne = uno();
    console.log(valOne);
    var valTwo = await dos();
    console.log(valTwo);
    var valThree = tres();
    console.log(valThree);
};
callMe();