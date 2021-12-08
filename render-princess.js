export function renderPrincess(princessData) {
    const princessDiv = document.createElement('div');
    const princessNameEl = document.createElement('p');
    const princessAgeEl = document.createElement('p');
    const princessImgEl = document.createElement('img');
    const princessFriendEl = document.createElement('p');

    const enemyDiv = document.createElement('div');
    const enemyNameEl = document.createElement('p');
    const enemyWeaponEl = document.createElement('p');
    const enemyImageEl = document.createElement('img');

    princessDiv.classList.add('princess');
    enemyDiv.classList.add('enemy');

    princessNameEl.textContent = `Name: ${princessData.name}`;
    princessAgeEl.textContent = `Age: ${princessData.age}`;
    princessImgEl.src = princessData.image;
    princessFriendEl.textContent = `Friend: ${princessData.friend}`;
    enemyNameEl.textContent = `Enemy: ${princessData.enemy.name}`;
    enemyWeaponEl.textContent = `Weapon: ${princessData.enemy.weapon}`;
    enemyImageEl.src = princessData.enemy.image;

    enemyDiv.append(enemyNameEl, enemyWeaponEl, enemyImageEl);
    princessDiv.append(princessNameEl, princessAgeEl, princessImgEl, princessFriendEl, enemyDiv);

    return princessDiv;
}