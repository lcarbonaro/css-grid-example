const catResult = document.getElementById("cat-result");
const catButton = document.getElementById("catButton");

dogButton.addEventListener("click", getRandomCat);

function getRandomCat() {
    fetch("https://cataas.com/cat")
        .then((res) => res.json())
        .then((data) => {
            catResult.innerHTML = `<img src="${data.message}"/>`;
        });
    }
