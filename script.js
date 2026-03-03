  const btn = document.getElementById('discord-btn');
  const pop = document.getElementById('discord-popup');
  btn.onclick = () => pop.style.display = 'block';
  function closePopup(){ pop.style.display = 'none'; }

  const lightboxLinks = document.querySelectorAll('.lightbox');
  const overlay = document.getElementById('lightbox-overlay');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');

  lightboxLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      lightboxImg.src = this.href;
      overlay.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => overlay.style.display = 'none');
  overlay.addEventListener('click', (e) => {
    if(e.target === overlay) overlay.style.display = 'none';
  });
