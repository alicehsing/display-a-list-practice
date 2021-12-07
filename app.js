// import functions and grab DOM elements
import { colorsArr } from './color-one.js';
import { renderColor } from './render-color.js';
import { renderSushi } from './render-sushi.js';
import { sushis } from './sushi-two.js';

//grab a div
const colorsEl = document.querySelector('#colors-list');
const sushisEl = document.querySelector('#sushis-list');

// loop through an array
for (let color of colorsArr) {
    const colorEl = renderColor(color);

    colorsEl.append(colorEl);
}


for (let sushi of sushis) {
    const sushiEl = renderSushi(sushi);

    sushisEl.append(sushiEl);
}

