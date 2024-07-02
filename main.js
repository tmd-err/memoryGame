document.addEventListener("DOMContentLoaded", () => {
    const cards = [
        { name: "sanji", src: "img/sanji.jpeg"},
        { name: "minions", src: "img/minions.png"},
        { name: "toji", src: "img/toji.jpeg"},
        { name: "shikamaro", src: "img/shikamaro.jpeg"},
        { name: "simp", src: "img/simp.jpeg"},
        { name: "ping", src: "img/ping.jpeg"},
        { name: "sanji", src: "img/sanji.jpeg"},
        { name: "minions", src: "img/minions.png"},
        { name: "toji", src: "img/toji.jpeg"},
        { name: "shikamaro", src: "img/shikamaro.jpeg"},
        { name: "simp", src: "img/simp.jpeg"},
        { name: "ping", src: "img/ping.jpeg"}
    ]
    cards.sort(() => 0.5 - Math.random());
    const container = document.querySelector(".container");
    const score = document.getElementById("score");
    let points = 0;
    let selectedCards = [];
    let idSelectedCard = [];
    let matchCards = [];

    function displayImg() {
        for (let i = 0 ; i<cards.length ;i++) {
            let img = document.createElement("img");
            img.src = "img/check.jpeg";
            img.setAttribute("img-id", i);
            img.addEventListener("click", turnCard);
            container.appendChild(img);
        }
    }
    displayImg();

    function Match() {
        var allCards = document.querySelectorAll("img");
        const firstSelected = idSelectedCard[0];
        const secondSelected = idSelectedCard[1];

        if (selectedCards[0] == selectedCards[1]) {
            allCards[firstSelected].src = "img/empty.jpeg";
            allCards[secondSelected].src = "img/empty.jpeg";
            allCards[firstSelected].setAttribute("img-id" , "") ;
            allCards[secondSelected].setAttribute("img-id" , "") ;
            matchCards.push(selectedCards);
            points += 10;
            score.innerText = points;
        } else {
            allCards[firstSelected].src = "img/check.jpeg";
            allCards[secondSelected].src = "img/check.jpeg";
        }

        selectedCards = [];
        idSelectedCard = [];

        if (matchCards.length == cards.length / 2) {
            container.innerText = "" ;
            var h2 = document.querySelector("h2") ;
            h2.classList = "go-down" ;
            h2.textContent ="Congratulations ! You Win "
        }
    }

    function turnCard() {
        let cardId = this.getAttribute('img-id');

        // Prevent clicking the same card twice
        if (idSelectedCard.includes(cardId)) return;

        selectedCards.push(cards[cardId].name);
        idSelectedCard.push(cardId);
        this.src = cards[cardId].src;

        if (selectedCards.length === 2) {
            setTimeout(Match, 500);
        }
    }
});
