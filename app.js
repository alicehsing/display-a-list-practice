// import functions and grab DOM elements
import { colorsArr } from './color-one.js';
import { renderColor } from './render-color.js';
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
    const sushiDiv = document.createElement('div');
    const sushiNameEl = document.createElement('p');
    const sushiImgEl = document.createElement('img');
    const sushiPriceEl = document.createElement('p');

    sushiDiv.classList.add('sushi');
    sushiDiv.style.backgroundColor = 'lightgrey';

    sushiNameEl.textContent = sushi.name;
    sushiImgEl.src = sushi.image;
    sushiPriceEl.textContent = sushi.price;

    sushiDiv.append(sushiNameEl, sushiImgEl, sushiPriceEl);
    sushisEl.append(sushiDiv);







    // const sushiEl = renderSushi(sushi);
    // sushisEl.append(sushiEl);


}
