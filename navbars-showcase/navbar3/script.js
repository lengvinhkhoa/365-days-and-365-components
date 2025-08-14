// Navbar 3 - Background Color Change JavaScript

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Color themes for different hover states (educational purpose)
    const colorThemes = {
        default: { bg: 'transparent', color: '#2c3e50' },
        primary: { bg: '#3498db', color: '#fff' },
        secondary: { bg: '#2c3e50', color: '#fff' },
        accent: { bg: '#e67e22', color: '#fff' },
        success: { bg: '#27ae60', color: '#fff' },
        danger: { bg: '#e74c3c', color: '#fff' }
    };
    
    // Add click event listeners to navigation links
    navLinks.forEach(function(link, index) {
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
            
            // Educational: Log color change information
            console.log('Background color changed to active state');
        });
        
        // Add educational logging for hover events
        link.addEventListener('mouseenter', function() {
            console.log(`Hover started: Background transitioning to ${colorThemes.primary.bg}`);
            console.log(`Text color transitioning to ${colorThemes.primary.color}`);
        });
        
        link.addEventListener('mouseleave', function() {
            console.log('Hover ended: Colors transitioning back to default');
        });
    });
    
    // Educational function: Demonstrate CSS color transitions
    function demonstrateColorTransitions() {
        console.log('--- CSS Color Transition Explanation ---');
        console.log('This navbar uses background-color and color transitions');
        console.log('Key CSS properties:');
        console.log('- transition: background-color 0.3s ease, color 0.3s ease');
        console.log('- background-color changes from transparent to #3498db');
        console.log('- color changes from #2c3e50 to #fff');
        console.log('- border-radius: 6px creates rounded corners');
    }
    
    // Function to dynamically change color theme (educational)
    function changeColorTheme(linkElement, themeName) {
        const theme = colorThemes[themeName] || colorThemes.default;
        
        // Apply inline styles for demonstration
        linkElement.style.backgroundColor = theme.bg;
        linkElement.style.color = theme.color;
        
        console.log(`Applied ${themeName} theme:`, theme);
    }
    
    // Educational: Add keyboard navigation with visual feedback
    navLinks.forEach(function(link, index) {
        // Make links keyboard accessible
        link.setAttribute('tabindex', '0');
        
        // Handle keyboard events
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
            
            // Arrow key navigation
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const direction = e.key === 'ArrowRight' ? 1 : -1;
                const nextIndex = (index + direction + navLinks.length) % navLinks.length;
                navLinks[nextIndex].focus();
            }
        });
        
        // Enhanced focus styling
        link.addEventListener('focus', function() {
            this.style.boxShadow = '0 0 0 3px rgba(52, 152, 219, 0.3)';
            console.log(`Keyboard focus on: ${this.textContent}`);
        });
        
        link.addEventListener('blur', function() {
            this.style.boxShadow = 'none';
        });
    });
    
    // Advanced: Color accessibility checker (educational)
    function checkColorContrast(foreground, background) {
        // Simplified contrast checking function for educational purposes
        console.log('--- Color Accessibility Check ---');
        console.log(`Foreground: ${foreground}`);
        console.log(`Background: ${background}`);
        console.log('Note: In production, use proper contrast ratio calculations');
        console.log('WCAG 2.1 requires 4.5:1 contrast ratio for normal text');
    }
    
    // Function to animate color changes programmatically
    function animateColorChange(element, startColor, endColor, duration = 300) {
        // This demonstrates how to create custom color animations
        console.log('Custom color animation:', {
            element: element.textContent,
            from: startColor,
            to: endColor,
            duration: `${duration}ms`
        });
        
        // Note: CSS transitions handle this automatically, but this shows
        // how you could implement custom animations with JavaScript
    }
    
    // Educational: Demonstrate different transition timings
    function explainTransitionTimings() {
        console.log('--- CSS Transition Timing Functions ---');
        console.log('ease: slow start, fast middle, slow end (default)');
        console.log('linear: constant speed throughout');
        console.log('ease-in: slow start, speeds up');
        console.log('ease-out: fast start, slows down');
        console.log('ease-in-out: slow start and end');
        console.log('cubic-bezier(n,n,n,n): custom timing function');
    }
    
    // Performance monitoring for smooth animations
    let animationFrameId;
    function monitorAnimationPerformance() {
        const startTime = performance.now();
        
        function checkPerformance() {
            const currentTime = performance.now();
            const elapsed = currentTime - startTime;
            
            // Log performance every second for educational purposes
            if (elapsed % 1000 < 16) { // Roughly every second
                console.log(`Animation performance check: ${elapsed.toFixed(2)}ms elapsed`);
            }
            
            animationFrameId = requestAnimationFrame(checkPerformance);
        }
        
        checkPerformance();
    }
    
    // Start performance monitoring (uncomment for demonstration)
    // monitorAnimationPerformance();
    
    // Call educational functions
    demonstrateColorTransitions();
    explainTransitionTimings();
    checkColorContrast('#fff', '#3498db');
    
    // Log successful initialization
    console.log('Navbar 3 - Background Color Change: JavaScript loaded successfully!');
    console.log('Features demonstrated:');
    console.log('- CSS background-color transitions');
    console.log('- Color accessibility principles');
    console.log('- Keyboard navigation');
    console.log('- Performance monitoring');
    console.log('- Dynamic color theming');
});

// Utility function: Convert hex to RGB (educational)
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Example usage:
// console.log('RGB values for #3498db:', hexToRgb('#3498db'));