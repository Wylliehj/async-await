//1.

async function getSingleCard(){
    let response = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    console.log(response.data)
    console.log(response.data.cards[0].value + ' of ' + response.data.cards[0].suit)
}

getSingleCard()

//2.

async function getTwoCards() {
    let response1 = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    card1 = `${response1.data.cards[0].value} of ${response1.data.cards[0].suit}`
    deckId = response1.data.deck_id

    let response2 = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    card2 = `${response2.data.cards[0].value} of ${response2.data.cards[0].suit}`
    console.log(card1)
    console.log(card2)
}

getTwoCards()

//3.

let deckId = null;
let margin = 0;

async function getDeck() {
    let response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle')
    deckId = response.data.deck_id
}


$('#get-card').on('click', async function() {
    getDeck()
    let response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    let cardIMG = response.data.cards[0].image
    $('#show-cards').append(`<img src='${cardIMG}' style='margin:${margin}px'>`)
    margin += 20;
})