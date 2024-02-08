const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const weed = document.querySelector('.weed')
const cardModal = document.querySelector('.modal')
const close =document.querySelector('#closes-card')
const jump = () => {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
     }, 500)
}
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const weedPostion = weed.offsetLeft

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',' ');
    console.log(marioPosition);
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = 'none';
        if( marioPosition >= 70){
            mario.style.bottom = '90px'

        }
        cardModal.classList.remove('hide')
        close.addEventListener('click',()=>{
            cardModal.classList.add('hide')
        })
        
        mario.src = 'Images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        clearInterval(loop)
    }
    if (weedPostion <= 120 && weedPostion > 0 && marioPosition < 80){
        weedPostion.style.animation = 'none';
        weedPostion.style.left = `${weedPostion}px`;
        mario.style.animation = 'none';
        if( marioPosition >= 70){
            mario.style.bottom = '90px'

        }
        cardModal.classList.remove('hide')
        close.addEventListener('click',()=>{
            cardModal.classList.add('hide')
        })
        
        mario.src = 'Images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        clearInterval(loop)
    }
}, 10);
document.addEventListener('keydown', jump)

