const favNum = 7;
const baseURL = 'http://numbersapi.com';

// 1.
async function getFavNumFact() {
    let res = await $.getJSON(`${baseURL}/${favNum}?json`);
    console.log(res);
}

getFavNumFact();

// 2.
let favNums = [1,2,3,4,10];
async function getManyNumFacts() {
    let data = await $.getJSON(`${baseURL}/${favNums}?json`);
    console.log(data);
    for (key in data) {
        let new_div = $('<div>');
        new_div.attr('id', key);
        new_div.text(data[key]);
        $('body').append(new_div);
        console.log(`Key is ${key} and value is ${data[key]}`)
    }
}

getManyNumFacts();

// 3. 
async function fourFactsOfFavNum() {
    facts = [];
    for (let i = 0; i < 4; i++) {
        let data = await $.getJSON(`${baseURL}/${favNum}?json`);
        facts.push(data);
    }
    facts.forEach(data => $('body').append(`<p>${data.text}</p>`))
};

fourFactsOfFavNum();