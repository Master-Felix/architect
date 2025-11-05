// Initialize Hero Carousel
function initHeroCarousel() {
  const heroCarousel = document.querySelector('#heroCarousel');
  if (!heroCarousel) return;

  // Initialize carousel with autoplay and pause on hover
  if (typeof bootstrap === 'undefined' || !bootstrap.Carousel) return;
  const carousel = new bootstrap.Carousel(heroCarousel, {
    interval: 6000,
    touch: true,
    wrap: true,
    pause: 'hover',
    ride: 'carousel'
  });
  
  // Ensure autoplay starts
  carousel.cycle();
  
  // Pause carousel when window is not visible
  document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
      carousel.cycle();
    } else {
      carousel.pause();
    }
  });
}

// Wait for the DOM to be fully loaded (or run immediately if already ready)
function onReady(fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    fn();
  }
}

onReady(function() {
  // Initialize carousel
  initHeroCarousel();
  
  // Initialize Bootstrap tooltips and popovers
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Sticky Navbar
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Active nav by pathname
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#nav-links .nav-link').forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
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
    }, { 
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px' // Load elements slightly before they come into view
    });
    
    revealEls.forEach(el => io.observe(el));
  } else {
    // Fallback: show immediately
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  // Back to top behavior
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    const toggleBackTop = () => {
      if (window.scrollY > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    };

    window.addEventListener('scroll', toggleBackTop);
    
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    toggleBackTop(); // Initial check
  }

  // Project Data with Detailed Information
  const projects = [
    {
      id: 1,
      title: "Beachfront Villa",
      location: "Diani, Kwale",
      category: "residential",
      img: "assets/img/project1.jpg",
      images: ["assets/img/project1.jpg", "assets/img/project2.jpg", "assets/img/project3.jpg"],
      area: "4,500 sq.ft.",
      year: "2023",
      type: "Luxury Villa",
      status: "Completed",
      description: "A stunning beachfront villa with panoramic views of the Indian Ocean. This luxury residence features floor-to-ceiling windows, an infinity pool, and sustainable design elements that blend seamlessly with the coastal environment.",
      features: [
        "Open floor plan",
        "Infinity pool with ocean view",
        "Solar water heating",
        "Rainwater harvesting",
        "Rooftop terrace",
        "Private beach access"
      ],
      projectUrl: "#"
    },
    {
      id: 2,
      title: "Modern Apartment",
      location: "Westlands, Nairobi",
      category: "interior",
      img: "assets/img/project2.jpg",
      images: ["assets/img/project2.jpg", "assets/img/project1.jpg", "assets/img/project4.jpg"],
      area: "2,200 sq.ft.",
      year: "2022",
      type: "Apartment Renovation",
      status: "Completed",
      description: "Contemporary apartment renovation in the heart of Westlands. This project transformed a traditional space into a modern, light-filled urban retreat with custom woodwork, energy-efficient lighting, and smart home technology.",
      features: [
        "Open concept living",
        "Custom wood finishes",
        "Smart home integration",
        "Built-in storage solutions",
        "Energy-efficient lighting",
        "Dedicated workspace"
      ],
      projectUrl: "#"
    },
    {
      id: 3,
      title: "Tech Hub",
      location: "Upperhill, Nairobi",
      category: "commercial",
      img: "assets/img/project3.jpg",
      images: ["assets/img/project3.jpg", "assets/img/project1.jpg", "assets/img/project2.jpg"],
      area: "85,000 sq.ft.",
      year: "2023",
      type: "Office Building",
      status: "In Progress",
      description: "A state-of-the-art tech hub designed to foster innovation and collaboration. The building features flexible workspaces, meeting rooms, and communal areas that encourage interaction and creativity.",
      features: [
        "Open-plan workspaces",
        "Conference facilities",
        "Rooftop garden",
        "Collaborative workspaces",
        "Fitness center",
        "Cafeteria with outdoor seating"
      ],
      projectUrl: "#"
    },
    {
      id: 4,
      title: "City Mall",
      location: "Mombasa CBD",
      category: "urban",
      img: "assets/img/project4.jpg",
      images: ["assets/img/project4.jpg", "assets/img/project2.jpg", "assets/img/project5.jpg"],
      area: "150,000 sq.ft.",
      year: "2022",
      type: "Mixed-Use Development",
      status: "In Progress",
      description: "A transformative mixed-use development in Mombasa's Central Business District, featuring retail spaces, office areas, and public plazas. The design emphasizes coastal architecture, natural ventilation, and incorporates Swahili design elements.",
      features: [
        "Solar panel installation",
        "Underground parking",
        "Rainwater harvesting",
        "Local material finishes",
        "Retail and dining spaces",
        "Public courtyard"
      ],
      projectUrl: "#"
    },
    {
      id: 5,
      title: "Safari Lodge",
      location: "Maasai Mara",
      category: "residential",
      img: "assets/img/project5.jpg",
      images: ["assets/img/project5.jpg", "assets/img/project3.jpg", "assets/img/project6.jpg"],
      area: "6,800 sq.ft.",
      year: "2023",
      type: "Luxury Tented Camp",
      status: "Completed",
      description: "An exclusive safari lodge in the heart of the Maasai Mara, offering luxury tented accommodation with stunning savannah views. The design incorporates traditional Maasai architectural elements with modern comforts, using sustainable materials and solar power.",
      features: [
        "Private viewing decks",
        "Solar power system",
        "Outdoor showers",
        "Swimming pool with savannah views",
        "Private game drives",
        "Cultural experiences"
      ],
      projectUrl: "#"
    },
    {
      id: 6,
      title: "Boutique Hotel",
      location: "Watamu, Kilifi",
      category: "commercial",
      img: "assets/img/project6.jpg",
      images: ["assets/img/project6.jpg", "assets/img/project4.jpg", "assets/img/project1.jpg"],
      area: "45,000 sq.ft.",
      year: "2023",
      type: "Boutique Hotel",
      status: "In Progress",
      description: "A 20-room boutique hotel along Watamu's pristine beaches, featuring Swahili-inspired architecture, a beachfront restaurant, and ocean-view suites. The design incorporates traditional coral stone construction with modern amenities and sustainable practices.",
      features: [
        "Beachfront location",
        "Infinity pool with ocean views",
        "Seafood restaurant",
        "Spa with local treatments",
        "Water sports center",
        "Cultural tours"
      ],
      projectUrl: "#"
    }
  ];

  // Load Featured Projects (Homepage)
  function loadFeatured() {
    const container = document.getElementById('featured-projects');
    if (!container) return;

    projects.slice(0, 4).forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.className = 'col-md-6 col-lg-3';
      projectElement.innerHTML = `
        <a href="project-detail.html?id=${project.id}" class="text-decoration-none">
          <div class="project-card">
            <img src="${project.img}" class="img-fluid" alt="${project.title}" loading="lazy">
            <div class="project-overlay">
              <h5>${project.title}</h5>
              <p class="mb-0">${project.location}</p>
            </div>
          </div>
        </a>
      `;
      container.appendChild(projectElement);
    });
  }

  // Load Portfolio Grid
  function loadPortfolio(filter = 'all') {
    const container = document.getElementById('portfolio-grid');
    if (!container) return;

    container.innerHTML = ''; // Clear existing content
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
    
    filtered.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.className = 'col-md-6 col-lg-4 mb-4';
      projectElement.innerHTML = `
        <div class="project-card" data-bs-toggle="modal" data-bs-target="#projectModal" onclick="openProjectModal(${project.id})">
          <img src="${project.img}" class="img-fluid" alt="${project.title}" loading="lazy">
          <div class="project-overlay">
            <h5>${project.title}</h5>
            <p>${project.location}</p>
            <span class="btn btn-sm btn-outline-light mt-2">View Project</span>
          </div>
        </div>
      `;
      container.appendChild(projectElement);
    });

    // Initialize Masonry after images load
    if (typeof imagesLoaded !== 'undefined') {
      imagesLoaded(container, function() {
        if (typeof Masonry !== 'undefined') {
          new Masonry(container, {
            itemSelector: '.col-md-6',
            percentPosition: true
          });
        }
      });
    }
  }

  // Open Project Modal with Project Details
  window.openProjectModal = function(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    // Update modal content
    document.getElementById('modalProjectTitle').textContent = project.title;
    document.getElementById('modalProjectLocation').innerHTML = `<i class="fas fa-map-marker-alt me-2"></i>${project.location}`;
    document.getElementById('modalProjectCategory').textContent = project.category.charAt(0).toUpperCase() + project.category.slice(1);
    document.getElementById('modalProjectDescription').textContent = project.description;
    
    // Update project meta
    const metaContainer = document.querySelector('.project-meta .row');
    if (metaContainer) {
      metaContainer.innerHTML = `
        <div class="col-6 mb-3">
          <div class="d-flex align-items-center">
            <i class="fas fa-ruler-combined me-2"></i>
            <div>
              <span class="d-block text-muted small">Area</span>
              <span>${project.area}</span>
            </div>
          </div>
        </div>
        <div class="col-6 mb-3">
          <div class="d-flex align-items-center">
            <i class="far fa-calendar-alt me-2"></i>
            <div>
              <span class="d-block text-muted small">Year</span>
              <span>${project.year}</span>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="d-flex align-items-center">
            <i class="fas fa-tag me-2"></i>
            <div>
              <span class="d-block text-muted small">Type</span>
              <span>${project.type}</span>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="d-flex align-items-center">
            <i class="fas fa-check-circle me-2"></i>
            <div>
              <span class="d-block text-muted small">Status</span>
              <span>${project.status}</span>
            </div>
          </div>
        </div>
      `;
    }
    
    // Update project features
    const featuresList = document.getElementById('projectFeatures');
    if (featuresList) {
      featuresList.innerHTML = project.features
        .map(feature => `<li class="col-12 col-sm-6"><i class="fas fa-check text-accent me-2"></i>${feature}</li>`)
        .join('');
    }
    
    // Update project images gallery
    const gallery = document.getElementById('projectGallery');
    const modalImage = document.getElementById('modalProjectImage');
    
    if (gallery && modalImage) {
      gallery.innerHTML = '';
      
      // Set main image
      modalImage.src = project.images[0];
      modalImage.alt = project.title;
      
      // Add thumbnails
      project.images.forEach((img, index) => {
        const thumb = document.createElement('div');
        thumb.className = 'col-4 mb-2';
        thumb.innerHTML = `
          <img src="${img}" 
               class="img-fluid rounded cursor-pointer ${index === 0 ? 'active' : ''}" 
               alt="${project.title} - ${index + 1}" 
               onclick="document.getElementById('modalProjectImage').src='${img}'; 
                       this.parentElement.parentElement.querySelectorAll('img').forEach(i => i.classList.remove('active'));
                       this.classList.add('active');">
        `;
        gallery.appendChild(thumb);
      });
    }
    
    // Update project URL
    const viewBtn = document.getElementById('projectViewBtn');
    if (viewBtn) {
      viewBtn.href = project.projectUrl;
    }
    
    // Show modal
    const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
    projectModal.show();
  };

  // Initialize portfolio
  if (document.getElementById('featured-projects')) {
    loadFeatured();
  }
  
  // Close modal when clicking outside content
  $('#projectModal').on('click', function(e) {
    if ($(e.target).is('.modal')) {
      const modal = bootstrap.Modal.getInstance(document.getElementById('projectModal'));
      modal.hide();
    }
  });
  
  // Close modal with escape key
  $(document).keyup(function(e) {
    if (e.key === 'Escape') {
      const modal = bootstrap.Modal.getInstance(document.getElementById('projectModal'));
      if (modal) {
        modal.hide();
      }
    }
  });
  
  // Contact Form
  $('#contact-form').submit(function(e) {
    e.preventDefault();
    alert('Thank you! We\'ll get back to you soon.');
    this.reset();
  });
});