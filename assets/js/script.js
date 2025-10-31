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
    { id: 1, title: "Beachfront Villa", location: "Diani, Kwale", category: "residential", img: "assets/img/project1.jpg" },
    { id: 2, title: "Modern Apartment", location: "Westlands, Nairobi", category: "interior", img: "assets/img/project2.jpg" },
    { id: 3, title: "Tech Hub", location: "Upperhill, Nairobi", category: "commercial", img: "assets/img/project3.jpg" },
    { id: 4, title: "City Mall", location: "Mombasa CBD", category: "urban", img: "assets/img/project4.jpg" },
    { id: 5, title: "Safari Lodge", location: "Maasai Mara", category: "residential", img: "assets/img/project5.jpg" },
    { id: 6, title: "Boutique Hotel", location: "Watamu, Kilifi", category: "commercial", img: "assets/img/project6.jpg" }
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

  // Project Data with Detailed Information
  const projects = [
    {
      id: 1,
      title: "Beachfront Villa",
      location: "Diani, Kwale",
      category: "residential",
      img: "assets/img/project1.jpg",
      images: [
        "assets/img/project1.jpg",
        "assets/img/project2.jpg",
        "assets/img/project3.jpg"
      ],
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
      images: [
        "assets/img/project2.jpg",
        "assets/img/project1.jpg",
        "assets/img/project4.jpg"
      ],
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
      images: [
        "assets/img/project3.jpg",
        "assets/img/project1.jpg",
        "assets/img/project2.jpg"
      ],
      area: "85,000 sq.ft.",
      year: "2023",
      type: "Office Building",
      status: "In Progress",
      description: "Innovative tech campus designed to foster collaboration and creativity. The campus features flexible workspaces, green roofs, and state-of-the-art facilities that prioritize employee well-being and environmental sustainability.",
      features: [
        "LEED Platinum certification",
        "Rooftop garden",
        "Collaborative workspaces",
        "Fitness center",
        "Cafeteria with outdoor seating",
        "Electric vehicle charging"
      ],
      projectUrl: "#"
    },
    {
      id: 4,
      title: "City Mall",
      location: "Mombasa CBD",
      category: "urban",
      img: "assets/img/project4.jpg",
      images: [
        "assets/img/project4.jpg",
        "assets/img/project2.jpg",
        "assets/img/project5.jpg"
      ],
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
      images: [
        "assets/img/project5.jpg",
        "assets/img/project3.jpg",
        "assets/img/project6.jpg"
      ],
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
      images: [
        "assets/img/project6.jpg",
        "assets/img/project4.jpg",
        "assets/img/project1.jpg"
      ],
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
      const projectElement = $(`
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="portfolio-item" data-id="${p.id}">
            <div class="portfolio-img">
              <img src="${p.img}" class="img-fluid" alt="${p.title}">
              <div class="portfolio-overlay">
                <div class="overlay-content">
                  <h5 class="text-white mb-2">${p.title}</h5>
                  <p class="mb-0 text-white-50"><i class="fas fa-map-marker-alt me-1"></i> ${p.location}</p>
                  <div class="mt-3">
                    <span class="badge bg-accent">${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</span>
                  </div>
                </div>
              </div>
              <a href="#" class="portfolio-link" data-bs-toggle="modal" data-bs-target="#projectModal" data-id="${p.id}"></a>
            </div>
            <div class="portfolio-info">
              <span class="portfolio-category">${p.type}</span>
              <h3 class="portfolio-title">${p.title}</h3>
              <p class="portfolio-location"><i class="fas fa-map-marker-alt"></i> ${p.location}</p>
            </div>
          </div>
        </div>
      `);
      
      // Add click handler for the project
      projectElement.find('.portfolio-link').on('click', function(e) {
        e.preventDefault();
        const projectId = parseInt($(this).data('id'));
        const project = projects.find(p => p.id === projectId);
        if (project) {
          openProjectModal(project);
        }
      });
      
      container.append(projectElement);
    });
    
    // Initialize Masonry after loading items
    if ($.fn.masonry) {
      container.masonry({
        itemSelector: '.col-md-6',
        percentPosition: true
      });
    }
  }
  
  // Open Project Modal with Project Details
  function openProjectModal(project) {
    // Set main project image
    $('#modalProjectImage').attr('src', project.images[0]).attr('alt', project.title);
    
    // Set project details
    $('#modalProjectTitle').text(project.title);
    $('#modalProjectCategory').text(project.type);
    $('#modalProjectLocation').html(`<i class="fas fa-map-marker-alt me-2"></i>${project.location}`);
    $('#modalProjectArea').text(project.area);
    $('#modalProjectYear').text(project.year);
    $('#modalProjectType').text(project.type);
    $('#modalProjectStatus').text(project.status);
    $('#modalProjectDescription').html(`<p>${project.description}</p>`);
    
    // Set project features
    const $featuresList = $('#projectFeatures');
    $featuresList.empty();
    if (project.features && project.features.length > 0) {
      project.features.forEach(feature => {
        $featuresList.append(`<li class="col-12 col-sm-6">${feature}</li>`);
      });
    }
    
    // Set project URL
    const $viewBtn = $('#projectViewBtn');
    if (project.projectUrl) {
      $viewBtn.attr('href', project.projectUrl).show();
    } else {
      $viewBtn.hide();
    }
    
    // Set up image gallery
    const $gallery = $('#projectGallery');
    $gallery.empty();
    
    if (project.images && project.images.length > 1) {
      project.images.forEach((img, index) => {
        const isActive = index === 0 ? 'active' : '';
        $gallery.append(`
          <div class="col-4 col-sm-3">
            <div class="gallery-thumb ${isActive}" data-img="${img}">
              <img src="${img}" alt="${project.title} - ${index + 1}" class="img-fluid">
            </div>
          </div>
        `);
      });
      
      // Add click handler for gallery thumbnails
      $gallery.find('.gallery-thumb').on('click', function() {
        const imgSrc = $(this).data('img');
        $('#modalProjectImage').attr('src', imgSrc);
        $gallery.find('.gallery-thumb').removeClass('active');
        $(this).addClass('active');
      });
    }
    
    // Show the modal
    const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
    projectModal.show();
  }

  if ($('#portfolio-grid').length) loadPortfolio();

  $('.filter-btn').click(function () {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');
    loadPortfolio($(this).data('filter'));
  });

  // Project Modal Gallery Navigation
  $(document).on('click', '.gallery-thumb', function() {
    const $this = $(this);
    const $modal = $this.closest('.modal');
    const $gallery = $this.closest('.project-gallery');
    const $thumbs = $gallery.find('.gallery-thumb');
    const $mainImg = $modal.find('.project-modal-img img');
    
    // Update active state
    $thumbs.removeClass('active');
    $this.addClass('active');
    
    // Update main image with fade effect
    const newSrc = $this.data('img');
    if (newSrc) {
      $mainImg.fadeOut(200, function() {
        $(this).attr('src', newSrc).fadeIn(200);
      });
    }
  });
  
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