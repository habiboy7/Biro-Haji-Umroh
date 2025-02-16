// ! Ini event scroll navbar
document.addEventListener('scroll', function() {
  const navbar = document.getElementById('navigasi')
  if(window.scrollY > 10) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

document.addEventListener('scroll', function(){
  const navbarNav = document.getElementById('navigasi')
  if(window.scrollY > 10) {
    navbarNav.classList.add('scrolling')
  } else {
    navbarNav.classList.remove('scrolling')
  }
})

const slide = document.querySelector('#carouselSlide')
const slideWaktu = new bootstrap.Carousel(carousel, {
  interval: 2000,
  ride : 'carousel'
})

