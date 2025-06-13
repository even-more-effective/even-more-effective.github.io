document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully!');
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // CTA button click handler
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
        alert('Button clicked! This is a test functionality.');
        console.log('CTA button was clicked');
    });
    
    // Form submission handler
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        console.log('Form submitted with data:', data);
        alert('Form submitted successfully! (This is just a test - no data was actually sent)');
        
        // Reset form
        this.reset();
    });
    
    // Add scroll effect to header
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // Card hover effect with console log
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            console.log(`Mouse entered card ${index + 1}`);
        });
        
        card.addEventListener('click', function() {
            alert(`You clicked on ${this.querySelector('h3').textContent}`);
        });
    });
    
    // Add active class to current navigation item
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                
                const correspondingLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    });
});