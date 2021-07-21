let cards = document.querySelectorAll('.card');

cards.forEach((card) => card.addEventListener('click', flip));

var isFlipped = false;
var firstCard;
var secondCard;

function flip() {
  // console.log(this);
  this.classList.add('flip');

  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    isFlipped = false;
    // console.log(firstCard);
    // console.log(secondCard);
    checkIt();
  }
}


function checkIt() {

  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

function success() {
  // console.log('success');

  firstCard.removeEventListener('click', flip);
  secondCard.removeEventListener('click', flip);

  document.querySelector('.text-center').innerHTML = 'You won the game.';

  cards.forEach((card) => card.removeEventListener('click', flip));
}

function fail() {
  // console.log('fail');
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 500);

}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

//TODO: implement suffle method\
function suffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
}

window.addEventListener('load', suffle);