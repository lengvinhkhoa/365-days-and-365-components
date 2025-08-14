// Navbar 2 - Slide-in Underline from Left JavaScript

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add click event listeners to navigation links
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Prevent default link behavior for demo purposes
            e.preventDefault();
            
            // Get the href attribute
            const targetId = this.getAttribute('href');
            
            // Log the clicked section for educational purposes
            console.log('Navigating to section:', targetId);
            
            // Remove active class from all links
            navLinks.forEach(function(navLink) {
                navLink.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Simulate page navigation with a delay to show the animation
            setTimeout(() => {
                console.log('Animation completed for:', targetId);
            }, 300);
        });
    });
    
    // Educational function: Demonstrate CSS transform properties
    function demonstrateTransformAnimation() {
        console.log('--- CSS Transform Animation Explanation ---');
        console.log('This navbar uses CSS transform: scaleX() for animation');
        console.log('Key properties:');
        console.log('- transform-origin: left (animation starts from left)');
        console.log('- transform: scaleX(0) (initially hidden)');
        console.log('- transform: scaleX(1) on hover (fully visible)');
        console.log('- transition: transform 0.3s ease (smooth animation)');
    }
    
    // Add mouse enter and leave events for educational logging
    navLinks.forEach(function(link, index) {
        link.addEventListener('mouseenter', function() {
            console.log(`Hover started on link ${index + 1}: ${this.textContent}`);
            console.log('CSS scaleX transforms from 0 to 1');
        });
        
        link.addEventListener('mouseleave', function() {
            console.log(`Hover ended on link ${index + 1}: ${this.textContent}`);
            console.log('CSS scaleX transforms from 1 to 0');
        });
    });
    
    // Function to highlight the importance of transform-origin
    function explainTransformOrigin() {
        console.log('--- Transform Origin Explanation ---');
        console.log('transform-origin: left - makes the animation start from the left edge');
        console.log('Other options:');
        console.log('- transform-origin: right - would slide from right');
        console.log('- transform-origin: center - would expand from center (default)');
    }
    
    // Accessibility: Add keyboard navigation support
    navLinks.forEach(function(link) {
        // Make links focusable with keyboard
        link.setAttribute('tabindex', '0');
        
        // Handle keyboard events
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Provide visual feedback for keyboard focus
        link.addEventListener('focus', function() {
            this.style.outline = '2px solid #e74c3c';
            this.style.outlineOffset = '2px';
        });
        
        link.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Performance tip: Throttle scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(function() {
            // Update navigation highlighting based on scroll position
            // This would be where you'd implement section highlighting
            console.log('Scroll position updated (throttled)');
        }, 100);
    });
    
    // Call educational functions
    demonstrateTransformAnimation();
    explainTransformOrigin();
    
    // Log successful initialization
    console.log('Navbar 2 - Slide-in Underline: JavaScript loaded successfully!');
    console.log('Features demonstrated:');
    console.log('- CSS transform animations');
    console.log('- Transform-origin property');
    console.log('- Event handling and delegation');
    console.log('- Accessibility considerations');
    console.log('- Performance optimization with throttling');
});

// Advanced educational content: Creating custom animations
function createCustomUnderlineAnimation(element, direction = 'left') {
    // This function shows how to create custom slide animations programmatically
    const underline = element.querySelector('::before') || 
                     document.createElement('div');
    
    // Set animation properties based on direction
    const animationProperties = {
        left: { transformOrigin: 'left', initialScale: 'scaleX(0)' },
        right: { transformOrigin: 'right', initialScale: 'scaleX(0)' },
        center: { transformOrigin: 'center', initialScale: 'scaleX(0)' }
    };
    
    console.log(`Custom animation direction: ${direction}`);
    console.log('Properties:', animationProperties[direction]);
}

// Example usage (commented out to avoid conflicts):
// createCustomUnderlineAnimation(document.querySelector('.nav-link'), 'left');