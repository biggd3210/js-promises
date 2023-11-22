let favNumber = 7;
let baseURL = 'http://numbersapi.com';

// 1 
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
    console.log(data);
})

// 2 
let favNums = [3,4,5,9,12]
$.getJSON(`${baseURL}/${favNums}?json`).then(data => {
    console.log(data);
    for (key in data) {
        let new_div = $('<div>');
        new_div.attr('id', key);
        new_div.text(data[key]);
        $('body').append(new_div);
        console.log(`Key is ${key} and value is ${data[key]}`)
    }
})

// 3
Promise.all(
    Array.from({ length : 4 }, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`);
    })
).then(facets => {
    facets.forEach(data => $("body").append(`<p>${data.text}</p>`));
})
