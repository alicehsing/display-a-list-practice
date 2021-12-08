export function renderSushi(sushiData) {

    const div = document.createElement('div');
    const pName = document.createElement('p');
    const img = document.createElement('img');
    const pPrice = document.createElement('p');

    div.classList.add('sushi');
    div.style.backgroundColor = 'lightgrey';

    pName.textContent = sushiData.name;
    img.src = sushiData.image;
    pPrice.textContent = sushiData.price;
    
    div.append(pName, img, pPrice);
    return div;
}