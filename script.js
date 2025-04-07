document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.innerHTML = navMenu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Sticky header on scroll
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Language Switching
    const langEnBtn = document.getElementById('lang-en');
    const langKhBtn = document.getElementById('lang-kh');

    function switchLanguage(lang) {
        // Update active button
        if (lang === 'en') {
            langEnBtn.classList.add('active');
            langKhBtn.classList.remove('active');
        } else {
            langKhBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        }

        // Toggle content visibility
        document.querySelectorAll(`[data-lang="en"]`).forEach(el => {
            el.style.display = lang === 'en' ? 'block' : 'none';
        });
        document.querySelectorAll(`[data-lang="kh"]`).forEach(el => {
            el.style.display = lang === 'kh' ? 'block' : 'none';
        });

        // Save preference to localStorage
        localStorage.setItem('preferredLanguage', lang);
    }

    langEnBtn.addEventListener('click', () => switchLanguage('en'));
    langKhBtn.addEventListener('click', () => switchLanguage('kh'));

    // Check for saved language preference
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(preferredLanguage);

    // Chatbot Functionality
    const chatbotBtn = document.getElementById('chatbotBtn');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const closeChatbot = document.getElementById('closeChatbot');
    const sendChatbotMessage = document.getElementById('sendChatbotMessage');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const liveSupportBtn = document.getElementById('liveSupportBtn');

    chatbotBtn.addEventListener('click', () => {
        chatbotContainer.classList.add('active');
    });

    closeChatbot.addEventListener('click', () => {
        chatbotContainer.classList.remove('active');
    });

    function addBotMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message bot';
        messageDiv.innerHTML = `<p>${message}</p>`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message user';
        messageDiv.innerHTML = `<p>${message}</p>`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    sendChatbotMessage.addEventListener('click', () => {
        const message = chatbotInput.value.trim();
        if (message) {
            addUserMessage(message);
            chatbotInput.value = '';
            
            // Simulate bot response
            setTimeout(() => {
                const responses = [
                    "I understand your question about: " + message,
                    "Thanks for your message! How can I assist you further?",
                    "For that issue, you might want to check our FAQ section.",
                    "I'll connect you to a live agent for that question."
                ];
                addBotMessage(responses[Math.floor(Math.random() * responses.length)]);
            }, 1000);
        }
    });

    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatbotMessage.click();
        }
    });

    liveSupportBtn.addEventListener('click', () => {
        addBotMessage("Connecting you to a live support agent...");
        setTimeout(() => {
            addBotMessage("All agents are currently busy. Please try again later or leave us a message.");
        }, 2000);
    });

    // Initialize with a welcome message
    addBotMessage("Hello! How can I help you today?");

    // Service tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Only handle clicks on visible buttons
            if (this.style.display !== 'none') {
                const category = this.textContent.trim();
                const services = document.querySelectorAll('.service-card');
                
                // Remove active class from all buttons in the same language
                document.querySelectorAll('.tab-btn').forEach(b => {
                    if (b.style.display === this.style.display) {
                        b.classList.remove('active');
                    }
                });
                this.classList.add('active');
                
                services.forEach(service => {
                    if (category === 'All Services' || category === 'សេវាកម្មទាំងអស់') {
                        service.style.display = 'block';
                    } else {
                        const serviceBadge = service.querySelector('.service-badge').textContent.trim();
                        if (serviceBadge.includes(category) || 
                            (category === 'Home Services' && serviceBadge.includes('Home Service')) ||
                            (category === 'សេវាកម្មផ្ទះ' && serviceBadge.includes('សេវាកម្មផ្ទះ'))) {
                            service.style.display = 'block';
                        } else {
                            service.style.display = 'none';
                        }
                    }
                });
            }
        });
    });

    // Simple testimonial slider
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-card');
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    // Initialize
    showTestimonial(0);
    setInterval(nextTestimonial, 5000);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const jobForm = document.getElementById('jobApplicationForm');
    jobForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
        if (preferredLanguage === 'en') {
            alert('Thank you for your application! We will review your information and get back to you soon.');
        } else {
            alert('សូមអរគុណសម្រាប់ការដាក់ពាក្យរបស់អ្នក! យើងនឹងពិនិត្យព័ត៌មានរបស់អ្នក ហើយនឹងតបទៅអ្នកឆាប់ៗ។');
        }
        jobForm.reset();
    });

    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-card, .service-card, .career-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Set initial state for animated elements
    document.querySelectorAll('.feature-card, .service-card, .career-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});
