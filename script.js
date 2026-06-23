// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If element is in view
            if (entry.isIntersecting) {
                // Add class to trigger animation
                entry.target.style.animationPlayState = 'running';
                
                // Optional: Stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements with fade-in or slide-up classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    
    animatedElements.forEach(el => {
        // Pause animation initially
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // Handle interactive hover effect on project cards
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Subtle glow effect following cursor
            card.style.background = `
                radial-gradient(
                    circle at ${x}px ${y}px, 
                    rgba(139, 92, 246, 0.15), 
                    rgba(255, 255, 255, 0.03) 40%
                )
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.background = 'rgba(255, 255, 255, 0.03)';
        });
    });
});
