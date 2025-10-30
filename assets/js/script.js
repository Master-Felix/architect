$(document).ready(function () {
  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });

// Enhancements: scroll reveal, back-to-top, and active nav by URL
$(document).ready(function () {
  // Active nav by pathname
  const path = window.location.pathname.split('/').pop() || 'index.html';
  $('#nav-links .nav-link').each(function () {
    const href = $(this).attr('href');
    if (href === path) {
      $('#nav-links .nav-link').removeClass('active');
      $(this).addClass('active');
    }
  });

  // Scroll reveal using IntersectionObserver
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    // Fallback: show immediately
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  // Back to top behavior (if present)
  const $backTop = $('#back-to-top');
  if ($backTop.length) {
    const toggleBackTop = () => {
      if (window.scrollY > 300) $backTop.fadeIn(); else $backTop.fadeOut();
    };
    toggleBackTop();
    $(window).on('scroll', toggleBackTop);
    $backTop.on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 700);
    });
  }
});

  // Sample Project Data
  const projects = [
    { id: 1, title: "Oceanfront Residence", location: "Malibu, CA", category: "residential", img: "assets/img/project1.jpg" },
    { id: 2, title: "Urban Loft", location: "New York, NY", category: "interior", img: "assets/img/project2.jpg" },
    { id: 3, title: "Tech Campus", location: "Austin, TX", category: "commercial", img: "assets/img/project1.jpg" },
    { id: 4, title: "City Plaza", location: "Chicago, IL", category: "urban", img: "assets/img/project2.jpg" },
    { id: 5, title: "Mountain Retreat", location: "Aspen, CO", category: "residential", img: "assets/img/project1.jpg" },
    { id: 6, title: "Boutique Hotel", location: "Miami, FL", category: "commercial", img: "assets/img/project2.jpg" }
  ];

  // Load Featured Projects (Homepage)
  function loadFeatured() {
    const container = $('#featured-projects');
    projects.slice(0, 4).forEach(p => {
      container.append(`
        <div class="col-md-6 col-lg-3">
          <a href="project-detail.html" class="text-decoration-none">
            <div class="project-card">
              <img src="${p.img}" class="img-fluid" alt="${p.title}">
              <div class="project-overlay">
                <h5>${p.title}</h5>
                <p class="mb-0">${p.location}</p>
              </div>
            </div>
          </a>
        </div>
      `);
    });
  }

  // Load Portfolio Grid
  function loadPortfolio(filter = 'all') {
    const container = $('#portfolio-grid');
    container.empty();
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
    filtered.forEach(p => {
      container.append(`
        <div class="col-md-6 col-lg-4 mb-4">
          <a href="project-detail.html" class="text-decoration-none">
            <div class="project-card">
              <img src="${p.img}" class="img-fluid" alt="${p.title}">
              <div class="project-overlay">
                <h5>${p.title}</h5>
                <p>${p.location}</p>
              </div>
            </div>
          </a>
        </div>
      `);
    });
  }

  // Filter Buttons
  $('.filter-btn').click(function () {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');
    const filter = $(this).data('filter');
    loadPortfolio(filter);
  });

  // Initialize
  if ($('#featured-projects').length) loadFeatured();
  if ($('#portfolio-grid').length) loadPortfolio();

  // Smooth scroll
  $('a[href^="#"]').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 80
    }, 800);
  });
});

$(document).ready(function () {
  // Sticky Navbar
  $(window).scroll(function () {
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 50);
  });

  // Sample Projects
  const projects = [
    { id: 1, title: "Oceanfront Residence", location: "Malibu, CA", category: "residential", img: "assets/img/project1.jpg" },
    { id: 2, title: "Urban Loft", location: "New York, NY", category: "interior", img: "assets/img/project2.jpg" },
    { id: 3, title: "Tech Campus", location: "Austin, TX", category: "commercial", img: "assets/img/project3.jpg" },
    { id: 4, title: "City Plaza", location: "Chicago, IL", category: "urban", img: "assets/img/project4.jpg" },
    { id: 5, title: "Mountain Retreat", location: "Aspen, CO", category: "residential", img: "assets/img/project1.jpg" },
    { id: 6, title: "Boutique Hotel", location: "Miami, FL", category: "commercial", img: "assets/img/project2.jpg" }
  ];

  // Load Featured (Home)
  if ($('#featured-projects').length) {
    projects.slice(0, 4).forEach(p => {
      $('#featured-projects').append(`
        <div class="col-md-6 col-lg-3">
          <a href="project-detail.html?id=${p.id}" class="text-decoration-none">
            <div class="project-card">
              <img src="${p.img}" class="img-fluid" alt="${p.title}">
              <div class="project-overlay">
                <h5>${p.title}</h5>
                <p class="mb-0">${p.location}</p>
              </div>
            </div>
          </a>
        </div>
      `);
    });
  }

  // Load Portfolio
  function loadPortfolio(filter = 'all') {
    const container = $('#portfolio-grid');
    container.empty();
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
    filtered.forEach(p => {
      container.append(`
        <div class="col-md-6 col-lg-4 mb-4">
          <a href="project-detail.html?id=${p.id}" class="text-decoration-none">
            <div class="project-card">
              <img src="${p.img}" class="img-fluid" alt="${p.title}">
              <div class="project-overlay">
                <h5>${p.title}</h5>
                <p>${p.location}</p>
              </div>
            </div>
          </a>
        </div>
      `);
    });
  }

  if ($('#portfolio-grid').length) loadPortfolio();

  $('.filter-btn').click(function () {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');
    loadPortfolio($(this).data('filter'));
  });

  // Contact Form
  $('#contact-form').submit(function(e) {
    e.preventDefault();
    alert('Thank you! We’ll get back to you soon.');
    this.reset();
  });
});