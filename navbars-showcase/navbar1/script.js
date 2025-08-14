// Navbar 1 - Simple Hover Underline Animation JavaScript

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add click event listeners to navigation links
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Prevent default link behavior for demo purposes
            e.preventDefault();
            
            // Get the href attribute (which contains the section ID)
            const targetId = this.getAttribute('href');
            
            // Log the clicked section for educational purposes
            console.log('Navigating to section:', targetId);
            
            // Remove active class from all links
            navLinks.forEach(function(navLink) {
                navLink.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Optional: Smooth scroll to section if it exists
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Optional: Highlight current section based on scroll position
    // This is more advanced functionality for educational purposes
    function highlightCurrentSection() {
        const sections = ['#home', '#about', '#services', '#portfolio', '#contact'];
        const scrollPosition = window.scrollY + 100; // Offset for navbar height
        
        // This is a simplified example - in a real site, you'd check actual section positions
        // For educational purposes, we'll just log the scroll position
        console.log('Current scroll position:', scrollPosition);
    }
    
    // Add scroll event listener (throttled for performance)
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        // Clear previous timeout
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        // Set new timeout to avoid excessive function calls
        scrollTimeout = setTimeout(highlightCurrentSection, 100);
    });
    
    // Example of adding keyboard navigation support (accessibility)
    document.addEventListener('keydown', function(e) {
        // Handle Enter key on focused navigation links
        if (e.key === 'Enter' && e.target.classList.contains('nav-link')) {
            e.target.click();
        }
    });
    
    // Log that the script has loaded successfully
    console.log('Navbar 1 - Simple Hover Underline: JavaScript loaded successfully!');
    console.log('This navbar demonstrates:');
    console.log('- Basic event handling');
    console.log('- CSS transitions');
    console.log('- Semantic HTML structure');
    console.log('- Accessibility considerations');
});

// Additional educational function: demonstrate event delegation
function demonstrateEventDelegation() {
    // Instead of adding event listeners to each link individually,
    // we can use event delegation on the parent container
    const navbar = document.querySelector('.navbar-nav');
    
    if (navbar) {
        navbar.addEventListener('click', function(e) {
            // Check if the clicked element is a navigation link
            if (e.target.classList.contains('nav-link')) {
                console.log('Event delegation: Link clicked via parent listener');
            }
        });
    }
}

// Call the demonstration function
// demonstrateEventDelegation(); // Uncomment to see event delegation in action