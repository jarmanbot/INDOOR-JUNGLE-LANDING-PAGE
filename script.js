// Indoor Jungle Landing Page Scripts

// Form submission handler
document.getElementById('betaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        experience: document.getElementById('experience').value,
        updates: document.getElementById('updates').checked
    };
    
    // Display success message (you'll replace this with actual email service integration)
    alert('Thank you for joining the waitlist! We\'ll be in touch soon with beta access details.');
    
    // Reset form
    this.reset();
    
    // Log to console for testing
    console.log('Form submitted:', formData);
    
    /* 
     * TODO: Integrate with email service
     * 
     * Option 1: Formspree (easiest)
     * Change form action to: action="https://formspree.io/f/YOUR_FORM_ID"
     * Remove this script's preventDefault and let form submit naturally
     * 
     * Option 2: Mailchimp
     * Use Mailchimp's embedded form code and API
     * 
     * Option 3: Google Forms
     * Use Google Forms API or pre-filled URL method
     * 
     * See README.md for detailed setup instructions
     */
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation trigger
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.feature-card, .benefit-card, .step-card, .era-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});
