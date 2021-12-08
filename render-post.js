export function renderPost(postData) {
    const div = document.createElement('div');
    const p = document.createElement('p');

    div.classList.add('post');
    p.textContent = `${postData.user} asks: "${postData.title}"`;
    div.append(p);

    for (let reply of postData.replies) {
        const replyEl = document.createElement('p');
        replyEl.textContent = `"${reply}"`;
        replyEl.classList.add('reply');
        div.append(replyEl);
    }

    return div;
}