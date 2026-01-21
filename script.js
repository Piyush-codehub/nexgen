let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
    if(i === index){
      slide.classList.add('active');
      dots[i].classList.add('active');
    }
  });
  current = index;
}

// Auto Slide every 3 seconds
setInterval(() => {
  let next = (current + 1) % slides.length;
  showSlide(next);
}, 3000);

// Dot click
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});
