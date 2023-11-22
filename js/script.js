
let deckOfCards = {
   "diamonds": ["as", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "j", "q", "k"],
   "hearts": ["as", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "j", "q", "k"],
   "spades": ["as", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "j", "q", "k"],
   "clubs": ["as", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "j", "q", "k"],
}

let getCard = document.querySelector("#get-card");

function getRandomNum(min, max){
    return Math.floor(Math.random() * max) + min;
}

function getSuit(){
    let suit = getRandomNum(1, 4);

    switch (suit){
        case 1:
            suit = "diamonds"
        break;
        case 2:
            suit = "hearts"
        break;
        case 3:
            suit = "spades"
        break;
        case 4:
            suit = "clubs"
        break;
    }
    return suit;
}

getCard.addEventListener("click", function(){
    
});
