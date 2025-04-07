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

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Service tabs functionality
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.textContent.trim();
        const services = document.querySelectorAll('.service-card');
        
        services.forEach(service => {
            if (category === 'All Services') {
                service.style.display = 'block';
            } else {
                const serviceBadge = service.querySelector('.service-badge').textContent.trim();
                if (serviceBadge.includes(category) || 
                    (category === 'Home Services' && serviceBadge.includes('Home Service'))) {
                    service.style.display = 'block';
                } else {
                    service.style.display = 'none';
                }
            }
        });
    });
});

// Testimonial slider
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

// Form submission
const jobForm = document.getElementById('jobApplicationForm');
jobForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your application! We will review your information and get back to you soon.');
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

// Chat Support
const chatToggle = document.getElementById('chatToggle');
const chatWindow = document.getElementById('chatWindow');
const chatClose = document.getElementById('chatClose');
const chatSend = document.getElementById('chatSend');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

chatToggle.addEventListener('click', () => {
    chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
});

chatClose.addEventListener('click', () => {
    chatWindow.style.display = 'none';
});

chatSend.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.style.marginBottom = '10px';
        messageElement.style.padding = '8px 12px';
        messageElement.style.backgroundColor = '#f0f0f0';
        messageElement.style.borderRadius = '4px';
        messageElement.style.textAlign = 'right';
        chatMessages.appendChild(messageElement);
        
        // Simple bot response
        setTimeout(() => {
            const botMessage = document.createElement('div');
            const lang = document.getElementById('languageSelect').value;
            botMessage.textContent = lang === 'km' ? 
                'សូមអរគុណសម្រាប់សាររបស់អ្នក! តើយើងអាចជួយអ្នកបានយ៉ាងណា?' :
                'Thank you for your message! How can we assist you today?';
            botMessage.style.marginBottom = '10px';
            botMessage.style.padding = '8px 12px';
            botMessage.style.backgroundColor = '#e6f0f8';
            botMessage.style.borderRadius = '4px';
            chatMessages.appendChild(botMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);

        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Language Switcher
const languageSelect = document.getElementById('languageSelect');
const translations = {
    en: {
        'Superfast Delivery & Services in Cambodia': 'Superfast Delivery & Services in Cambodia',
        'From groceries to home repairs - get everything delivered to your doorstep with our lightning-fast service network.': 'From groceries to home repairs - get everything delivered to your doorstep with our lightning-fast service network.',
        'Download App': 'Download App',
        'Explore Services': 'Explore Services',
        'Happy Customers': 'Happy Customers',
        'Delivery Partners': 'Delivery Partners',
        'Cities Covered': 'Cities Covered',
        'Customer Support': 'Customer Support',
        'Why Choose D2D One?': 'Why Choose D2D One?',
        'We provide the fastest and most reliable delivery and service solutions in Cambodia': 'We provide the fastest and most reliable delivery and service solutions in Cambodia',
        'Superfast Delivery': 'Superfast Delivery',
        'Get your items delivered in record time with our optimized delivery network.': 'Get your items delivered in record time with our optimized delivery network.',
        'Learn More': 'Learn More',
        'Verified Professionals': 'Verified Professionals',
        'All our service providers are thoroughly vetted and certified for quality.': 'All our service providers are thoroughly vetted and certified for quality.',
        'Transparent Pricing': 'Transparent Pricing',
        'No hidden fees or surprises - know exactly what you\'ll pay upfront.': 'No hidden fees or surprises - know exactly what you\'ll pay upfront.',
        '24/7 Support': '24/7 Support',
        'Our customer service team is always ready to assist you anytime.': 'Our customer service team is always ready to assist you anytime.',
        'Real-time Tracking': 'Real-time Tracking',
        'Track your delivery or service professional in real-time on the map.': 'Track your delivery or service professional in real-time on the map.',
        'Quality Guarantee': 'Quality Guarantee',
        'Not satisfied? We\'ll make it right or your money back.': 'Not satisfied? We\'ll make it right or your money back.',
        'Our Services': 'Our Services',
        'Everything you need, delivered with speed and care': 'Everything you need, delivered with speed and care',
        'Instant Delivery': 'Instant Delivery',
        'Get anything delivered within 60 minutes in the city center.': 'Get anything delivered within 60 minutes in the city center.',
        'Order Now': 'Order Now',
        'Restaurant Delivery': 'Restaurant Delivery',
        'From local favorites to international cuisine delivered fast.': 'From local favorites to international cuisine delivered fast.',
        'Medicine Delivery': 'Medicine Delivery',
        'Prescription and over-the-counter medicines delivered safely.': 'Prescription and over-the-counter medicines delivered safely.',
        'Air-Con Repair': 'Air-Con Repair',
        'Professional air conditioning service and maintenance.': 'Professional air conditioning service and maintenance.',
        'Book Now': 'Book Now',
        'Plumbing Services': 'Plumbing Services',
        'Fix leaks, clogs, and all plumbing issues with certified plumbers.': 'Fix leaks, clogs, and all plumbing issues with certified plumbers.',
        'Electrical Repairs': 'Electrical Repairs',
        'Safe and reliable electrical services by certified professionals.': 'Safe and reliable electrical services by certified professionals.',
        'Trusted By': 'Trusted By',
        'We partner with leading brands across Cambodia': 'We partner with leading brands across Cambodia',
        'Join Our Team': 'Join Our Team',
        'Be part of Cambodia\'s fastest growing delivery and services platform': 'Be part of Cambodia\'s fastest growing delivery and services platform',
        'Apply Now': 'Apply Now',
        'What Our Customers Say': 'What Our Customers Say',
        'Hear from people who use our services every day': 'Hear from people who use our services every day',
        'Ready to Experience Superfast Services?': 'Ready to Experience Superfast Services?',
        'Join thousands of happy customers across Cambodia': 'Join thousands of happy customers across Cambodia',
        'Register as Merchant': 'Register as Merchant',
        'Services': 'Services',
        'Features': 'Features',
        'Careers': 'Careers',
        'Company': 'Company',
        'Contact': 'Contact'
    },
    km: {
        'Superfast Delivery & Services in Cambodia': 'ការដឹកជញ្ជូន និងសេវាកម្មលឿនបំផុតនៅកម្ពុជា',
        'From groceries to home repairs - get everything delivered to your doorstep with our lightning-fast service network.': 'ពីគ្រឿងទេសរហូតដល់ការជួសជុលផ្ទះ - ទទួលបានអ្វីគ្រប់យ៉ាងដឹកជញ្ជូនដល់មាត់ទ្វាររបស់អ្នកជាមួយបណ្តាញសេវាកម្មលឿនដូចផ្លេកបន្ទោរ។',
        'Download App': 'ទាញយកកម្មវិធី',
        'Explore Services': 'ស្វែងរកសេវាកម្ម',
        'Happy Customers': 'អតិថិជនរីករាយ',
        'Delivery Partners': 'ដៃគូដឹកជញ្ជូន',
        'Cities Covered': 'ទីក្រុងគ្របដណ្តប់',
        'Customer Support': 'ជំនួយអតិថិជន',
        'Why Choose D2D One?': 'ហេតុអ្វីជ្រើសរើស D2D One?',
        'We provide the fastest and most reliable delivery and service solutions in Cambodia': 'យើងផ្តល់ដំណោះស្រាយការដឹកជញ្ជូន និងសេវាកម្មលឿនបំផុត និងអាចទុកចិត្តបាននៅកម្ពុជា',
        'Superfast Delivery': 'ការដឹកជញ្ជូនលឿនបំផុត',
        'Get your items delivered in record time with our optimized delivery network.': 'ទទួលបានទំនិញរបស់អ្នកដឹកជញ្ជូនក្នុងរយៈពេលលឿនបំផុតជាមួយបណ្តាញដឹកជញ្ជូនដែលបានធ្វើឱ្យប្រសើរឡើងរបស់យើង។',
        'Learn More': 'ស្វែងយល់បន្ថែម',
        'Verified Professionals': 'អ្នកជំនាញដែលបានផ្ទៀងផ្ទាត់',
        'All our service providers are thoroughly vetted and certified for quality.': 'អ្នកផ្តល់សេវាកម្មទាំងអស់របស់យើងត្រូវបានផ្ទៀងផ្ទាត់យ៉ាងហ្មត់ចត់ និងបញ្ជាក់គុណភាព។',
        'Transparent Pricing': 'តម្លៃបើកចំហ',
        'No hidden fees or surprises - know exactly what you\'ll pay upfront.': 'គ្មានថ្លៃលាក់កំបាំង ឬការភ្ញាក់ផ្អើល - ដឹងច្បាស់ពីអ្វីដែលអ្នកនឹងបង់ជាមុន។',
        '24/7 Support': 'ជំនួយ 24/7',
        'Our customer service team is always ready to assist you anytime.': 'ក្រុមជំនួយអតិថិជនរបស់យើងតែងតែត្រៀមជួយអ្នកគ្រប់ពេល។',
        'Real-time Tracking': 'ការតាមដានតាមពេលវេលាជាក់ស្តែង',
        'Track your delivery or service professional in real-time on the map.': 'តាមដានការដឹកជញ្ជូន ឬអ្នកជំនាញសេវាកម្មរបស់អ្នកតាមពេលវេលាជាក់ស្តែងនៅលើផែនទី។',
        'Quality Guarantee': 'ការធានាគុណភាព',
        'Not satisfied? We\'ll make it right or your money back.': 'មិនពេញចិត្តទេ? យើងនឹងធ្វើឱ្យវាត្រឹមត្រូវ ឬសងប្រាក់របស់អ្នកវិញ។',
        'Our Services': 'សេវាកម្មរបស់យើង',
        'Everything you need, delivered with speed and care': 'អ្វីគ្រប់យ៉ាងដែលអ្នកត្រូវការ ដឹកជញ្ជូនជាមួយល្បឿន និងការយកចិត្តទុកដាក់',
        'Instant Delivery': 'ការដឹកជញ្ជូនភ្លាមៗ',
        'Get anything delivered within 60 minutes in the city center.': 'ទទួលបានអ្វីគ្រប់យ៉ាងដឹកជញ្ជូនក្នុងរយៈពេល ៦០ នាទីនៅកណ្តាលទីក្រុង។',
        'Order Now': 'កម្ម៉ង់ឥឡូវនេះ',
        'Restaurant Delivery': 'ការដឹកជញ្ជូនអាហារពីភោជនីយដ្ឋាន',
        'From local favorites to international cuisine delivered fast.': 'ពីម្ហូបក្នុងស្រុកដែលចូលចិត្តរហូតដល់ម្ហូបអន្តរជាតិ ដឹកជញ្ជូនលឿន។',
        'Medicine Delivery': 'ការដឹកជញ្ជូនថ្នាំ',
        'Prescription and over-the-counter medicines delivered safely.': 'ថ្នាំតាមវេជ្ជបញ្ជា និងថ្នាំលក់ដោយគ្មានវេជ្ជបញ្ជា ដឹកជញ្ជូនដោយសុវត្ថិភាព។',
        'Air-Con Repair': 'ជួសជុលម៉ាស៊ីនត្រជាក់',
        'Professional air conditioning service and maintenance.': 'សេវាកម្ម និងថែទាំម៉ាស៊ីនត្រជាក់ប្រកបដោយវិជ្ជាជីវៈ។',
        'Book Now': 'កក់ឥឡូវនេះ',
        'Plumbing Services': 'សេវាកម្មជួសជុលបំពង់ទឹក',
        'Fix leaks, clogs, and all plumbing issues with certified plumbers.': 'ជួសជុលការលេចធ្លាយ ការស្ទះ និងបញ្ហាបំពង់ទឹកទាំងអស់ជាមួយជាងបំពង់ទឹកដែលមានការបញ្ជាក់។',
        'Electrical Repairs': 'ជួសជុលអគ្គិសនី',
        'Safe and reliable electrical services by certified professionals.': 'សេវាកម្មអគ្គិសនីប្រកបដោយសុវត្ថិភាព និងអាចទុកចិត្តបានដោយអ្នកជំនាញដែលមានការបញ្ជាក់។',
        'Trusted By': 'ទទួលបានការជឿទុកចិត្តពី',
        'We partner with leading brands across Cambodia': 'យើងសហការជាមួយម៉ាកល្បីៗនៅទូទាំងកម្ពុជា',
        'Join Our Team': 'ចូលរួមជាមួយក្រុមរបស់យើង',
        'Be part of Cambodia\'s fastest growing delivery and services platform': 'ក្លាយជាផ្នែកមួយនៃវេទិកាដឹកជញ្ជូន និងសេវាកម្មដែលរីកចម្រើនលឿនបំផុតនៅកម្ពុជា',
        'Apply Now': 'ដាក់ពាក្យឥឡូវនេះ',
        'What Our Customers Say': 'អ្វីដែលអតិថិជនរបស់យើងនិយាយ',
        'Hear from people who use our services every day': 'ស្តាប់ពីមនុស្សដែលប្រើសេវាកម្មរបស់យើងជារៀងរាល់ថ្ងៃ',
        'Ready to Experience Superfast Services?': 'ត្រៀមខ្លួនដើម្បីទទួលបទពិសោធន៍សេវាកម្មលឿនបំផុតហើយឬនៅ?',
        'Join thousands of happy customers across Cambodia': 'ចូលរួមជាមួយអតិថិជនរីករាយរាប់ពាន់នាក់នៅទូទាំងកម្ពុជា',
        'Register as Merchant': 'ចុះឈ្មោះជាអ្នកលក់',
        'Services': 'សេវាកម្ម',
        'Features': 'លក្ខណៈពិសេស',
        'Careers': 'អាជីព',
        'Company': 'ក្រុមហ៊ុន',
        'Contact': 'ទំនាក់ទំនង'
    }
};

// Store original content for restoration
const originalContent = new Map();
document.querySelectorAll('h1, h2, h3, p, a, button:not(.chat-toggle):not(.chat-close):not(#chatSend)').forEach(element => {
    const text = element.textContent.trim().replace(/<i.*?>.*?<\/i>/g, '').trim(); // Remove icons
    if (text) originalContent.set(element, text);
});

languageSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    document.querySelectorAll('h1, h2, h3, p, a, button:not(.chat-toggle):not(.chat-close):not(#chatSend)').forEach(element => {
        const originalText = originalContent.get(element);
        if (originalText && translations.en[originalText]) {
            const translatedText = lang === 'km' ? translations.km[originalText] : translations.en[originalText];
            // Preserve icons if present
            const hasIcon = element.innerHTML.includes('<i');
            if (hasIcon) {
                const iconMatch = element.innerHTML.match(/<i.*?>.*?<\/i>/);
                element.innerHTML = iconMatch ? `${iconMatch[0]} ${translatedText}` : translatedText;
            } else {
                element.textContent = translatedText;
            }
        }
    });
});