function gra(min, max) {
    return Math.random() * (max - min) + min;
}

let state = {
    mouse: {
        x: 0,
        y: 0
    },
    overlay: {
        el: null,
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0
    }
}

function updateOverlay() {
    state.overlay.targetX = state.mouse.x;
    state.overlay.targetY = state.mouse.y;

    state.overlay.x += (state.overlay.targetX - state.overlay.x) * .1;
    state.overlay.y += (state.overlay.targetY - state.overlay.y) * .1;

    state.overlay.el.style.transform = `translateX(calc(${state.overlay.x}px - 50%)) translateY(calc(${state.overlay.y}px - 50%))`

    window.requestAnimationFrame(updateOverlay)
}

function typeset(selector) {
    const paragraphs = document.querySelectorAll(`${selector} p`)
    for (let i = 0; i < paragraphs.length; i++) {
        let content = paragraphs[i].textContent;
        const x = gra(-10, 10);
        paragraphs[i].style.left = `${x}%`
        if (content === 'Narrator' || content === 'Walker') {
            paragraphs[i].classList.add('speaker')
            paragraphs[i + 1].style.left = `${x}%`;
            i += 1;
        }
    }
}

function initImages() {
    const paragraphs = document.querySelectorAll(`[data-image]`)
    paragraphs.forEach(p => {
        p.addEventListener('mouseover', () => {
            state.overlay.el.style.backgroundImage = `url(${p.getAttribute('data-image')})`
            document.body.classList.add('overlay-active')
        })
        p.addEventListener('mouseout', () => {
            document.body.classList.remove('overlay-active')
        })
    })
    
    const videoParagraphs = document.querySelectorAll(`[data-video]`)
    videoParagraphs.forEach(p => {
        const v = state.overlay.el.querySelector(`#${p.getAttribute('data-id')}`)
        p.addEventListener('mouseover', () => {
            state.overlay.el.style.backgroundImage = `none`
            v.classList.add('active')
            document.body.classList.add('overlay-active')
        })
        p.addEventListener('mouseout', () => {
            v.classList.remove('active')
            document.body.classList.remove('overlay-active')
        })
    })

}

window.addEventListener('DOMContentLoaded', () => {
    typeset('.play')
    state.overlay.el = document.querySelector('.overlay-image')
    initImages()
    updateOverlay()
    window.addEventListener('mousemove', e => {
        state.mouse = {
            x: e.clientX,
            y: e.clientY,
        }
    })
})