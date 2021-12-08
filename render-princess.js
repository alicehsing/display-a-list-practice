export function renderPrincess(princessData) {
    const princessDiv = document.createElement('div');
    const princessNameEl = document.createElement('p');
    const princessAgeEl = document.createElement('p');
    const princessImgEl = document.createElement('img');
    const princessPetEl = document.createElement('p');

    const enemyDiv = document.createElement('div');
    const enemyNameEl = document.createElement('p');
    const enemyWeaponEl = document.createElement('p');
    const enemyImageEl = document.createElement('img');

    princessDiv.classList.add('princess');
    enemyDiv.classList.add('enemy');

    princessNameEl.textContent = princessData.name;
    princessAgeEl.textContent = princessData.age;
    princessImgEl.src = princessData.image;
    princessPetEl.textContent = princessData.pet;
    enemyNameEl.textContent = princessData.enemy.name;
    enemyWeaponEl.textContent = princessData.enemy.weapon;
    enemyImageEl.src = princessData.enemy.image;

    enemyDiv.append(enemyNameEl, enemyWeaponEl, enemyImageEl);
    princessDiv.append(princessNameEl, princessAgeEl, princessImgEl, princessPetEl, enemyDiv);

    return princessDiv;
}