// Navbar 5 - Hamburger Menu JavaScript

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Get DOM elements
    const hamburger = document.querySelector('.hamburger');
    const navbarMenu = document.querySelector('.navbar-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;
    
    // Track menu state
    let menuOpen = false;
    
    // Initialize mobile menu functionality
    initializeMobileMenu();
    
    // Function to initialize mobile menu
    function initializeMobileMenu() {
        if (!hamburger || !navbarMenu || !menuOverlay) {
            console.error('Required menu elements not found');
            return;
        }
        
        // Hamburger click event
        hamburger.addEventListener('click', function() {
            toggleMenu();
        });
        
        // Overlay click event - close menu
        menuOverlay.addEventListener('click', function() {
            closeMenu();
        });
        
        // Navigation link clicks - close menu on mobile
        navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                
                // Remove active class from all links
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Close menu on mobile after selection
                if (window.innerWidth <= 768) {
                    closeMenu();
                }
                
                console.log('Navigation to:', targetId);
            });
        });
        
        // Keyboard event handling
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && menuOpen) {
                closeMenu();
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            // Close menu if resizing to desktop view
            if (window.innerWidth > 768 && menuOpen) {
                closeMenu();
            }
        });
        
        // Initialize demo hamburger icons (for educational display)
        initializeDemoIcons();
    }
    
    // Function to toggle menu
    function toggleMenu() {
        if (menuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }
    
    // Function to open menu
    function openMenu() {
        menuOpen = true;
        
        // Add active classes
        hamburger.classList.add('active');
        navbarMenu.classList.add('active');
        menuOverlay.classList.add('active');
        
        // Prevent body scroll when menu is open
        body.style.overflow = 'hidden';
        
        // Update ARIA attributes for accessibility
        hamburger.setAttribute('aria-expanded', 'true');
        navbarMenu.setAttribute('aria-hidden', 'false');
        
        // Focus management - focus first menu item
        const firstMenuItem = navbarMenu.querySelector('.nav-link');
        if (firstMenuItem) {
            setTimeout(() => firstMenuItem.focus(), 300); // Wait for animation
        }
        
        // Educational logging
        console.log('Mobile menu opened');
        console.log('Hamburger transformed to X');
        console.log('Menu slid in from right');
        console.log('Overlay activated');
    }
    
    // Function to close menu
    function closeMenu() {
        menuOpen = false;
        
        // Remove active classes
        hamburger.classList.remove('active');
        navbarMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        
        // Restore body scroll
        body.style.overflow = '';
        
        // Update ARIA attributes for accessibility
        hamburger.setAttribute('aria-expanded', 'false');
        navbarMenu.setAttribute('aria-hidden', 'true');
        
        // Educational logging
        console.log('Mobile menu closed');
        console.log('Hamburger transformed back to lines');
        console.log('Menu slid out to right');
        console.log('Overlay deactivated');
    }
    
    // Function to initialize demo hamburger icons in content
    function initializeDemoIcons() {
        const demoHamburgers = document.querySelectorAll('.demo-hamburger');
        
        demoHamburgers.forEach(function(demo) {
            demo.addEventListener('click', function() {
                this.classList.toggle('active');
                
                const isActive = this.classList.contains('active');
                console.log(`Demo hamburger ${isActive ? 'activated' : 'deactivated'}`);
            });
        });
    }
    
    // Educational function: Explain hamburger menu UX principles
    function explainHamburgerUX() {
        console.log('--- Hamburger Menu UX Principles ---');
        console.log('1. Recognition: Three lines universally recognized as menu');
        console.log('2. Animation: Transform to X shows state change clearly');
        console.log('3. Position: Top-right is thumb-friendly on mobile');
        console.log('4. Size: Minimum 44px touch target for accessibility');
        console.log('5. Feedback: Hover and focus states provide clear feedback');
    }
    
    // Educational function: Explain mobile menu animations
    function explainMenuAnimations() {
        console.log('--- Mobile Menu Animation Breakdown ---');
        console.log('Hamburger Icon:');
        console.log('• Line 1: Rotates 45° and translates to form top of X');
        console.log('• Line 2: Fades out (opacity: 0) and slides left');
        console.log('• Line 3: Rotates -45° and translates to form bottom of X');
        console.log('');
        console.log('Menu Panel:');
        console.log('• Slides from right: transform: translateX(100%) to translateX(0)');
        console.log('• Alternative: Can slide from left, top, or fade in');
        console.log('• Duration: 0.3s for smooth but not sluggish feel');
    }
    
    // Educational function: Touch and gesture handling
    function explainTouchHandling() {
        console.log('--- Touch and Gesture Considerations ---');
        console.log('• Touch targets should be at least 44px');
        console.log('• Consider swipe gestures for menu closing');
        console.log('• Prevent scrolling behind menu when open');
        console.log('• Handle orientation changes gracefully');
        console.log('• Test on actual devices, not just browser resize');
    }
    
    // Advanced: Add swipe gesture support (educational)
    function addSwipeSupport() {
        let touchStartX = 0;
        let touchStartY = 0;
        
        navbarMenu.addEventListener('touchstart', function(e) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        });
        
        navbarMenu.addEventListener('touchmove', function(e) {
            if (!menuOpen) return;
            
            const touchCurrentX = e.touches[0].clientX;
            const touchCurrentY = e.touches[0].clientY;
            
            const deltaX = touchCurrentX - touchStartX;
            const deltaY = touchCurrentY - touchStartY;
            
            // Swipe right to close (deltaX > 50 and not too vertical)
            if (deltaX > 50 && Math.abs(deltaY) < 100) {
                closeMenu();
                console.log('Menu closed via swipe gesture');
            }
        });
    }
    
    // Performance optimization: Throttle resize events
    let resizeTimeout;
    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            if (window.innerWidth > 768 && menuOpen) {
                closeMenu();
                console.log('Menu closed due to viewport resize');
            }
        }, 250);
    }
    
    // Replace default resize listener with throttled version
    window.removeEventListener('resize', function() {});
    window.addEventListener('resize', handleResize);
    
    // Accessibility: Focus trap for menu
    function trapFocus() {
        const focusableElements = navbarMenu.querySelectorAll(
            'a, button, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        navbarMenu.addEventListener('keydown', function(e) {
            if (!menuOpen) return;
            
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    // Shift + Tab
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    // Tab
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        });
    }
    
    // Initialize advanced features
    addSwipeSupport();
    trapFocus();
    
    // Call educational functions
    explainHamburgerUX();
    explainMenuAnimations();
    explainTouchHandling();
    
    // Log successful initialization
    console.log('Navbar 5 - Hamburger Menu: JavaScript loaded successfully!');
    console.log('Features demonstrated:');
    console.log('- Hamburger icon animation (lines to X)');
    console.log('- Slide-in mobile menu');
    console.log('- Touch gesture support');
    console.log('- Accessibility features (focus trap, ARIA)');
    console.log('- Performance optimization (throttled events)');
    console.log('- Mobile UX best practices');
    
    // Initialize menu state
    hamburger.setAttribute('aria-expanded', 'false');
    navbarMenu.setAttribute('aria-hidden', 'true');
});