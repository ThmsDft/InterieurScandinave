const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('header nav ul')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

document.querySelectorAll('header nav ul li').forEach(link => link.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}))

const filter = document.querySelector('.filter')
const body = document.body
let lastScroll = 0

window.addEventListener('scroll', ()=>{
    const currentScroll = window.pageYOffset

    console.log(window.pageYOffset)

    //le 70 pour que la navbar ne soit pas cachée tout de suite surtout sur l'iphone
    //lors du scroll-up
    if (currentScroll <= 70){ 
        body.classList.remove('scroll-up')
    }

    if (currentScroll > lastScroll && !body.classList.contains('scroll-down') && currentScroll >= 70){
        body.classList.remove('scroll-up')
        body.classList.add('scroll-down')
        filter.classList.add('down')
        filter.classList.remove('up')
    }

    if (currentScroll < lastScroll && body.classList.contains('scroll-down')){
        body.classList.remove('scroll-down')
        body.classList.add('scroll-up')
        filter.classList.add('up')
        filter.classList.remove('down')
    }

    lastScroll = currentScroll
})
