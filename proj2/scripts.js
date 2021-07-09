function changeBackground(color) {
    var circle = document.getElementById('circle');
    switch (color) {
        case 'red':
            circle.style.background = '#e44236';
            break;

        case 'cyan':
            circle.style.background = '#25ccf7';
            break;

        case 'violet':
            circle.style.background = '#8b78e6';
            break;

        case 'orange':
            circle.style.background = '#ea7773';
            break;

        case 'pink':
            circle.style.background = '#bb2cd9';
            break;
        default:
            break;
    }
}