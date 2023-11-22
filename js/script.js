let suit;
let number;

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

getCard.addEventListener("click", function(){
    alert("hello");
});
