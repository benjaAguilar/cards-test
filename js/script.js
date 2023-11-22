
let deckOfCards = {
   "diamonds": ["as", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "J", "Q", "K"],
   "hearts": ["as", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "J", "Q", "K"],
   "spades": ["as", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "J", "Q", "K"],
   "clubs": ["as", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "J", "Q", "K"],
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
    let suit;
    let number;

    do{
        suit = getSuit();
        number = getRandomNum(0, deckOfCards[suit].length - 1);

        if(deckOfCards.diamonds.length &&
            deckOfCards.hearts.length &&
            deckOfCards.spades.length && 
            deckOfCards.clubs.length === 0){
                getCard.disabled = "true";
                break;
            }

    } while(deckOfCards[suit].length === 0);

    console.log("you get a: " + deckOfCards[suit][number] + " of " + suit);
    deckOfCards[suit].splice(number, 1);
});
