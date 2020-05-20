function gra(min, max) {
    return Math.random() * (max - min) + min;
}

function typeset(selector) {
    const paragraphs = document.querySelectorAll(`${selector} p`)

    paragraphs.forEach(p => {
        let content = p.textContent;
        
        if (content === 'Narrator' || content === 'Walker') {
            p.classList.add('speaker')
        }
        p.style.left = `${gra(-10, 10)}%`
        content = content.replace(/-/g, '–')
        p.textContent = content;
    })
}

window.addEventListener('DOMContentLoaded', () => {
    typeset('.play')
})