/* ── i18n ───────────────────────────────────────── */
const translations = {
  pt: {
    'hero.tag':       'disponível para projetos',
    'hero.desc':      'Construo APIs sólidas, arquiteturas de microsserviços e sistemas que aguentam carga de verdade — do design ao deploy.',
    'hero.cta.github':'Ver projetos no GitHub',
    'hero.cta.scroll':'ver destaques ↓',
    'about.label':    'sobre',
    'about.title':    'Backend é onde<br>a mágica acontece.',
    'about.p1':       'Sou desenvolvedor backend focado em construir sistemas que funcionam de verdade — com autenticação robusta, regras de negócio bem modeladas e infraestrutura que não cai quando precisa aguentar.',
    'about.p2':       'Tenho experiência com APIs REST, design de microsserviços, filas assíncronas, modelagem relacional e DevOps básico. Gosto de código que se explica sozinho e arquitetura que faz sentido.',
    'projects.label': 'projetos',
    'projects.title': 'O que já construí.',
    'status.live':    'ao vivo',
    'status.private': 'privado',
    's1.desc': 'Plataforma completa de gestão para oficinas mecânicas. Dashboard em tempo real, agenda de serviços, controle de clientes e histórico de veículos — já indexado no Google.',
    's2.desc': 'Backend de transportadora com ciclo completo de entrega. RBAC com perfis admin e entregador, máquina de estados para encomendas e upload obrigatório como prova de entrega.',
    's3.desc': 'Microsserviço especializado em jobs assíncronos e fila de notificações em tempo real. Processa emails e push notifications com monitoramento de latência e retry automático.',
    's4.desc': 'API de gerenciamento de tarefas com fluxo JWT completo. Cada usuário só acessa seus próprios dados — autenticação, autorização e isolamento de dados por design.',
    's5.desc': 'Sistema completo de suporte com dashboards distintos para admin, técnico e cliente. Fluxo de tickets com prioridades, atribuição de técnicos e histórico de atendimentos.',
    's6.desc': 'Camada centralizada de governança para microsserviços. Rate limiting, JWT middleware, CORS policy e testes de contrato automatizados via Postman Newman — todos passando.',
    'slide.link':     'ver no GitHub →',
    'stack.label':    'stack técnica',
    'stack.title':    'Ferramentas que<br>uso no dia a dia.',
    'stack.backend':  'backend',
    'stack.db':       'banco de dados',
    'stack.infra':    'infra & devops',
    'stack.frontend': 'frontend',
    'cta.label':      '// vamos trabalhar juntos',
    'cta.title':      'Tem um projeto<br>em mente?',
    'cta.desc':       'Disponível para projetos freelance, oportunidades CLT e colaborações open source.',
    'footer.copy':    '© 2026 Guilherme Pinheiro',
    'footer.made':    'feito com <span class="neon">♥</span> e muita cafeína',
  },
  en: {
    'hero.tag':       'available for projects',
    'hero.desc':      'I build solid APIs, microservice architectures and systems that handle real load — from design to deployment.',
    'hero.cta.github':'See projects on GitHub',
    'hero.cta.scroll':'see highlights ↓',
    'about.label':    'about',
    'about.title':    'Backend is where<br>the magic happens.',
    'about.p1':       "I'm a backend developer focused on building systems that truly work — with robust authentication, well-modeled business rules and infrastructure that holds up under pressure.",
    'about.p2':       'I have experience with REST APIs, microservice design, async queues, relational modeling and basic DevOps. I like code that explains itself and architecture that makes sense.',
    'projects.label': 'projects',
    'projects.title': "What I've built.",
    'status.live':    'live',
    'status.private': 'private',
    's1.desc': 'Full-featured management platform for auto shops. Real-time dashboard, service scheduling, client management and vehicle history — already indexed on Google.',
    's2.desc': 'Logistics carrier backend with a complete delivery lifecycle. RBAC with admin and deliveryman roles, order state machine and mandatory photo upload as proof of delivery.',
    's3.desc': 'Specialized microservice for async background jobs and real-time notification queuing. Processes emails and push notifications with latency monitoring and automatic retry.',
    's4.desc': 'Task management API with a complete JWT flow. Each user only accesses their own data — authentication, authorization and data isolation by design.',
    's5.desc': 'Full-stack support system with distinct dashboards for admin, technician and client. Ticket flow with priorities, technician assignment and full attendance history.',
    's6.desc': 'Centralized governance layer for microservices. Rate limiting, JWT middleware, CORS policy and automated contract tests via Postman Newman — all passing.',
    'slide.link':     'view on GitHub →',
    'stack.label':    'tech stack',
    'stack.title':    'Tools I use<br>every day.',
    'stack.backend':  'backend',
    'stack.db':       'database',
    'stack.infra':    'infra & devops',
    'stack.frontend': 'frontend',
    'cta.label':      "// let's work together",
    'cta.title':      'Have a project<br>in mind?',
    'cta.desc':       'Available for freelance projects, full-time opportunities and open source collaborations.',
    'footer.copy':    '© 2026 Guilherme Pinheiro',
    'footer.made':    'made with <span class="neon">♥</span> and lots of coffee',
  },
  es: {
    'hero.tag':       'disponible para proyectos',
    'hero.desc':      'Construyo APIs sólidas, arquitecturas de microservicios y sistemas que aguantan carga real — del diseño al deploy.',
    'hero.cta.github':'Ver proyectos en GitHub',
    'hero.cta.scroll':'ver destacados ↓',
    'about.label':    'sobre mí',
    'about.title':    'El backend es donde<br>ocurre la magia.',
    'about.p1':       'Soy desarrollador backend enfocado en construir sistemas que funcionan de verdad — con autenticación robusta, reglas de negocio bien modeladas e infraestructura que no falla cuando más se necesita.',
    'about.p2':       'Tengo experiencia con APIs REST, diseño de microservicios, colas asíncronas, modelado relacional y DevOps básico. Me gusta el código que se explica solo y la arquitectura con sentido.',
    'projects.label': 'proyectos',
    'projects.title': 'Lo que ya construí.',
    'status.live':    'en vivo',
    'status.private': 'privado',
    's1.desc': 'Plataforma completa de gestión para talleres mecánicos. Dashboard en tiempo real, agenda de servicios, control de clientes e historial de vehículos — ya indexado en Google.',
    's2.desc': 'Backend de transportista con ciclo completo de entrega. RBAC con perfiles admin y repartidor, máquina de estados para pedidos y carga de foto obligatoria como prueba de entrega.',
    's3.desc': 'Microservicio especializado en jobs asíncronos y cola de notificaciones en tiempo real. Procesa emails y push notifications con monitoreo de latencia y reintento automático.',
    's4.desc': 'API de gestión de tareas con flujo JWT completo. Cada usuario solo accede a sus propios datos — autenticación, autorización y aislamiento de datos por diseño.',
    's5.desc': 'Sistema completo de soporte con dashboards distintos para admin, técnico y cliente. Flujo de tickets con prioridades, asignación de técnicos e historial completo.',
    's6.desc': 'Capa centralizada de gobernanza para microservicios. Rate limiting, JWT middleware, política CORS y pruebas de contrato automatizadas via Postman Newman — todas pasando.',
    'slide.link':     'ver en GitHub →',
    'stack.label':    'stack técnico',
    'stack.title':    'Herramientas que<br>uso cada día.',
    'stack.backend':  'backend',
    'stack.db':       'base de datos',
    'stack.infra':    'infra & devops',
    'stack.frontend': 'frontend',
    'cta.label':      '// trabajemos juntos',
    'cta.title':      '¿Tienes un proyecto<br>en mente?',
    'cta.desc':       'Disponible para proyectos freelance, oportunidades de trabajo y colaboraciones open source.',
    'footer.copy':    '© 2026 Guilherme Pinheiro',
    'footer.made':    'hecho con <span class="neon">♥</span> y mucho café',
  },
};

const typewriterPhrases = {
  pt: ['Backend Developer', 'API Designer', 'Node.js & Python', 'Sempre aprendendo'],
  en: ['Backend Developer', 'API Designer', 'Node.js & Python', 'Always learning'],
  es: ['Desarrollador Backend', 'Diseñador de APIs', 'Node.js & Python', 'Siempre aprendiendo'],
};

let currentLang = localStorage.getItem('lang') || 'pt';
let typewriterLang = currentLang;

function applyLang(lang) {
  currentLang = lang;
  typewriterLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

applyLang(currentLang);

/* ── Particle background ────────────────────────── */
(function () {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], mouse = { x: -9999, y: -9999 };

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function randomBetween(a, b) { return a + Math.random() * (b - a); }

  function initParticles() {
    const count = Math.floor((W * H) / 18000);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: randomBetween(0, W),
        y: randomBetween(0, H),
        vx: randomBetween(-0.15, 0.15),
        vy: randomBetween(-0.15, 0.15),
        r: randomBetween(0.5, 1.5),
        opacity: randomBetween(0.2, 0.7),
      });
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 255, 136, ${p.opacity})`;
      ctx.fill();
    });

    // Connect nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(0, 255, 136, ${0.08 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(drawParticles);
  }

  window.addEventListener('resize', () => { resize(); initParticles(); });
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

  resize();
  initParticles();
  drawParticles();
})();

/* ── Navbar scroll ──────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Typewriter ─────────────────────────────────── */
(function () {
  const el = document.getElementById('typewriter');
  let pi = 0, ci = 0, deleting = false;

  function tick() {
    const phrases = typewriterPhrases[typewriterLang] || typewriterPhrases.pt;
    const phrase = phrases[pi % phrases.length];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
    } else {
      el.textContent = phrase.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 45 : 90);
  }

  setTimeout(tick, 800);
})();

/* ── Scroll reveal ──────────────────────────────── */
(function () {
  const els = document.querySelectorAll('.reveal-up');
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.12 }
  );

  // Stagger hero elements on load
  document.querySelectorAll('.hero .reveal-up').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.12}s`;
    setTimeout(() => el.classList.add('visible'), 100 + i * 120);
  });

  // Observe the rest
  document.querySelectorAll('.section .reveal-up').forEach(el => observer.observe(el));
})();

/* ── Slideshow ──────────────────────────────────── */
(function () {
  const track = document.getElementById('slides-track');
  if (!track) return;
  const slides = track.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('slide-dots');
  const btnPrev = document.getElementById('slide-prev');
  const btnNext = document.getElementById('slide-next');
  let current = 0;
  let timer;

  // Build dots
  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'slide-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', `slide ${i + 1}`);
    d.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(d);
  });

  function goTo(idx) {
    current = (idx + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsContainer.querySelectorAll('.slide-dot').forEach((d, i) =>
      d.classList.toggle('active', i === current)
    );
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  btnPrev.addEventListener('click', () => goTo(current - 1));
  btnNext.addEventListener('click', () => goTo(current + 1));

  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  });

  // Touch swipe
  let touchX = 0;
  track.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(current + (diff > 0 ? 1 : -1));
  });

  resetTimer();
})();

/* ── Smooth anchor scroll ───────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
