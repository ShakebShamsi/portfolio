/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button');
      modalClose = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */
const linkWork =document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
   loop: true,
   grabCursor: true,
   spaceBetween: 30,
   slidesPerView: 1, // Default for mobile/small screens
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
     768: {
       slidesPerView: 2, // Show 2 cards on tablet and up
     },
     1200: {
       slidesPerView: 2, // Keep 2 even on large screens
     }
   }
  });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach((current, idx) => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id');

        let navLink = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');
        if (!navLink) return;

        // Always highlight #contact when scrolled past its top
        if (sectionId === 'contact') {
            if (scrollY > sectionTop - 100) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
            return;
        }

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link');
        } else {
            navLink.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive)

/*=============== COLOR THEME SWITCHER ===============*/
const gearToggle = document.getElementById('gearToggle');
const themeContainer = document.querySelector('.theme-container');

gearToggle.addEventListener('click', () => {
   themeContainer.classList.toggle('active');
});

// Save selected hue & apply
const savedHue = localStorage.getItem('selectedHue');
if (savedHue) {
  document.documentElement.style.setProperty('--first-hue', savedHue);
}

document.querySelectorAll('.color').forEach(color => {
  color.addEventListener('click', () => {
    const hue = color.getAttribute('data-hue');
    document.documentElement.style.setProperty('--first-hue', hue);
    localStorage.setItem('selectedHue', hue);
  });
});

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
   // reset: true,//
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay:700})
sr.reveal(`.home__social, .home__scroll`, {delay:900, origin:'bottom`'})


var testimonialSwiper = new Swiper(".testimonial__container", {
   loop: true,
   grabCursor: true,
   spaceBetween: 30,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   autoplay: {
      delay: 2000, // 2 seconds
      disableOnInteraction: false, // keep autoplay even when user interacts
    },
   breakpoints: {
     568: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 2,
     },
     0: {
       slidesPerView: 1,
     },
   },
 });
