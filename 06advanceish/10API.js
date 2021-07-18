//always run this code in browser because node doesn't know what is fetch method

fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
        return response.json();
    }).then(
        (data) => {
            var joke = data.value;
            console.log("Joke: " + joke);
        }
    )
    .catch();