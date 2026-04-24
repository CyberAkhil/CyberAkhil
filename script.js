/* ═══════════════════════════════════════
   CYBERAKHIL PORTFOLIO — script.js
   Author: Nikhil Gumasta
   ═══════════════════════════════════════ */

'use strict';

/* ════════════════════════════════════════
   DATA
════════════════════════════════════════ */
const SKILLS = [
  {
    icon: '🌐', name: 'Web Development', level: 80,
    desc: 'Building responsive, modern web interfaces with clean code.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React']
  },
  {
    icon: '🐍', name: 'Programming', level: 75,
    desc: 'Writing efficient algorithms and solving real-world problems.',
    tags: ['Python', 'C/C++', 'Java', 'Bash']
  },
  {
    icon: '🔐', name: 'Cybersecurity', level: 65,
    desc: 'Understanding attack surfaces and securing digital systems.',
    tags: ['Linux', 'Networking', 'CTF', 'Kali']
  },
  {
    icon: '🛠️', name: 'Dev Tools', level: 78,
    desc: 'Professional workflow with industry-standard tools.',
    tags: ['Git', 'GitHub', 'VS Code', 'Terminal']
  },
  {
    icon: '🗄️', name: 'Backend & DB', level: 60,
    desc: 'Server-side logic and database design fundamentals.',
    tags: ['Node.js', 'MySQL', 'MongoDB', 'REST API']
  },
  {
    icon: '🤝', name: 'Open Source', level: 72,
    desc: 'Contributing to the global developer community.',
    tags: ['GitHub PRs', 'Documentation', 'JSON', 'Issues']
  },
  {
    icon: '📡', name: 'Networking', level: 58,
    desc: 'Understanding protocols, topologies and packet analysis.',
    tags: ['TCP/IP', 'DNS', 'HTTP/S', 'Wireshark']
  },
  {
    icon: '🎨', name: 'UI/UX Design', level: 65,
    desc: 'Designing user-friendly interfaces with aesthetic precision.',
    tags: ['Figma', 'Responsive', 'Accessibility', 'CSS Animations']
  },
];

const FEATURED_PROJECTS = [
  {
    num: '01',
    tag: 'PORTFOLIO · LIVE',
    title: 'CYBERAKHIL PORTFOLIO',
    desc: 'A dark hacker-themed personal portfolio with matrix rain, terminal UI, smooth animations, and waterfall effects. Built from scratch with pure HTML, CSS & JS.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    links: [
      { text: '↗ LIVE SITE', href: 'https://cyberakhil.github.io' },
      { text: '⌥ GITHUB', href: 'https://github.com/CyberAkhil' }
    ],
    visual: [
      '> Rendering portfolio...',
      '> Matrix rain: ON',
      '> Animations: ON',
      '> Domain: nikhilg.is-a.dev',
      '> Status: LIVE ✓'
    ]
  },
  {
    num: '02',
    tag: 'OPEN SOURCE · MERGED',
    title: 'IS-A.DEV CONTRIBUTION',
    desc: 'Successfully registered nikhilg.is-a.dev through open-source community PR on is-a-dev/register. Passed CI/CD tests in 23s and got merged into the official registry.',
    tags: ['JSON', 'Git', 'GitHub Actions', 'CI/CD'],
    links: [
      { text: '↗ VIEW PR', href: 'https://github.com/is-a-dev/register/pull/36887' }
    ],
    visual: [
      '> git clone is-a-dev/register',
      '> vim domains/nikhilg.json',
      '> git commit -m "Add nikhilg"',
      '> gh pr create',
      '> CI Tests: PASSED ✓ (23s)',
      '> Status: MERGED ✓'
    ]
  },
  {
    num: '03',
    tag: 'LEARNING · IN PROGRESS',
    title: 'CTF CHALLENGES',
    desc: 'Actively solving Capture The Flag challenges to sharpen cybersecurity skills. Exploring web exploitation, cryptography, reverse engineering, and forensics.',
    tags: ['Python', 'Linux', 'Cryptography', 'Web Exploits'],
    links: [
      { text: '⌥ GITHUB', href: 'https://github.com/CyberAkhil' }
    ],
    visual: [
      '> nc challenge.ctf.io 1337',
      '> $ python exploit.py',
      '> [*] Bypassing filters...',
      '> [+] Shell obtained!',
      '> $ cat flag.txt',
      '> CTF{n1kh1l_1s_l33t} ✓'
    ]
  }
];

const PROJECTS_GRID = [
  {
    num: 'PROJECT_01',
    name: 'PORTFOLIO WEBSITE',
    desc: 'Dark hacker-themed portfolio with matrix rain, custom cursor, terminal UI and smooth animations.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [{ text: '↗ LIVE', href: 'https://cyberakhil.github.io' }, { text: '⌥ CODE', href: 'https://github.com/CyberAkhil' }]
  },
  {
    num: 'PROJECT_02',
    name: 'IS-A.DEV DOMAIN',
    desc: 'Open-source contribution registering nikhilg.is-a.dev. PR submitted, CI passed, merged successfully.',
    tags: ['JSON', 'Git', 'Open Source'],
    links: [{ text: '↗ VIEW PR', href: 'https://github.com/is-a-dev/register/pull/36887' }]
  },
  {
    num: 'PROJECT_03',
    name: 'CS/IT STUDY NOTES',
    desc: 'Organized repository of CS/IT subject notes, programs, and resources covering DSA, DBMS, OS, Networks.',
    tags: ['Markdown', 'GitHub', 'Docs'],
    links: [{ text: '⌥ GITHUB', href: 'https://github.com/CyberAkhil' }]
  },
  {
    num: 'PROJECT_04',
    name: 'CTF SOLUTIONS',
    desc: 'Collection of CTF challenge writeups and exploit scripts. Covering web, crypto, forensics categories.',
    tags: ['Python', 'Linux', 'Security'],
    links: [{ text: '⌥ GITHUB', href: 'https://github.com/CyberAkhil' }]
  },
  {
    num: 'PROJECT_05',
    name: 'MORE COMING SOON',
    desc: 'Always building. New projects in web development and cybersecurity are currently in progress. Stay tuned!',
    tags: ['In Progress', '...'],
    links: [{ text: '⌥ FOLLOW', href: 'https://github.com/CyberAkhil' }]
  }
];

const ACHIEVEMENTS = [
  {
    icon: '🌐', badge: 'OPEN SOURCE',
    title: 'CUSTOM DEVELOPER DOMAIN — nikhilg.is-a.dev',
    desc: 'Registered through open-source community PR. Passed CI/CD tests in 23s and merged into the official is-a-dev registry.'
  },
  {
    icon: '🎓', badge: 'EDUCATION',
    title: 'CS/IT STUDENT — ACTIVE LEARNER',
    desc: 'Pursuing Computer Science / IT degree. Strong fundamentals in DSA, OS, DBMS, Computer Networks and Web Technologies.'
  },
  {
    icon: '🐙', badge: 'GITHUB',
    title: 'ACTIVE GITHUB CONTRIBUTOR',
    desc: 'Multiple repositories, open-source PRs, and public code for the developer community. Building in public.'
  },
  {
    icon: '⚡', badge: 'DEVOPS',
    title: 'SELF-HOSTED ON GITHUB PAGES',
    desc: 'Deployed a fully custom portfolio on GitHub Pages — zero cost, full control, linked to personal developer domain.'
  },
  {
    icon: '🔐', badge: 'SECURITY',
    title: 'ETHICAL HACKING JOURNEY',
    desc: 'Building knowledge in cybersecurity, Linux, networking, and ethical hacking. Solving CTF challenges and studying security tools.'
  },
  {
    icon: '🚀', badge: 'MINDSET',
    title: 'BUILDER MINDSET',
    desc: 'Strong belief in learning by doing. Every project is an opportunity to grow. Currently leveling up every day.'
  }
];

const TERMINAL_LINES = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'Nikhil Gumasta / CyberAkhil' },
  { type: 'gap' },
  { type: 'cmd', text: 'cat about.json' },
  { type: 'out', text: '{ "role": "CS/IT Student" }' },
  { type: 'out', text: '{ "location": "India" }' },
  { type: 'out', text: '{ "domain": "nikhilg.is-a.dev" }' },
  { type: 'out', text: '{ "github": "@CyberAkhil" }' },
  { type: 'out', text: '{ "focus": "Web Dev + Security" }' },
  { type: 'gap' },
  { type: 'cmd', text: 'echo $STATUS' },
  { type: 'out', text: 'Open to opportunities! 🚀', green: true },
  { type: 'gap' },
  { type: 'cursor' }
];

/* ════════════════════════════════════════
   PRELOADER
════════════════════════════════════════ */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('done');
    document.body.classList.remove('loading');
    initAnimations();
  }, 2000);
});

/* ════════════════════════════════════════
   MATRIX RAIN
════════════════════════════════════════ */
function initMatrix() {
  const canvas = document.getElementById('matrix-canvas');
  const ctx = canvas.getContext('2d');

  const resize = () => {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener('resize', resize);

  const cols = Math.floor(canvas.width / 16);
  const drops = new Array(cols).fill(1);
  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>/{}[]|\\';

  setInterval(() => {
    ctx.fillStyle = 'rgba(2,10,2,0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff41';
    ctx.font = '13px Share Tech Mono';

    drops.forEach((y, i) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.globalAlpha = Math.random() * 0.5 + 0.1;
      ctx.fillText(char, i * 16, y * 16);
      ctx.globalAlpha = 1;

      if (y * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }, 50);
}
initMatrix();

/* ════════════════════════════════════════
   CUSTOM CURSOR
════════════════════════════════════════ */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = cursor.querySelector('.cursor-ring');
  const dot    = cursor.querySelector('.cursor-dot');

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  // Smooth ring follow
  (function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  })();

  // Hover/click states
  document.querySelectorAll('a, button, .skill-card, .proj-card, .contact-item, .slider-btn').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });

  document.addEventListener('mousedown', () => cursor.classList.add('click'));
  document.addEventListener('mouseup',   () => cursor.classList.remove('click'));
}

/* ════════════════════════════════════════
   NAVBAR
════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  const navAs  = links.querySelectorAll('a');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    updateActiveNav();
  });

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  navAs.forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });

  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 100;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const h   = sec.offsetHeight;
      const id  = sec.getAttribute('id');
      const navA = links.querySelector(`a[href="#${id}"]`);
      if (navA) navA.classList.toggle('active', scrollY >= top && scrollY < top + h);
    });
  }
}

/* ════════════════════════════════════════
   TYPED TEXT (HERO)
════════════════════════════════════════ */
function initTyped() {
  const el = document.getElementById('typedOutput');
  if (!el) return;

  const phrases = [
    'Building the future.',
    'CS/IT Student.',
    'CyberAkhil online.',
    'Open to collaborate.',
    'Learning every day.',
    'Hacker mindset. ☠️'
  ];

  let pi = 0, ci = 0, deleting = false;

  const type = () => {
    const phrase = phrases[pi];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      el.textContent = phrase.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
      }
    }
    setTimeout(type, deleting ? 35 : 75);
  };
  type();
}

/* ════════════════════════════════════════
   TERMINAL ANIMATION (ABOUT)
════════════════════════════════════════ */
function initTerminal() {
  const body = document.getElementById('termBody');
  if (!body) return;

  let i = 0;
  const interval = setInterval(() => {
    if (i >= TERMINAL_LINES.length) { clearInterval(interval); return; }
    const line = TERMINAL_LINES[i++];

    if (line.type === 'gap') {
      body.appendChild(document.createElement('br'));
    } else if (line.type === 'cmd') {
      const row = document.createElement('div');
      row.className = 't-row';
      row.innerHTML = `<span class="tp">~$</span><span class="tc"> ${line.text}</span>`;
      body.appendChild(row);
    } else if (line.type === 'out') {
      const row = document.createElement('div');
      row.className = `t-row out${line.green ? ' g' : ''}`;
      row.textContent = line.text;
      body.appendChild(row);
    } else if (line.type === 'cursor') {
      const row = document.createElement('div');
      row.className = 't-row';
      row.innerHTML = `<span class="tp">~$</span><span class="t-cursor">█</span>`;
      body.appendChild(row);
    }

    body.scrollTop = body.scrollHeight;
  }, 130);
}

/* ════════════════════════════════════════
   COUNTER ANIMATION (HERO STATS)
════════════════════════════════════════ */
function animateCounters() {
  document.querySelectorAll('.stat-num[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    let current = 0;
    const step = Math.max(1, Math.floor(target / 30));
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current;
      if (current >= target) clearInterval(interval);
    }, 40);
  });
}

/* ════════════════════════════════════════
   SKILLS WATERFALL
════════════════════════════════════════ */
function initSkills() {
  const container = document.getElementById('skillsWaterfall');
  if (!container) return;

  SKILLS.forEach((skill, i) => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `
      <div class="sk-icon">${skill.icon}</div>
      <div class="sk-name">${skill.name}</div>
      <p class="sk-desc">${skill.desc}</p>
      <div class="sk-bar"><div class="sk-fill" data-width="${skill.level}" style="width:0%"></div></div>
      <div class="sk-tags">${skill.tags.map(t => `<span class="sk-tag">${t}</span>`).join('')}</div>
    `;
    container.appendChild(card);

    // Staggered waterfall drop-in
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            card.classList.add('fall-in');
            // Animate bar after card appears
            setTimeout(() => {
              const fill = card.querySelector('.sk-fill');
              if (fill) fill.style.width = fill.dataset.width + '%';
            }, 400);
          }, i * 100);
          obs.disconnect();
        }
      });
    }, { threshold: 0.1 });
    obs.observe(card);
  });
}

/* ════════════════════════════════════════
   PROJECTS SLIDER
════════════════════════════════════════ */
function initSlider() {
  const track  = document.getElementById('sliderTrack');
  const dots   = document.getElementById('sliderDots');
  const prev   = document.getElementById('prevBtn');
  const next   = document.getElementById('nextBtn');
  if (!track || !dots) return;

  let current = 0;
  const total = FEATURED_PROJECTS.length;

  // Build slides
  FEATURED_PROJECTS.forEach((proj, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide-card';
    slide.innerHTML = `
      <div class="slide-info">
        <div class="slide-num">${proj.num}</div>
        <div class="slide-tag">${proj.tag}</div>
        <div class="slide-title">${proj.title}</div>
        <p class="slide-desc">${proj.desc}</p>
        <div class="sk-tags" style="margin-bottom:24px">${proj.tags.map(t => `<span class="sk-tag">${t}</span>`).join('')}</div>
        <div class="slide-links">${proj.links.map(l => `<a href="${l.href}" target="_blank" class="slide-link">${l.text}</a>`).join('')}</div>
      </div>
      <div class="slide-visual">
        ${proj.visual.map(line => `<div class="t-row out">${line}</div>`).join('')}
      </div>
    `;
    track.appendChild(slide);

    // Dot
    const dot = document.createElement('div');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dots.appendChild(dot);
  });

  const goTo = (idx) => {
    current = (idx + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.querySelectorAll('.slider-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  };

  prev.addEventListener('click', () => goTo(current - 1));
  next.addEventListener('click', () => goTo(current + 1));

  // Auto-slide
  let autoSlide = setInterval(() => goTo(current + 1), 5000);
  [prev, next].forEach(btn => {
    btn.addEventListener('click', () => { clearInterval(autoSlide); autoSlide = setInterval(() => goTo(current + 1), 5000); });
  });

  // Touch/swipe
  let touchStartX = 0;
  track.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) goTo(dx < 0 ? current + 1 : current - 1);
  });
}

/* ════════════════════════════════════════
   PROJECTS GRID
════════════════════════════════════════ */
function initProjectsGrid() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  PROJECTS_GRID.forEach((proj, i) => {
    const card = document.createElement('div');
    card.className = 'proj-card';
    card.innerHTML = `
      <div class="proj-num">${proj.num}</div>
      <div class="proj-name">${proj.name}</div>
      <p class="proj-desc">${proj.desc}</p>
      <div class="proj-tags">${proj.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}</div>
      <div class="proj-links">${proj.links.map(l => `<a href="${l.href}" target="_blank" class="proj-link">${l.text}</a>`).join('')}</div>
    `;
    grid.appendChild(card);

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => card.classList.add('visible'), i * 120);
          obs.disconnect();
        }
      });
    }, { threshold: 0.1 });
    obs.observe(card);
  });
}

/* ════════════════════════════════════════
   ACHIEVEMENTS WATERFALL
════════════════════════════════════════ */
function initAchievements() {
  const container = document.getElementById('achieveWaterfall');
  if (!container) return;

  ACHIEVEMENTS.forEach((ach, i) => {
    const card = document.createElement('div');
    card.className = 'achieve-card';
    card.innerHTML = `
      <div class="ach-icon">${ach.icon}</div>
      <div class="ach-body">
        <div class="ach-title">${ach.title}</div>
        <p class="ach-desc">${ach.desc}</p>
      </div>
      <div class="ach-badge">${ach.badge}</div>
    `;
    container.appendChild(card);

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => card.classList.add('visible'), i * 100);
          obs.disconnect();
        }
      });
    }, { threshold: 0.1 });
    obs.observe(card);
  });
}

/* ════════════════════════════════════════
   SCROLL REVEAL (generic)
════════════════════════════════════════ */
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const obs = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(t => obs.observe(t));
}

/* ════════════════════════════════════════
   PARALLAX
════════════════════════════════════════ */
function initParallax() {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const grid = document.querySelector('.hero-bg-grid');
    if (grid) grid.style.transform = `translateY(${scrollY * 0.3}px)`;

    const heroContent = document.querySelector('.hero-content');
    if (heroContent) heroContent.style.transform = `translateY(${scrollY * 0.15}px)`;
  });
}

/* ════════════════════════════════════════
   SMOOTH ANCHOR LINKS
════════════════════════════════════════ */
function initSmoothLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'));
        window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' });
      }
    });
  });
}

/* ════════════════════════════════════════
   HERO COUNTER trigger on scroll
════════════════════════════════════════ */
function initHeroCounter() {
  const stats = document.querySelector('.hero-stats');
  if (!stats) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { animateCounters(); obs.disconnect(); }
    });
  }, { threshold: 0.5 });
  obs.observe(stats);
}

/* ════════════════════════════════════════
   GLITCH HOVER on name
════════════════════════════════════════ */
function initGlitch() {
  document.querySelectorAll('[data-text]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.animation = 'none';
      setTimeout(() => {
        el.style.animation = '';
      }, 10);
    });
  });
}

/* ════════════════════════════════════════
   PAGE PROGRESS BAR
════════════════════════════════════════ */
function initProgressBar() {
  const bar = document.createElement('div');
  bar.style.cssText = `
    position: fixed; top: 0; left: 0; z-index: 9999;
    height: 2px; background: #00ff41;
    box-shadow: 0 0 8px #00ff41;
    width: 0%; transition: width 0.1s linear;
    pointer-events: none;
  `;
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const total  = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / total) * 100;
    bar.style.width = progress + '%';
  });
}

/* ════════════════════════════════════════
   EASTER EGG — KONAMI CODE
════════════════════════════════════════ */
function initKonami() {
  const code = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let idx = 0;

  document.addEventListener('keydown', e => {
    if (e.key === code[idx]) {
      idx++;
      if (idx === code.length) {
        idx = 0;
        document.body.style.animation = 'glitch-body 0.5s';
        setTimeout(() => document.body.style.animation = '', 500);
        showToast('🎮 Konami Code! CyberAkhil mode: UNLOCKED');
      }
    } else { idx = 0; }
  });
}

function showToast(msg) {
  const toast = document.createElement('div');
  toast.textContent = msg;
  toast.style.cssText = `
    position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%);
    background: #000; border: 1px solid #00ff41; color: #00ff41;
    font-family: 'Share Tech Mono', monospace; font-size: 12px;
    padding: 12px 24px; letter-spacing: 2px; z-index: 9999;
    animation: fadeUp 0.4s ease forwards;
    box-shadow: 0 0 20px rgba(0,255,65,0.3);
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

/* ════════════════════════════════════════
   TILT EFFECT on cards
════════════════════════════════════════ */
function initTilt() {
  const cards = document.querySelectorAll('.terminal-card, .slide-visual');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s ease';
      setTimeout(() => card.style.transition = '', 500);
    });
  });
}

/* ════════════════════════════════════════
   INIT ALL
════════════════════════════════════════ */
function initAnimations() {
  initCursor();
  initNavbar();
  initTyped();
  initScrollReveal();
  initParallax();
  initSmoothLinks();
  initProgressBar();
  initKonami();
  initGlitch();
  initHeroCounter();
  initSkills();
  initSlider();
  initProjectsGrid();
  initAchievements();

  // Terminal needs a slight delay after reveal
  const aboutSection = document.getElementById('about');
  const termObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { setTimeout(initTerminal, 600); termObs.disconnect(); }
    });
  }, { threshold: 0.2 });
  if (aboutSection) termObs.observe(aboutSection);

  // Tilt after DOM settles
  setTimeout(initTilt, 500);
}
