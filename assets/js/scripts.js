const person = document.querySelector('.person');
const pipe = document.querySelector('.pipe');
const restart = document.querySelector('.game-board');

const jump = () => {
    person.classList.add('jump')

    setTimeout(() => {

        person.classList.remove('jump')

    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const personPosition = +getComputedStyle(person).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && personPosition < 55 ) {
        person.src = 'assets/img/sonicfim.png'
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        person.style.animation = 'none';
        person.style.bottom = `${personPosition}px`

        restart.classList.add('try-again')
        
    }

    

}, 10);

document.addEventListener('keypress', jump
);