
let deckOfCards = {
   "diamonds": [
    {"as": {"img": "img/diamonds/as.svg"}}, 
    {"two": {"img": "img/diamonds/2.svg"}}, 
    {"three": {"img": "img/diamonds/3.svg"}}, 
    {"four": {"img": "img/diamonds/4.svg"}}, 
    {"five": {"img": "img/diamonds/5.svg"}},
    {"six": {"img": "img/diamonds/6.svg"}},
    {"seven": {"img": "img/diamonds/7.svg"}},
    {"eight": {"img": "img/diamonds/8.svg"}},
    {"nine": {"img": "img/diamonds/9.svg"}},
    {"ten": {"img": "img/diamonds/10.svg"}},
    {"J": {"img": "img/diamonds/j.svg"}},
    {"Q": {"img": "img/diamonds/q.svg"}},
    {"K": {"img": "img/diamonds/k.svg"}}
    ],

   "hearts": [
    {"as": {"img": "img/hearts/as.svg"}}, 
    {"two": {"img": "img/hearts/2.svg"}}, 
    {"three": {"img": "img/hearts/3.svg"}}, 
    {"four": {"img": "img/hearts/4.svg"}}, 
    {"five": {"img": "img/hearts/5.svg"}},
    {"six": {"img": "img/hearts/6.svg"}},
    {"seven": {"img": "img/hearts/7.svg"}},
    {"eight": {"img": "img/hearts/8.svg"}},
    {"nine": {"img": "img/hearts/9.svg"}},
    {"ten": {"img": "img/hearts/10.svg"}},
    {"J": {"img": "img/hearts/j.svg"}},
    {"Q": {"img": "img/hearts/q.svg"}},
    {"K": {"img": "img/hearts/k.svg"}}
    ],

   "spades": [
    {"as": {"img": "img/spades/as.svg"}}, 
    {"two": {"img": "img/spades/2.svg"}}, 
    {"three": {"img": "img/spades/3.svg"}}, 
    {"four": {"img": "img/spades/4.svg"}}, 
    {"five": {"img": "img/spades/5.svg"}},
    {"six": {"img": "img/spades/6.svg"}},
    {"seven": {"img": "img/spades/7.svg"}},
    {"eight": {"img": "img/spades/8.svg"}},
    {"nine": {"img": "img/spades/9.svg"}},
    {"ten": {"img": "img/spades/10.svg"}},
    {"J": {"img": "img/spades/j.svg"}},
    {"Q": {"img": "img/spades/q.svg"}},
    {"K": {"img": "img/spades/k.svg"}}
    ],

   "clubs": [
    {"as": {"img": "img/clubs/as.svg"}}, 
    {"two": {"img": "img/clubs/2.svg"}}, 
    {"three": {"img": "img/clubs/3.svg"}}, 
    {"four": {"img": "img/clubs/4.svg"}}, 
    {"five": {"img": "img/clubs/5.svg"}},
    {"six": {"img": "img/clubs/6.svg"}},
    {"seven": {"img": "img/clubs/7.svg"}},
    {"eight": {"img": "img/clubs/8.svg"}},
    {"nine": {"img": "img/clubs/9.svg"}},
    {"ten": {"img": "img/clubs/10.svg"}},
    {"J": {"img": "img/clubs/j.svg"}},
    {"Q": {"img": "img/clubs/q.svg"}},
    {"K": {"img": "img/clubs/k.svg"}}
    ],
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

    let card = Object.keys(deckOfCards[suit][number]);
    let gameTable = document.querySelector(".game-table");
    let img = document.createElement("img");

    img.src = deckOfCards[suit][number][card].img;
    gameTable.appendChild(img);

    console.log("you get a: " + card + " of " + suit);
    deckOfCards[suit].splice(number, 1);
});
