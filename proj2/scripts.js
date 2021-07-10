const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");


const center = document.querySelector(".center");

var getBgColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

// red.addEventListener('mouseenter', e => {
//     center.style.background = getBgColor(red);
// });

// cyan.addEventListener('mouseenter', e => {
//     center.style.background = getBgColor(cyan);
// });

// violet.addEventListener('mouseenter', e => {
//     center.style.background = getBgColor(violet);
// });

// orange.addEventListener('mouseenter', e => {
//     center.style.background = getBgColor(orange);
// });

// pink.addEventListener('mouseenter', e => {
//     center.style.background = getBgColor(pink);
// });



var changeBG = (selectedElement) => {
    selectedElement.addEventListener('mouseenter', e => {
        center.style.background = getBgColor(selectedElement);
    });
};

changeBG(red);
changeBG(cyan);
changeBG(violet);
changeBG(orange);
changeBG(pink);