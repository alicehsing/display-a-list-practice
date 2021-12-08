// import functions and grab DOM elements
import { colorsArr } from './color-data.js';
import { renderColor } from './render-color.js';
import { renderSushi } from './render-sushi.js';
import { sushisArr } from './sushi-data.js';
import { princessArr } from './princess-data.js';
import { renderPrincess } from './render-princess.js';

//grab a div
const colorsEl = document.querySelector('#colors-list');
const sushisEl = document.querySelector('#sushis-list');
const princessesEl = document.querySelector('#princesses-list');

// loop through an array
for (let color of colorsArr) {
    const colorEl = renderColor(color);

    colorsEl.append(colorEl);
}


for (let sushi of sushisArr) {
    const sushiEl = renderSushi(sushi);

    sushisEl.append(sushiEl);
}

for (let princess of princessArr) {
    const princessEl = renderPrincess(princess);

    princessesEl.append(princessEl);
}
