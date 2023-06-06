const FAV_NUM = 7
const URL = 'http://numbersapi.com/'

//1.
async function getFavNum(num) {
    let response = await axios.get(`${URL}${FAV_NUM}`);
    console.log(response.data);
}

getFavNum(FAV_NUM)

//2.

let numbers = [1, 3, 6, 8];

async function multipleNumbers(arr) {
    let response = await axios.get(`${URL}${arr}`)
    for(let num of arr){
        $('#fav-nums').append(`<li>${response.data[num]}</li>`)
    }
}

multipleNumbers(numbers)

//3.

async function multipleFacts(num) {
    let promises = [];
    let responses = [];
    for(let i = 1; i < 5; i++){
        promises.push(axios.get(`${URL}${num}`))
    }
    for(let promise of promises){
        responses.push(await promise)
    }
    for(let response of responses){
        $('#my-num-facts').append(`<li>${response.data}</li>`)
    }  
}

multipleFacts(FAV_NUM)