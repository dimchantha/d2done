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
        if (lang === 'en') {
            langEnBtn.classList.add('active');
            langKhBtn.classList.remove('active');
        } else {
            langKhBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        }

        document.querySelectorAll(`[data-lang="en"]`).forEach(el => {
            el.style.display = lang === 'en' ? 'block' : 'none';
        });
        document.querySelectorAll(`[data-lang="kh"]`).forEach(el => {
            el.style.display = lang === 'kh' ? 'block' : 'none';
        });

        localStorage.setItem('preferredLanguage', lang);
    }

    langEnBtn.addEventListener('click', () => switchLanguage('en'));
    langKhBtn.addEventListener('click', () => switchLanguage('kh'));

    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(preferredLanguage);

    // Chatbot Functionality
    const chatbotBtn = document.getElementById('chatbotBtn');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const closeChatbot = document.getElementById('closeChatbot');
    const sendChatbotMessage = document.getElementById('sendChatbotMessage');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotMessages = document.getElementById('chatbotMessages');

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
            setTimeout(() => {
                const lang = localStorage.getItem('preferredLanguage') || 'en';
                if (message.toLowerCase().includes('track')) {
                    addBotMessage(lang === 'en' ? 
                        "Please provide your order number to track your delivery." : 
                        "សូមផ្តល់លេខកម្ម៉ង់របស់អ្នកដើម្បីតាមដានការដឹកជញ្ជូន។");
                } else if (message.toLowerCase().includes('service')) {
                    addBotMessage(lang === 'en' ? 
                        "We offer Instant Delivery, Food Delivery, ePharmacy, and Home Services. Which one would you like to know more about?" : 
                        "យើងផ្តល់ជូននូវការដឹកជញ្ជូនភ្លាមៗ ការដឹកជញ្ជូនម្ហូបអាហារ ឱសថសាធារណៈ និងសេវាកម្មផ្ទះ។ តើអ្នកចង់ដឹងបន្ថែមអំពីមួយណា?");
                } else if (message.toLowerCase().includes('support')) {
                    addBotMessage(lang === 'en' ? 
                        "Connecting you to a live support agent..." : 
                        "កំពុងភ្ជាប់អ្នកទៅកាន់ភ្នាក់ងារគាំទ្រផ្ទាល់...");
                    setTimeout(() => {
                        addBotMessage(lang === 'en' ? 
                            "All agents are busy. Please try again later or leave a message." : 
                            "ភ្នាក់ងារទាំងអស់កំពុងរវល់។ សូមព្យាយាមម្តងទៀតនៅពេលក្រោយ ឬទុកសារមួយ។");
                    }, 2000);
                } else if (message.toLowerCase().includes('faq')) {
                    addBotMessage(lang === 'en' ? 
                        "Check out our FAQ at <a href='faq.html'>d2done.com/faq</a> or ask me a specific question!" : 
                        "ពិនិត្យមើល FAQ របស់យើងនៅ <a href='faq.html'>d2done.com/faq</a> ឬសួរខ្ញុំនូវសំណួរជាក់លាក់!");
                } else {
                    addBotMessage(lang === 'en' ? 
                        "I'm not sure how to help with that. Try one of the options below or type a specific question!" : 
                        "ខ្ញុំមិនប្រាកដថាត្រូវជួយបែបណាទេ។ សាកល្បងជម្រើសខាងក្រោម ឬវាយសំណួរជាក់លាក់!");
                }
            }, 1000);
        }
    });

    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatbotMessage.click();
        }
    });

    // Chatbot Options
    document.querySelectorAll('.chatbot-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-action');
            const lang = localStorage.getItem('preferredLanguage') || 'en';
            switch (action) {
                case 'track':
                    addBotMessage(lang === 'en' ? 
                        "Please provide your order number to track your delivery." : 
                        "សូមផ្តល់លេខកម្ម៉ង់របស់អ្នកដើម្បីតាមដានការដឹកជញ្ជូន។");
                    break;
                case 'services':
                    addBotMessage(lang === 'en' ? 
                        "We offer Instant Delivery, Food Delivery, ePharmacy, and Home Services. Which one would you like to know more about?" : 
                        "យើងផ្តល់ជូននូវការដឹកជញ្ជូនភ្លាមៗ ការដឹកជញ្ជូនម្ហូបអាហារ ឱសថសាធារណៈ និងសេវាកម្មផ្ទះ។ តើអ្នកចង់ដឹងបន្ថែមអំពីមួយណា?");
                    break;
                case 'support':
                    addBotMessage(lang === 'en' ? 
                        "Connecting you to a live support agent..." : 
                        "កំពុងភ្ជាប់អ្នកទៅកាន់ភ្នាក់ងារគាំទ្រផ្ទាល់...");
                    setTimeout(() => {
                        addBotMessage(lang === 'en' ? 
                            "All agents are busy. Please try again later or leave a message." : 
                            "ភ្នាក់ងារទាំងអស់កំពុងរវល់។ សូមព្យាយាមម្តងទៀតនៅពេលក្រោយ ឬទុកសារមួយ។");
                    }, 2000);
                    break;
                case 'faq':
                    addBotMessage(lang === 'en' ? 
                        "Check out our FAQ at <a href='faq.html'>d2done.com/faq</a> or ask me a specific question!" : 
                        "ពិនិត្យមើល FAQ របស់យើងនៅ <a href='faq.html'>d2done.com/faq</a> ឬសួរខ្ញុំនូវសំណួរជាក់លាក់!");
                    break;
            }
        });
    });

    // Service tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.style.display !== 'none') {
                const category = this.textContent.trim();
                const services = document.querySelectorAll('.service-card');
                
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
        const lang = localStorage.getItem('preferredLanguage') || 'en';
        alert(lang === 'en' ? 
            'Thank you for your application! We will review your information and get back to you soon.' : 
            'សូមអរគុណសម្រាប់ការដាក់ពាក្យរបស់អ្នក! យើងនឹងពិនិត្យព័ត៌មានរបស់អ្នក ហើយនឹងតបទៅអ្នកឆាប់ៗ។');
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

    document.querySelectorAll('.feature-card, .service-card, .career-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});
