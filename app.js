function imgSlider(anything) {
    document.querySelector('.bottles').src = anything;
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arr');

for(let i=0; i<q.length; i++) {
    q[i].addEventListener('click', () => {
        a[i].classList.toggle('a-opened');
        arr[i].classList.toggle('arrow-rotated');
    })
}