const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const expertiseMenu = document.querySelector('#expertise-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    expertiseMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    expertiseMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);


// /*==================== SHOW MENU ====================*/
// const navMenu = document.getElementById('nav-menu'),
//       navToggle = document.getElementById('nav-toggle'),
//       navClose = document.getElementById('nav-close')

// /*===== MENU SHOW =====*/
// /* Validate if constant exists */
// if(navToggle){
//     navToggle.addEventListener('click', () =>{
//         navMenu.classList.add('show-menu')
//     })
// }

// /*===== MENU HIDDEN =====*/
// /* Validate if constant exists */
// if(navClose){
//     navClose.addEventListener('click', () =>{
//         navMenu.classList.remove('show-menu')
//     })
// }

// /*==================== REMOVE MENU MOBILE ====================*/
// const navLink = document.querySelectorAll('.nav__link')

// function linkAction(){
//     const navMenu = document.getElementById('nav-menu')
//     // When we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))


// /*==================== CHANGE BACKGROUND HEADER ====================*/
// function scrollHeader(){
//     const header = document.getElementById('header')
//     // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
//     if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
// }
// window.addEventListener('scroll', scrollHeader)


/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})

/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile.pause(); 
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)

/*==================== VIDEO2 ====================*/
const videoFile2 = document.getElementById('video-file2'),
      videoButton2 = document.getElementById('video-button2'),
      videoIcon2 = document.getElementById('video-icon2')

function playPause2(){ 
    if (videoFile2.paused){
        // Play video
        videoFile2.play()
        // We change the icon
        videoIcon2.classList.add('ri-pause-mini-line')
        videoIcon2.classList.remove('ri-play-mini-line')
    }
    else {
        // Pause video
        videoFile2.pause(); 
        // We change the icon
        videoIcon2.classList.remove('ri-pause-mini-line')
        videoIcon2.classList.add('ri-play-mini-line')

    }
}
videoButton2.addEventListener('click', playPause2)

function finalVideo2(){
    // Video ends, icon change
    videoIcon2.classList.remove('ri-pause-mini-line')
    videoIcon2.classList.add('ri-play-mini-line')
}
// ended, when the video ends
videoFile2.addEventListener('ended', finalVideo2)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2000,
    // reset: true,
})


sr.reveal(`.home__data, .home__social-link, .home__info,
           .experience__data, .experience__overlay,
           .place__card,`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay, 
           .video__content,
           .video__content2,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
})

//Variables

var accordion = document.querySelector('.accordion');
var items = accordion.querySelectorAll('li');
var questions = accordion.querySelectorAll('.question');

//Funtions

function toggleAccordion() {
  var thisItem = this.parentNode;
  items.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.toggle('open');
      return;
    }
    item.classList.remove('open');
  });
}

//Event Listeners

questions.forEach(question => question.addEventListener('click', toggleAccordion));

  /*===== MIXITUP FILTER PORTFOLIO =====*/ 
  var mixer = mixitup(".portfolio__container", {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});

/* Link active portfolio */ 
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l=> l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l=> l.addEventListener('click', activePortfolio))

let text = document.getElementById('text');
let layer1 = document.getElementById('layer1');
let layer2 = document.getElementById('layer2');
let layer3 = document.getElementById('layer3');
let layer4 = document.getElementById('layer4');
let layer5 = document.getElementById('layer5');


window.addEventListener ('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    layer2.style.left = value * 0.3 + 'px';
    layer1.style.left = value * -0.5 + 'px';
    layer4.style.left = value * 0.3 + 'px';
    layer5.style.left = value * 0.3 + 'px';
    layer3.style.left = value * -0.3 + 'px';
    layer2.style.top = value * 0.5 + 'px';
    layer1.style.top = value * 1 + 'px';
    layer3.style.top = value * 0.5 + 'px';

});


let text2 = document.getElementById('text2');
let layer12 = document.getElementById('layer1-2');
let layer22 = document.getElementById('layer2-2');
let layer32 = document.getElementById('layer3-2');
let layer42 = document.getElementById('layer4-2');
let layer52 = document.getElementById('layer5-2');


window.addEventListener ('scroll', () => {
    let value = window.scrollY;

    text2.style.marginTop = value * 2.5 + 'px';
    layer22.style.left = value * 0.3 + 'px';
    layer12.style.left = value * -0.5 + 'px';
    layer42.style.left = value * 0.3 + 'px';
    layer52.style.left = value * 0.3 + 'px';
    layer32.style.left = value * -0.3 + 'px';
    layer22.style.top = value * 0.5 + 'px';
    layer12.style.top = value * 1 + 'px';
    layer32.style.top = value * 0.5 + 'px';

});
