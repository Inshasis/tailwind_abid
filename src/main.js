const navDialog = document.getElementById('nav-dialog');
function handleMenu() {
    navDialog.classList.toggle('hidden');
}

const initialTranslatLTR = -48*4;
const initialTranslatRTL = 36*4;


function setupIntersectionObserver(element, isLTR, speed){
    const intersectionCallback =(enteries) => {
      const isIntersecting = enteries[0].isIntersecting;
      if(isIntersecting) {
        document.addEventListener('scroll', scrollHandler);
      } else {
        document.removeEventListener('scroll', scrollHandler);

      }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    intersectionObserver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if(isLTR){
         totalTranslate = translateX + initialTranslatLTR;
        } else{
         totalTranslate = -(translateX + initialTranslatRTL);
          
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    }
}



// slider 
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide
    updateSlides();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Move to the previous slide
    updateSlides();
});

function updateSlides() {
    const offset = -currentSlide * 100; // Calculate offset based on current slide
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`; // Apply translation
}

// Optional: Auto-slide every 3 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide
    updateSlides();
}, 3000);