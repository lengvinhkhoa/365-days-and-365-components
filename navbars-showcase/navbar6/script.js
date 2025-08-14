// Navbar 6 - Active Link Indicator JavaScript

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Get DOM elements
    const navLinks = document.querySelectorAll('.nav-link');
    const activeIndicator = document.querySelector('.active-indicator');
    const sections = document.querySelectorAll('.content-section');
    
    // Track current active link
    let currentActiveIndex = 0;
    
    // Initialize the active indicator system
    initializeActiveIndicator();
    
    // Function to initialize active indicator
    function initializeActiveIndicator() {
        if (!activeIndicator || navLinks.length === 0) {
            console.error('Required elements not found for active indicator');
            return;
        }
        
        // Set initial active indicator position
        updateActiveIndicator();
        
        // Add click event listeners to navigation links
        navLinks.forEach(function(link, index) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get target section
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Update active states
                    setActiveLink(index);
                    
                    // Smooth scroll to section
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    console.log(`Navigated to section: ${targetId}`);
                }
            });
        });
        
        // Add scroll event listener for automatic active state updates
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            // Throttle scroll events for performance
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            
            scrollTimeout = setTimeout(function() {
                updateActiveOnScroll();
            }, 10);
        });
        
        // Add resize event listener to recalculate positions
        let resizeTimeout;
        window.addEventListener('resize', function() {
            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }
            
            resizeTimeout = setTimeout(function() {
                updateActiveIndicator();
                console.log('Active indicator position recalculated on resize');
            }, 250);
        });
        
        // Mark as initialized
        activeIndicator.classList.add('initialized');
        
        console.log('Active indicator system initialized');
    }
    
    // Function to set active link
    function setActiveLink(index) {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to target link
        if (navLinks[index]) {
            navLinks[index].classList.add('active');
            currentActiveIndex = index;
            
            // Update indicator position
            updateActiveIndicator();
            
            console.log(`Active link set to index: ${index}`);
        }
    }
    
    // Function to update active indicator position and size
    function updateActiveIndicator() {
        const activeLink = navLinks[currentActiveIndex];
        
        if (!activeLink || !activeIndicator) {
            return;
        }
        
        // Get the position and dimensions of the active link
        const linkRect = activeLink.getBoundingClientRect();
        const navRect = activeLink.closest('.navbar-nav').getBoundingClientRect();
        
        // Calculate relative position within the navigation
        const leftPosition = linkRect.left - navRect.left;
        const width = linkRect.width;
        
        // Apply transform to move and resize the indicator
        activeIndicator.style.transform = `translateY(-50%) translateX(${leftPosition}px)`;
        activeIndicator.style.width = `${width}px`;
        
        console.log(`Indicator updated: position=${leftPosition}px, width=${width}px`);
    }
    
    // Function to update active state based on scroll position
    function updateActiveOnScroll() {
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        
        let activeIndex = 0;
        
        // Find which section is most in view
        sections.forEach(function(section, index) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionBottom = sectionTop + sectionHeight;
            
            // Check if scroll position is within this section
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeIndex = index;
            }
        });
        
        // Update active link if it changed
        if (activeIndex !== currentActiveIndex) {
            setActiveLink(activeIndex);
            console.log(`Active section changed to index: ${activeIndex}`);
        }
    }
    
    // Educational function: Explain position calculation
    function explainPositionCalculation() {
        console.log('--- Position Calculation Explanation ---');
        console.log('1. getBoundingClientRect(): Gets element position relative to viewport');
        console.log('2. Calculate relative position within navigation container');
        console.log('3. Use CSS transform to position indicator smoothly');
        console.log('4. Width adapts automatically to link content');
        console.log('5. Transform uses translateX for hardware acceleration');
    }
    
    // Educational function: Scroll detection methods
    function explainScrollDetection() {
        console.log('--- Scroll Detection Methods ---');
        console.log('Method 1: Scroll Events (Current Implementation)');
        console.log('• Simple to implement and understand');
        console.log('• Good browser support');
        console.log('• Requires throttling for performance');
        console.log('');
        console.log('Method 2: Intersection Observer API');
        console.log('• Better performance');
        console.log('• More complex setup');
        console.log('• Modern browser feature');
        console.log('• Ideal for production applications');
    }
    
    // Advanced: Intersection Observer implementation (educational)
    function implementIntersectionObserver() {
        // Check if Intersection Observer is supported
        if (!window.IntersectionObserver) {
            console.log('Intersection Observer not supported in this browser');
            return;
        }
        
        const observerOptions = {
            root: null, // viewport
            rootMargin: '-50% 0px -50% 0px', // Trigger when section is 50% visible
            threshold: 0
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    const linkIndex = Array.from(navLinks).findIndex(
                        link => link.getAttribute('href') === `#${sectionId}`
                    );
                    
                    if (linkIndex !== -1) {
                        setActiveLink(linkIndex);
                        console.log(`Intersection Observer: Active section ${sectionId}`);
                    }
                }
            });
        }, observerOptions);
        
        // Observe all sections
        sections.forEach(section => observer.observe(section));
        
        console.log('Intersection Observer implementation ready (not active)');
    }
    
    // Performance monitoring
    function monitorPerformance() {
        let frameCount = 0;
        let lastTime = performance.now();
        
        function countFrames() {
            frameCount++;
            const currentTime = performance.now();
            
            if (currentTime - lastTime >= 1000) {
                console.log(`Animation FPS: ${frameCount} (Target: 60)`);
                frameCount = 0;
                lastTime = currentTime;
            }
            
            requestAnimationFrame(countFrames);
        }
        
        // Start monitoring (uncomment for debugging)
        // requestAnimationFrame(countFrames);
    }
    
    // Advanced: Smooth animation with requestAnimationFrame
    function smoothAnimateIndicator(targetX, targetWidth) {
        const startX = parseFloat(activeIndicator.style.transform.match(/translateX\(([^)]+)\)/)?.[1] || '0');
        const startWidth = parseFloat(activeIndicator.style.width || '0');
        
        const duration = 300; // milliseconds
        const startTime = performance.now();
        
        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (cubic-bezier equivalent)
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            const currentX = startX + (targetX - startX) * easeProgress;
            const currentWidth = startWidth + (targetWidth - startWidth) * easeProgress;
            
            activeIndicator.style.transform = `translateY(-50%) translateX(${currentX}px)`;
            activeIndicator.style.width = `${currentWidth}px`;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }
        
        requestAnimationFrame(animate);
        console.log('Custom smooth animation started');
    }
    
    // Accessibility: Announce active section changes
    function announceActiveSection() {
        const activeLink = navLinks[currentActiveIndex];
        if (!activeLink) return;
        
        const sectionName = activeLink.textContent;
        
        // Create or update live region for screen readers
        let liveRegion = document.getElementById('nav-live-region');
        if (!liveRegion) {
            liveRegion = document.createElement('div');
            liveRegion.id = 'nav-live-region';
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.style.position = 'absolute';
            liveRegion.style.left = '-10000px';
            liveRegion.style.width = '1px';
            liveRegion.style.height = '1px';
            liveRegion.style.overflow = 'hidden';
            document.body.appendChild(liveRegion);
        }
        
        liveRegion.textContent = `Current section: ${sectionName}`;
    }
    
    // Override setActiveLink to include accessibility
    const originalSetActiveLink = setActiveLink;
    setActiveLink = function(index) {
        originalSetActiveLink(index);
        announceActiveSection();
    };
    
    // Call educational functions
    explainPositionCalculation();
    explainScrollDetection();
    implementIntersectionObserver();
    monitorPerformance();
    
    // Log successful initialization
    console.log('Navbar 6 - Active Link Indicator: JavaScript loaded successfully!');
    console.log('Features demonstrated:');
    console.log('- Dynamic position calculation');
    console.log('- Smooth CSS transitions with cubic-bezier timing');
    console.log('- Scroll-based section detection');
    console.log('- Responsive indicator resizing');
    console.log('- Performance optimization techniques');
    console.log('- Accessibility considerations');
    console.log('- Alternative implementation methods');
});

// Utility function: Debounce for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Utility function: Throttle for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}