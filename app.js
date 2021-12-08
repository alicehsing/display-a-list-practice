// import functions and grab DOM elements
import { colorsArr } from './color-data.js';
import { renderColor } from './render-color.js';
import { renderSushi } from './render-sushi.js';
import { sushisArr } from './sushi-data.js';
import { princessArr } from './princess-data.js';
import { renderPrincess } from './render-princess.js';
import { postsArr } from './post-data.js';
import { renderPost } from './render-post.js';

//grab a div
const colorsEl = document.querySelector('#colors-list');
const sushisEl = document.querySelector('#sushis-list');
const princessesEl = document.querySelector('#princesses-list');
const postsEl = document.querySelector('#posts-list');

// loop through color array
for (let color of colorsArr) {
    const colorEl = renderColor(color);

    colorsEl.append(colorEl);
}
// loop through sushi array
for (let sushi of sushisArr) {
    const sushiEl = renderSushi(sushi);

    sushisEl.append(sushiEl);
}
// loop through princesses array
for (let princess of princessArr) {
    const princessEl = renderPrincess(princess);

    princessesEl.append(princessEl);
}
// loop through posts array
for (let post of postsArr) {
    const postEl = renderPost(post);
    postsEl.append(postEl);
}