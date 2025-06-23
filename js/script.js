// Language switching functionality
class LanguageSwitcher {
    constructor() {
        this.currentLang = 'en';
        this.init();
    }

    init() {
        // Get language buttons
        this.langButtons = document.querySelectorAll('.lang-btn');
        
        // Add event listeners
        this.langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.switchLanguage(lang);
            });
        });

        // Set initial language
        this.switchLanguage(this.currentLang);
    }

    switchLanguage(lang) {
        this.currentLang = lang;
        
        // Update active button
        this.langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });

        // Update body class for RTL
        if (lang === 'ar') {
            document.body.classList.add('rtl');
            document.documentElement.setAttribute('lang', 'ar');
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.body.classList.remove('rtl');
            document.documentElement.setAttribute('lang', 'en');
            document.documentElement.setAttribute('dir', 'ltr');
        }

        // Update all text elements
        this.updateTextContent(lang);
        this.updatePlaceholders(lang);
    }

    updateTextContent(lang) {
        const elements = document.querySelectorAll('[data-en][data-ar]');
        elements.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                element.textContent = text;
            }
        });
    }

    updatePlaceholders(lang) {
        const inputs = document.querySelectorAll('[data-placeholder-en][data-placeholder-ar]');
        inputs.forEach(input => {
            const placeholder = input.getAttribute(`data-placeholder-${lang}`);
            if (placeholder) {
                input.placeholder = placeholder;
            }
        });
    }
}

// Mobile menu functionality
class MobileMenu {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.init();
    }

    init() {
        if (this.hamburger && this.navMenu) {
            this.hamburger.addEventListener('click', () => {
                this.toggleMenu();
            });

            // Close menu when clicking on a link
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMenu();
                });
            });
        }
    }

    toggleMenu() {
        this.navMenu.classList.toggle('active');
        this.hamburger.classList.toggle('active');
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        this.hamburger.classList.remove('active');
    }
}

// Smooth scrolling for navigation links
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Header scroll effect
class HeaderScroll {
    constructor() {
        this.header = document.querySelector('.header');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
        });
    }
}

// Animation on scroll
class ScrollAnimation {
    constructor() {
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe elements that should animate
        const animateElements = document.querySelectorAll('.news-card, .fixture-card, .team-card, .stat-item');
        animateElements.forEach(el => {
            observer.observe(el);
        });
    }
}

// Contact form handling
class ContactForm {
    constructor() {
        this.form = document.querySelector('.contact-form form');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit();
            });
        }
    }

    handleSubmit() {
        // Get form data
        const formData = new FormData(this.form);
        const name = this.form.querySelector('input[type="text"]').value;
        const email = this.form.querySelector('input[type="email"]').value;
        const message = this.form.querySelector('textarea').value;

        // Basic validation
        if (!name || !email || !message) {
            this.showMessage('Please fill in all fields.', 'error');
            return;
        }

        // Simulate form submission
        this.showMessage('Thank you for your message! We will get back to you soon.', 'success');
        this.form.reset();
    }

    showMessage(text, type) {
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = `form-message ${type}`;
        messageEl.textContent = text;

        // Insert message
        this.form.insertBefore(messageEl, this.form.firstChild);

        // Remove message after 5 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 5000);
    }
}

// Content Management System (Simple JSON-based)
class ContentManager {
    constructor() {
        this.content = {
            en: {
                news: [
                    {
                        id: 1,
                        title: "Victory Against Al-Nasr 3-1",
                        category: "Match Report",
                        excerpt: "Al-Akhdar secured a convincing 3-1 victory against Al-Nasr in yesterday's thrilling match...",
                        date: "June 13, 2025",
                        image: "images/news-1.jpg"
                    },
                    {
                        id: 2,
                        title: "New Signing: Ahmed Al-Rashid",
                        category: "Player News",
                        excerpt: "We are pleased to announce the signing of midfielder Ahmed Al-Rashid...",
                        date: "June 12, 2025",
                        image: "images/news-2.jpg"
                    },
                    {
                        id: 3,
                        title: "Training Camp Announcement",
                        category: "Club News",
                        excerpt: "The team will participate in a pre-season training camp...",
                        date: "June 10, 2025",
                        image: "images/news-3.jpg"
                    }
                ],
                fixtures: [
                    {
                        id: 1,
                        date: "18",
                        month: "JUN",
                        homeTeam: "Al-Akhdar",
                        awayTeam: "Al-Wahda",
                        time: "19:00",
                        venue: "Green Document Stadium"
                    },
                    {
                        id: 2,
                        date: "25",
                        month: "JUN",
                        homeTeam: "Al-Ittihad",
                        awayTeam: "Al-Akhdar",
                        time: "20:30",
                        venue: "Al-Ittihad Stadium"
                    }
                ]
            },
            ar: {
                news: [
                    {
                        id: 1,
                        title: "انتصار على النصر 3-1",
                        category: "تقرير المباراة",
                        excerpt: "حقق الأخضر فوزاً مقنعاً 3-1 على النصر في مباراة الأمس المثيرة...",
                        date: "13 يونيو 2025",
                        image: "images/news-1.jpg"
                    },
                    {
                        id: 2,
                        title: "توقيع جديد: أحمد الراشد",
                        category: "أخبار اللاعبين",
                        excerpt: "يسعدنا أن نعلن عن توقيع لاعب الوسط أحمد الراشد...",
                        date: "12 يونيو 2025",
                        image: "images/news-2.jpg"
                    },
                    {
                        id: 3,
                        title: "إعلان المعسكر التدريبي",
                        category: "أخبار النادي",
                        excerpt: "سيشارك الفريق في معسكر تدريبي قبل الموسم...",
                        date: "10 يونيو 2025",
                        image: "images/news-3.jpg"
                    }
                ],
                fixtures: [
                    {
                        id: 1,
                        date: "18",
                        month: "يونيو",
                        homeTeam: "الأخضر",
                        awayTeam: "الوحدة",
                        time: "19:00",
                        venue: "ملعب الوثيقة الخضراء"
                    },
                    {
                        id: 2,
                        date: "25",
                        month: "يونيو",
                        homeTeam: "الاتحاد",
                        awayTeam: "الأخضر",
                        time: "20:30",
                        venue: "ملعب الاتحاد"
                    }
                ]
            }
        };
    }

    // Method to update content (for future admin panel)
    updateContent(section, lang, data) {
        this.content[lang][section] = data;
        this.saveContent();
    }

    // Method to save content to localStorage (for demo purposes)
    saveContent() {
        localStorage.setItem('alAkhdarContent', JSON.stringify(this.content));
    }

    // Method to load content from localStorage
    loadContent() {
        const saved = localStorage.getItem('alAkhdarContent');
        if (saved) {
            this.content = JSON.parse(saved);
        }
    }

    // Method to get content by language
    getContent(lang) {
        return this.content[lang] || this.content.en;
    }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    const languageSwitcher = new LanguageSwitcher();
    const mobileMenu = new MobileMenu();
    const smoothScroll = new SmoothScroll();
    const headerScroll = new HeaderScroll();
    const scrollAnimation = new ScrollAnimation();
    const contactForm = new ContactForm();
    const contentManager = new ContentManager();

    // Load saved content
    contentManager.loadContent();

    // Add some additional CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .header.scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .nav-menu.active {
            display: flex;
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            height: calc(100vh - 70px);
            background: white;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            z-index: 999;
        }

        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }

        .news-card, .fixture-card, .team-card, .stat-item {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }

        .news-card.animate, .fixture-card.animate, .team-card.animate, .stat-item.animate {
            opacity: 1;
            transform: translateY(0);
        }

        .form-message {
            padding: 1rem;
            border-radius: var(--border-radius);
            margin-bottom: 1rem;
            font-weight: 500;
        }

        .form-message.success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }

        .form-message.error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }

        /* RTL specific adjustments */
        body.rtl .nav-menu.active {
            right: 0;
            left: auto;
        }

        body.rtl .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(5px, 5px);
        }

        body.rtl .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(7px, -6px);
        }
    `;
    document.head.appendChild(style);

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LanguageSwitcher,
        MobileMenu,
        SmoothScroll,
        HeaderScroll,
        ScrollAnimation,
        ContactForm,
        ContentManager
    };
}

