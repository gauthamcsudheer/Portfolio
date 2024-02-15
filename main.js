window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 40);
})

document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.querySelector('a[href="#"]');
    homeLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.querySelector('.explore').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#connect').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.querySelector('.collab').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#connect').scrollIntoView({ behavior: 'smooth', block: 'start' });
});


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('header ul li a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});


const carousel = document.querySelector('.carousel');
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');
  const slides = carousel.querySelectorAll('img');
  let currentSlide = 0;
  slides[currentSlide].classList.add('active');
  
  prevBtn.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    slides[currentSlide].classList.add('active');
  });
  
  nextBtn.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    slides[currentSlide].classList.add('active');
  });