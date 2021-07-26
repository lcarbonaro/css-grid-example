const catResult = document.getElementById("cat-result");
const catButton = document.getElementById("catButton");

catButton.addEventListener("click", getRandomCat);

function getRandomCat() {
    fetch("https://cataas.com/cat?json=true")
        .then((res) => res.json())
        .then((data) => {
            catResult.innerHTML = `<img src="https://cataas.com/${data.url}"/>`;
        });
    }
