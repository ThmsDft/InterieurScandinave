const imgContainer = document.querySelector('.main')
const mainImg = document.querySelector('.main img')

const otherImg = document.querySelectorAll('.photos div figure img')

otherImg.forEach(img => img.addEventListener('click', ()=>{
    mainImg.src = img.src
}))


imgContainer.addEventListener('mousemove', (e)=>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    // console.log(x,y)
     
    mainImg.style.transformOrigin = `${x}px ${y}px`
    mainImg.style.transform = 'scale(2.5)'
})

imgContainer.addEventListener('mouseleave', ()=>{
    mainImg.style.transformOrigin = 'center'
    mainImg.style.transform = 'scale(1)'
})

