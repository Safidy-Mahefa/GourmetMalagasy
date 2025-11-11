// ===== DONNÉES DU MENU =====
const menuData = {
    entrees: [
        {
            name: "Sambos",
            description: "Délicieux samosas malgaches croustillants farcis de viande et légumes épicés",
            price: "3 500 Ar",
            image: "./images/Sambos_Malagasy_samosas_d0293ab2.png"
        },
        {
            name: "Lasary Voatabia",
            description: "Salade fraîche de tomates à la malgache avec oignons verts et vinaigrette légère",
            price: "2 500 Ar",
            image: "./images/Lasary_fresh_salad_d754aadf.png"
        },
        {
            name: "Mofo Gasy",
            description: "Galettes de riz traditionnelles dorées, servies chaudes avec du miel",
            price: "2 000 Ar",
            image: "./images/Mofo_gasy_rice_cakes_50384824.png"
        }
    ],
    plats: [
        {
            name: "Romazava",
            description: "Ragoût traditionnel de zébu avec brèdes et légumes, plat national malgache",
            price: "15 000 Ar",
            image: "./images/Romazava_traditional_stew_dish_ce903514.png"
        },
        {
            name: "Ravitoto sy Henakisoa",
            description: "Porc mijoté avec feuilles de manioc pilées, recette authentique du terroir",
            price: "14 000 Ar",
            image: "./images/Ravitoto_pork_cassava_dish_138fc564.png"
        },
        {
            name: "Steak de Zébu",
            description: "Pièce de zébu grillée à la perfection, sauce au poivre de Madagascar et légumes rôtis",
            price: "18 000 Ar",
            image: "./images/Zebu_steak_fine_dining_1034e9a5.png"
        },
        {
            name: "Akoho sy Voanio",
            description: "Poulet au curry malgache avec lait de coco crémeux, servi avec du riz",
            price: "13 000 Ar",
            image: "./images/Chicken_coconut_curry_dish_06d39866.png"
        },
        {
            name: "Vary Amin'anana",
            description: "Riz malgache avec brèdes fraîches, plat simple et savoureux",
            price: "8 000 Ar",
            image: "./images/Vary_rice_with_greens_71578fb9.png"
        }
    ],
    desserts: [
        {
            name: "Flan Coco",
            description: "Crème caramel à la noix de coco, dessert onctueux aux saveurs tropicales",
            price: "4 500 Ar",
            image: "./images/Coconut_flan_dessert_4f6a6939.png"
        },
        {
            name: "Koba",
            description: "Gâteau traditionnel de cacahuètes, riz et banane enveloppé dans une feuille",
            price: "3 000 Ar",
            image: "./images/Koba_traditional_sweet_f61a6d09.png"
        },
        {
            name: "Crème Brûlée Vanille",
            description: "Crème brûlée à la vanille de Madagascar, caramélisée au chalumeau",
            price: "5 000 Ar",
            image: "./images/Vanilla_crème_brûlée_dessert_afaccab0.png"
        }
    ],
    boissons: [
        {
            name: "Ranonapango",
            description: "Eau de riz grillé traditionnelle, boisson rafraîchissante malgache authentique",
            price: "1 500 Ar",
            image: "./images/Ranonapango_rice_water_beverage_98cdd471.png"
        },
        {
            name: "Jus de Fruits Tropicaux",
            description: "Mélange frais de litchi, mangue et fruit de la passion de Madagascar",
            price: "4 000 Ar",
            image: "./images/Tropical_fruit_juice_blend_acb8994f.png"
        }
    ]
};

// ===== DONNÉES DES PLATS POPULAIRES =====
const popularDishes = [
    {
        name: "Romazava",
        description: "Notre plat signature - ragoût de zébu aux brèdes",
        price: "15 000 Ar",
        image: "./images/Romazava_traditional_stew_dish_ce903514.png"
    },
    {
        name: "Steak de Zébu",
        description: "Viande tendre grillée avec sauce au poivre de Madagascar",
        price: "18 000 Ar",
        image: "./images/Zebu_steak_fine_dining_1034e9a5.png"
    },
    {
        name: "Ravitoto sy Henakisoa",
        description: "Porc aux feuilles de manioc - une tradition ancestrale",
        price: "14 000 Ar",
        image: "./images/Ravitoto_pork_cassava_dish_138fc564.png"
    },
    {
        name: "Akoho sy Voanio",
        description: "Poulet au curry et lait de coco, doux et parfumé",
        price: "13 000 Ar",
        image: "./images/Chicken_coconut_curry_dish_06d39866.png"
    },
    {
        name: "Crème Brûlée Vanille",
        description: "Dessert raffiné à la vanille de Madagascar",
        price: "5 000 Ar",
        image: "./images/Vanilla_crème_brûlée_dessert_afaccab0.png"
    }
];

// ===== DONNÉES DES TÉMOIGNAGES =====
const testimonials = [
    {
        text: "Une expérience culinaire exceptionnelle ! Le romazava était absolument délicieux, et l'ambiance chaleureuse nous a transportés au cœur de Madagascar. Service impeccable, je recommande vivement !",
        author: "Sophie Rasoamanana",
        location: "Antananarivo",
        rating: 5,
        avatar: "./images/Female_customer_testimonial_avatar_1caa8fd5.png"
    },
    {
        text: "Le meilleur restaurant malgache que j'ai découvert ! Les saveurs sont authentiques, les portions généreuses et le personnel très accueillant. Le steak de zébu est un pur délice. J'y retourne régulièrement !",
        author: "Jean-Marc Andriamihaja",
        location: "Antananarivo",
        rating: 5,
        avatar: "./images/Male_customer_testimonial_avatar_e811c6d3.png"
    },
    {
        text: "Endroit parfait pour découvrir la vraie cuisine malgache ! Chaque plat est préparé avec soin et amour. L'atmosphère est conviviale et le rapport qualité-prix excellent. Une adresse à ne pas manquer !",
        author: "Marie Rakotomalala",
        location: "Antananarivo",
        rating: 5,
        avatar: "./images/Female_customer_testimonial_avatar_1caa8fd5.png"
    },
    {
        text: "Cuisine traditionnelle de qualité exceptionnelle ! Le ravitoto sy henakisoa nous a rappelé les recettes de nos grand-mères. Décoration élégante, service attentionné. C'est devenu notre restaurant préféré !",
        author: "David Rakotondrabe",
        location: "Antananarivo",
        rating: 5,
        avatar: "./images/Male_customer_testimonial_avatar_e811c6d3.png"
    },
    {
        text: "Un vrai voyage gustatif ! Les plats sont savoureux et authentiques, préparés avec des ingrédients frais. Le personnel est aux petits soins. Je recommande particulièrement le flan coco en dessert !",
        author: "Lucie Randrianasolo",
        location: "Antananarivo",
        rating: 5,
        avatar: "./images/Female_customer_testimonial_avatar_1caa8fd5.png"
    }
];

// ===== FONCTIONS UTILITAIRES =====
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navHeight = document.getElementById('navbar').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// ===== NAVIGATION STICKY =====
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== MENU MOBILE =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ===== CAROUSEL PLATS POPULAIRES =====
class Carousel {
    constructor(trackId, prevBtnId, nextBtnId, dotsId, slides, autoPlayInterval = 5000) {
        this.track = document.getElementById(trackId);
        this.prevBtn = document.getElementById(prevBtnId);
        this.nextBtn = document.getElementById(nextBtnId);
        this.dotsContainer = document.getElementById(dotsId);
        this.slides = slides;
        this.currentIndex = 0;
        this.autoPlayInterval = autoPlayInterval;
        this.autoPlayTimer = null;
        
        this.init();
    }
    
    init() {
        this.renderSlides();
        this.renderDots();
        this.attachEvents();
        this.startAutoPlay();
    }
    
    renderSlides() {
        this.track.innerHTML = this.slides.map(slide => `
            <div class="carousel-slide">
                <img src="${slide.image}" alt="${slide.name}">
                <div class="carousel-slide-content">
                    <h3>${slide.name}</h3>
                    <p>${slide.description}</p>
                    <span class="price">${slide.price}</span>
                </div>
            </div>
        `).join('');
    }
    
    renderDots() {
        this.dotsContainer.innerHTML = this.slides.map((_, index) => `
            <button class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></button>
        `).join('');
        
        this.dotsContainer.querySelectorAll('.carousel-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                this.goToSlide(parseInt(dot.dataset.index));
            });
        });
    }
    
    attachEvents() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Pause auto-play on hover
        this.track.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.track.addEventListener('mouseleave', () => this.startAutoPlay());
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.track.style.transform = `translateX(-${index * 100}%)`;
        this.updateDots();
    }
    
    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.goToSlide(this.currentIndex);
    }
    
    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(this.currentIndex);
    }
    
    updateDots() {
        this.dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayTimer = setInterval(() => this.nextSlide(), this.autoPlayInterval);
    }
    
    stopAutoPlay() {
        if (this.autoPlayTimer) {
            clearInterval(this.autoPlayTimer);
            this.autoPlayTimer = null;
        }
    }
}

// Initialiser le carousel des plats populaires
const popularCarousel = new Carousel(
    'popularCarousel',
    'carouselPrev',
    'carouselNext',
    'carouselDots',
    popularDishes,
    5000
);

// ===== CAROUSEL TÉMOIGNAGES =====
class TestimonialsCarousel {
    constructor(trackId, prevBtnId, nextBtnId, dotsId, testimonials, autoPlayInterval = 7000) {
        this.track = document.getElementById(trackId);
        this.prevBtn = document.getElementById(prevBtnId);
        this.nextBtn = document.getElementById(nextBtnId);
        this.dotsContainer = document.getElementById(dotsId);
        this.testimonials = testimonials;
        this.currentIndex = 0;
        this.autoPlayInterval = autoPlayInterval;
        this.autoPlayTimer = null;
        
        this.init();
    }
    
    init() {
        this.renderSlides();
        this.renderDots();
        this.attachEvents();
        this.startAutoPlay();
    }
    
    renderSlides() {
        this.track.innerHTML = this.testimonials.map(testimonial => `
            <div class="testimonial-slide">
                <div class="testimonial-card">
                    <div class="testimonial-quote">"</div>
                    <p class="testimonial-text">${testimonial.text}</p>
                    <div class="testimonial-author">
                        <img src="${testimonial.avatar}" alt="${testimonial.author}" class="testimonial-avatar">
                        <div class="testimonial-info">
                            <h4>${testimonial.author}</h4>
                            <p>${testimonial.location}</p>
                            <div class="testimonial-rating">
                                ${'★'.repeat(testimonial.rating)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    renderDots() {
        this.dotsContainer.innerHTML = this.testimonials.map((_, index) => `
            <button class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></button>
        `).join('');
        
        this.dotsContainer.querySelectorAll('.carousel-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                this.goToSlide(parseInt(dot.dataset.index));
            });
        });
    }
    
    attachEvents() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        this.track.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.track.addEventListener('mouseleave', () => this.startAutoPlay());
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.track.style.transform = `translateX(-${index * 100}%)`;
        this.updateDots();
    }
    
    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
        this.goToSlide(this.currentIndex);
    }
    
    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
        this.goToSlide(this.currentIndex);
    }
    
    updateDots() {
        this.dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayTimer = setInterval(() => this.nextSlide(), this.autoPlayInterval);
    }
    
    stopAutoPlay() {
        if (this.autoPlayTimer) {
            clearInterval(this.autoPlayTimer);
            this.autoPlayTimer = null;
        }
    }
}

// Initialiser le carousel des témoignages
const testimonialsCarousel = new TestimonialsCarousel(
    'testimonialsCarousel',
    'testimonialsCarouselPrev',
    'testimonialsCarouselNext',
    'testimonialsDots',
    testimonials,
    7000
);

// ===== MENU DYNAMIQUE =====
function renderMenu(category) {
    const menuGrid = document.getElementById('menuGrid');
    const items = menuData[category];
    
    menuGrid.innerHTML = items.map(item => `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <div class="menu-item-content">
                <h3 class="menu-item-title">${item.name}</h3>
                <p class="menu-item-description">${item.description}</p>
                <span class="menu-item-price">${item.price}</span>
            </div>
        </div>
    `).join('');
}

// Initialiser avec les entrées
renderMenu('entrees');

// Gérer les onglets du menu
document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Retirer la classe active de tous les onglets
        document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
        // Ajouter la classe active à l'onglet cliqué
        tab.classList.add('active');
        // Afficher la catégorie correspondante
        const category = tab.dataset.category;
        renderMenu(category);
    });
});

// ===== FORMULAIRE DE RÉSERVATION =====
const reservationForm = document.getElementById('reservationForm');

reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Récupérer les valeurs du formulaire
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        guests: document.getElementById('guests').value
    };
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }
    
    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }
    
    // Validation du téléphone
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!phoneRegex.test(formData.phone)) {
        alert('Veuillez entrer un numéro de téléphone valide.');
        return;
    }
    
    // Validation de la date (doit être dans le futur)
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        alert('Veuillez sélectionner une date future.');
        return;
    }
    
    console.log('Réservation soumise:', formData);
    
    // Afficher le modal de confirmation
    showModal(
        'Réservation Confirmée !',
        `Merci ${formData.name} ! Votre réservation pour ${formData.guests} personne(s) le ${formData.date} à ${formData.time} a été enregistrée. Un email de confirmation a été envoyé à ${formData.email}.`
    );
    
    // Réinitialiser le formulaire
    reservationForm.reset();
});

// ===== FORMULAIRE DE CONTACT =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Récupérer les valeurs du formulaire
    const formData = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        message: document.getElementById('message').value
    };
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }
    
    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }
    
    console.log('Message de contact soumis:', formData);
    
    // Afficher le modal de confirmation
    showModal(
        'Message Envoyé !',
        `Merci ${formData.name} ! Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais à l'adresse ${formData.email}.`
    );
    
    // Réinitialiser le formulaire
    contactForm.reset();
});

// ===== MODAL =====
function showModal(title, message) {
    const modal = document.getElementById('confirmationModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('confirmationModal');
    modal.classList.remove('active');
}

// Fermer le modal en cliquant en dehors
document.getElementById('confirmationModal').addEventListener('click', (e) => {
    if (e.target.id === 'confirmationModal') {
        closeModal();
    }
});

// ===== DÉFINIR LA DATE MINIMALE POUR LE FORMULAIRE DE RÉSERVATION =====
const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

// ===== ANIMATIONS AU SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les sections pour les animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.menu-section, .reservation-section, .testimonials-section, .contact-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

console.log('Site Le Gourmet Malagasy chargé avec succès !');
