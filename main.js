window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 40);
  })

  var typed = new Typed('.auto-type', {
    strings: ["web developer.", "teacher.", "UI designer."],
    typeSpeed:100,
    backSpeed: 100,
    loop: true
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

  const menuBtn = document.querySelector('.menuBtn');
  const closeBtn = document.querySelector('.closeBtn');
  const navMenu = document.querySelector('header ul');

  // Toggle navigation menu on click of menu button
  menuBtn.addEventListener('click', () => {
    navMenu.classList.add('show');
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
  });

  // Hide navigation menu on click of close button
  closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('show');
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'block';
  });