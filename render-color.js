export function renderColor(colorData) {
    const p = document.createElement('p');
    p.classList.add('color');
    p.textContent = colorData;

    if (colorData === 'red') {
        p.style.backgroundColor = 'red';
    }

    if (colorData === 'orange') {
        p.style.backgroundColor = 'orange';
    }

    if (colorData === 'yellow') {
        p.style.backgroundColor = 'yellow';
    }

    if (colorData === 'green') {
        p.style.backgroundColor = 'lightgreen';
    }

    if (colorData === 'blue') {
        p.style.backgroundColor = 'lightblue';
    }

    return p;
}