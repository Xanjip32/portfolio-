(() => {
  const hero = document.getElementById('home');
  const heroCard = hero ? hero.querySelector('.scroll-fade') : null;
  const glow = document.getElementById('hero-glow');
  if (!hero) return;

  // ── Parallax background ──
  let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    targetX = x * 20;
    targetY = y * 20;
  });
  hero.addEventListener('mouseleave', () => { targetX = 0; targetY = 0; });

  function tickParallax() {
    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;
    hero.style.backgroundPosition = `calc(50% + ${currentX}px) calc(15% + ${currentY}px)`;
    requestAnimationFrame(tickParallax);
  }
  tickParallax();

  // ── Mouse-following glow ──
  if (glow) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.opacity = '1';
      glow.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,107,87,0.14), transparent 60%)`;
    });
    hero.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
  }

  // ── Entrance animations + typing effect ──
  if (heroCard && typeof anime !== 'undefined') {
    const greeting = heroCard.querySelector('[data-i18n="home.greeting"]');
    const name = heroCard.querySelector('h1');
    const title = heroCard.querySelector('p');
    const buttons = heroCard.querySelector('.mt-11');

    [greeting, title, buttons].forEach(el => {
      if (el) { el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; }
    });

    // Hide name initially — we'll type it
    const fullName = name ? name.textContent.trim() : '';
    if (name) { name.innerHTML = '<span class="typing-cursor">|</span>'; name.style.opacity = '1'; }

    const tl = anime.timeline({ delay: 300 });

    if (greeting) {
      tl.add({ targets: greeting, opacity: [0, 1], translateY: [20, 0], duration: 600, easing: 'easeOutExpo' });
    }

    // Typing effect for name
    if (name && fullName) {
      tl.add({
        targets: {},
        duration: fullName.length * 70,
        begin: () => {
          let i = 0;
          const cursor = name.querySelector('.typing-cursor');
          const typeInterval = setInterval(() => {
            if (i < fullName.length) {
              const ch = fullName[i] === ' ' ? '\u00A0' : fullName[i];
              cursor.insertAdjacentText('beforebegin', ch);
              i++;
            } else {
              clearInterval(typeInterval);
              // Blink cursor then remove
              setTimeout(() => { cursor.style.animation = 'none'; cursor.style.opacity = '0'; }, 800);
            }
          }, 70);
        }
      }, '-=200');
    }

    if (title) {
      tl.add({ targets: title, opacity: [0, 1], translateY: [20, 0], duration: 800, easing: 'easeOutExpo' }, '+=200');
    }
    if (buttons) {
      tl.add({ targets: buttons, opacity: [0, 1], translateY: [20, 0], duration: 600, easing: 'easeOutExpo' }, '-=400');
    }
  }
})();
