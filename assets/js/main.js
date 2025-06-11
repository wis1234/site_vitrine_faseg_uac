// Formations data
const formations = [
  {icon: "fas fa-chart-bar", title: "Licence en Économétrie et Statistique Appliquées (LESA)", description: "Techniques statistiques et modélisation économétrique avancée."},
  {icon: "fas fa-university", title: "Licence en Économie de la Microfinance", description: "Gestion et développement des institutions de microfinance."},
  {icon: "fas fa-building", title: "Licence en Économie et Finance des Collectivités Locales (EFCL)", description: "Gestion financière des collectivités territoriales."},
  {icon: "fas fa-chart-line", title: "Licence en Économie Appliquée et Politiques de Développement (EAPD)", description: "Conception et évaluation des politiques économiques."},
  {icon: "fas fa-leaf", title: "Licence en Économie et Gestion des Exploitations Agricoles (EGEA)", description: "Management des exploitations agricoles et agroalimentaires."},
  {icon: "fas fa-hospital", title: "Licence en Économie et Gestion des Structures Sanitaires (EGSS)", description: "Administration des établissements de santé."},
  {icon: "fas fa-project-diagram", title: "Licence en Analyse et Planification des Projets (APP)", description: "Conception, gestion et évaluation de projets de développement."},
  {icon: "fas fa-calculator", title: "Licence en Sciences et Techniques Comptables et Financières (LSTCF)", description: "Formation aux métiers de la comptabilité."},
  {icon: "fas fa-search-dollar", title: "Licence en Comptabilité, Audit et Contrôle de Gestion (CACG)", description: "Expertise en audit et contrôle financier."},
  {icon: "fas fa-money-bill-wave", title: "Licence en Finance, Banque et Assurance (FBA)", description: "Gestion des institutions financières et produits bancaires."},
  {icon: "fas fa-store", title: "Licence en Entrepreneuriat et Gestion des PME (EGPME)", description: "Création et management de petites et moyennes entreprises."},
  {icon: "fas fa-user-tie", title: "Licence en Gestion des Ressources Humaines (GRH)", description: "Management du capital humain dans les organisations."},
  {icon: "fas fa-bullhorn", title: "Licence en Marketing et Stratégie (MKT)", description: "Techniques avancées de marketing et développement commercial."}
];

// Populate formations dynamically
const formationsContainer = document.getElementById('formations-container');

function loadFormations(start, count) {
  for (let i = start; i < start + count && i < formations.length; i++) {
    const formation = formations[i];
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <i class="${formation.icon} card-icon"></i>
      <h3>${formation.title}</h3>
      <p>${formation.description}</p>
    `;
    formationsContainer.appendChild(card);
  }
}

// Initial load
loadFormations(0, 6);

// Load more button functionality
if (formations.length > 6) {
  const loadMoreBtn = document.createElement('button');
  loadMoreBtn.id = 'load-more';
  loadMoreBtn.innerHTML = 'Voir plus de formations <i class="fas fa-angle-down"></i>';
  loadMoreBtn.style.margin = '2rem auto 0';
  loadMoreBtn.style.display = 'flex';

  loadMoreBtn.addEventListener('click', function() {
    const currentCount = document.querySelectorAll('#formations-container .card').length;
    if (currentCount < formations.length) {
      loadFormations(currentCount, 6);
      if (currentCount + 6 >= formations.length) {
        this.style.display = 'none';
      }
    } else {
      this.style.display = 'none';
    }
  });

  document.querySelector('#formations .container').appendChild(loadMoreBtn);
}

// Menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav").classList.toggle("active");
  const icon = this.querySelector('i');
  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Close mobile menu if open
    document.getElementById("nav").classList.remove("active");
    const menuIcon = document.querySelector('#menu-toggle i');
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });

      // Update active link
      document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    }
  });
});

// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Update active menu based on scroll position
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = '#' + section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentSection) {
      link.classList.add('active');
    }
  });
});

// Animated counters
function animateCounter(id, target, duration = 2000) {
  const counter = document.getElementById(id);
  const startTime = performance.now();
  const startValue = 0;

  function updateCounter(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function for smoother animation
    const easeOut = 1 - Math.pow(1 - progress, 3);

    const currentValue = Math.floor(startValue + easeOut * (target - startValue));
    counter.textContent = currentValue.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target.toLocaleString();
    }
  }

  requestAnimationFrame(updateCounter);
}

// Intersection Observer for counters
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const counterSection = document.querySelector('.counters');
let animated = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !animated) {
      animateCounter("students", 8500);
      animateCounter("programs", 25);
      animateCounter("alumni", 15000);
      animateCounter("professors", 120);
      animated = true;
    }
  });
}, observerOptions);

observer.observe(counterSection);

// Form validation and submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  if (name && email && subject && message) {
    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';

    setTimeout(() => {
      formStatus.innerHTML = '<div style="color: var(--success); padding: 0.5rem; background: rgba(40, 167, 69, 0.1); border-radius: 5px;"><i class="fas fa-check-circle"></i> Votre message a été envoyé avec succès!</div>';
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer';

      setTimeout(() => {
        formStatus.innerHTML = '';
      }, 5000);
    }, 1500);
  } else {
    formStatus.innerHTML = '<div style="color: #dc3545; padding: 0.5rem; background: rgba(220, 53, 69, 0.1); border-radius: 5px;"><i class="fas fa-exclamation-circle"></i> Veuillez remplir tous les champs.</div>';

    setTimeout(() => {
      formStatus.innerHTML = '';
    }, 3000);
  }
});

// Image gallery lightbox
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', function() {
    const imgSrc = this.querySelector('img').src;
    const imgAlt = this.querySelector('img').alt;

    // Create lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    lightbox.style.display = 'flex';
    lightbox.style.alignItems = 'center';
    lightbox.style.justifyContent = 'center';
    lightbox.style.zIndex = '2000';
    lightbox.style.padding = '2rem';

    // Create image
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = imgAlt;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.2)';

    // Create close button
    const closeBtn = document.createElement('div');
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '20px';
    closeBtn.style.right = '20px';
    closeBtn.style.fontSize = '2rem';
    closeBtn.style.color = 'white';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.width = '50px';
    closeBtn.style.height = '50px';
    closeBtn.style.display = 'flex';
    closeBtn.style.alignItems = 'center';
    closeBtn.style.justifyContent = 'center';
    closeBtn.style.borderRadius = '50%';
    closeBtn.style.background = 'rgba(0, 0, 0, 0.5)';
    closeBtn.style.transition = 'var(--transition)';

    closeBtn.addEventListener('mouseover', function() {
      this.style.background = 'rgba(255, 255, 255, 0.2)';
    });

    closeBtn.addEventListener('mouseout', function() {
      this.style.background = 'rgba(0, 0, 0, 0.5)';
    });

    closeBtn.addEventListener('click', function() {
      lightbox.remove();
    });

    // Add caption
    const caption = document.createElement('div');
    caption.textContent = imgAlt;
    caption.style.position = 'absolute';
    caption.style.bottom = '20px';
    caption.style.left = '0';
    caption.style.width = '100%';
    caption.style.textAlign = 'center';
    caption.style.color = 'white';
    caption.style.padding = '1rem';
    caption.style.background = 'rgba(0, 0, 0, 0.5)';

    // Append elements
    lightbox.appendChild(img);
    lightbox.appendChild(closeBtn);
    lightbox.appendChild(caption);
    document.body.appendChild(lightbox);

    // Close on click outside image
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        lightbox.remove();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        lightbox.remove();
      }
    });
  });
});

// Add animation to elements when they come into view
const fadeElements = document.querySelectorAll('.card, .section-header, .gallery-item');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s forwards';
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
  element.style.opacity = '0';
  fadeObserver.observe(element);
});
