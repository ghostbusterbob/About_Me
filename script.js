// =======================
// DISCORD POPUP
// =======================
const btn = document.getElementById('discord-btn');
const pop = document.getElementById('discord-popup');

if (btn && pop) {
  btn.onclick = () => pop.style.display = 'block';
}

function closePopup() {
  if (pop) pop.style.display = 'none';
}


// =======================
// LIGHTBOX
// =======================
const lightboxLinks = document.querySelectorAll('.lightbox');
const overlay = document.getElementById('lightbox-overlay');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('lightbox-close');

lightboxLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    lightboxImg.src = this.href;
    overlay.style.display = 'flex';
  });
});

if (closeBtn) {
  closeBtn.addEventListener('click', () => overlay.style.display = 'none');
}

if (overlay) {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.style.display = 'none';
  });
}


// =======================
// CAROUSEL
// =======================
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel .project-card');
const nextBtn = document.querySelector('.carousel .next');
const prevBtn = document.querySelector('.carousel .prev');

let index = 0;

function updateCarousel() {
  if (track) {
    track.style.transform = `translateX(-${index * 100}%)`;
  }
}

if (nextBtn && prevBtn) {

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  });

}

tsParticles.load("tsparticles", {
  particles: {
    number: { value: 50 },
    size: { value: 2 },
    color: { value: "#4a90e2" },
    move: { enable: true, speed: 1 },
  },
});


// =======================
// OPTIONAL AUTO-SLIDE
// =======================
setInterval(() => {
  if (slides.length > 0) {
    index = (index + 1) % slides.length;
    updateCarousel();
  }
}, 5000);