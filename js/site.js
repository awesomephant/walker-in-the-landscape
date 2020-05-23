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

    state.overlay.el.style.transform = `translateX(${state.overlay.x}px) translateY(${state.overlay.y}px)`

    window.requestAnimationFrame(updateOverlay)
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

function initImages(){
    const paragraphs = document.querySelectorAll(`[data-image]`)
    paragraphs.forEach(p => {
        p.addEventListener('mouseover', () => {
            document.body.classList.add('overlay-active')
        })
        p.addEventListener('mouseout', () => {
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