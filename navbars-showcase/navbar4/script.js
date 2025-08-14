// Navbar 4 - Dropdown Menu Animation JavaScript

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all navigation elements
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdowns = document.querySelectorAll('.dropdown');
    const dropdownLinks = document.querySelectorAll('.dropdown-link');
    
    // Track dropdown states for educational purposes
    let dropdownStates = {};
    
    // Initialize dropdown functionality
    initializeDropdowns();
    
    // Function to initialize dropdown menus
    function initializeDropdowns() {
        dropdowns.forEach(function(dropdown, index) {
            const dropdownId = `dropdown-${index}`;
            dropdownStates[dropdownId] = false;
            
            const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            
            // Mouse enter event
            dropdown.addEventListener('mouseenter', function() {
                openDropdown(dropdown, dropdownId);
            });
            
            // Mouse leave event with delay
            dropdown.addEventListener('mouseleave', function() {
                setTimeout(() => {
                    closeDropdown(dropdown, dropdownId);
                }, 150); // Small delay to prevent accidental closure
            });
            
            // Keyboard navigation support
            dropdownToggle.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleDropdown(dropdown, dropdownId);
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    openDropdown(dropdown, dropdownId);
                    // Focus first dropdown item
                    const firstItem = dropdownMenu.querySelector('.dropdown-link');
                    if (firstItem) firstItem.focus();
                }
            });
            
            // Handle dropdown item navigation
            const dropdownItems = dropdownMenu.querySelectorAll('.dropdown-link');
            dropdownItems.forEach(function(item, itemIndex) {
                item.addEventListener('keydown', function(e) {
                    if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        const nextIndex = (itemIndex + 1) % dropdownItems.length;
                        dropdownItems[nextIndex].focus();
                    } else if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        const prevIndex = (itemIndex - 1 + dropdownItems.length) % dropdownItems.length;
                        dropdownItems[prevIndex].focus();
                    } else if (e.key === 'Escape') {
                        closeDropdown(dropdown, dropdownId);
                        dropdownToggle.focus();
                    }
                });
            });
        });
    }
    
    // Function to open dropdown
    function openDropdown(dropdown, dropdownId) {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        // Add active class for styling
        dropdown.classList.add('active');
        
        // Update state
        dropdownStates[dropdownId] = true;
        
        // Educational logging
        console.log(`Dropdown opened: ${dropdownId}`);
        console.log('Animation: opacity 0→1, transform translateY(-10px)→translateY(0)');
        
        // Set ARIA attributes for accessibility
        const toggle = dropdown.querySelector('.dropdown-toggle');
        toggle.setAttribute('aria-expanded', 'true');
        dropdownMenu.setAttribute('aria-hidden', 'false');
    }
    
    // Function to close dropdown
    function closeDropdown(dropdown, dropdownId) {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        // Remove active class
        dropdown.classList.remove('active');
        
        // Update state
        dropdownStates[dropdownId] = false;
        
        // Educational logging
        console.log(`Dropdown closed: ${dropdownId}`);
        console.log('Animation: opacity 1→0, transform translateY(0)→translateY(-10px)');
        
        // Set ARIA attributes for accessibility
        const toggle = dropdown.querySelector('.dropdown-toggle');
        toggle.setAttribute('aria-expanded', 'false');
        dropdownMenu.setAttribute('aria-hidden', 'true');
    }
    
    // Function to toggle dropdown (for keyboard/click)
    function toggleDropdown(dropdown, dropdownId) {
        if (dropdownStates[dropdownId]) {
            closeDropdown(dropdown, dropdownId);
        } else {
            openDropdown(dropdown, dropdownId);
        }
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        const isDropdownClick = e.target.closest('.dropdown');
        
        if (!isDropdownClick) {
            dropdowns.forEach(function(dropdown, index) {
                const dropdownId = `dropdown-${index}`;
                closeDropdown(dropdown, dropdownId);
            });
        }
    });
    
    // Handle regular navigation link clicks
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Don't prevent default for dropdown toggles
            if (this.classList.contains('dropdown-toggle')) {
                return;
            }
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Remove active class from all nav links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            console.log('Navigation to:', targetId);
        });
    });
    
    // Handle dropdown link clicks
    dropdownLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            console.log('Dropdown item clicked:', targetId);
            
            // Close the dropdown after selection
            const dropdown = this.closest('.dropdown');
            const dropdownIndex = Array.from(dropdowns).indexOf(dropdown);
            closeDropdown(dropdown, `dropdown-${dropdownIndex}`);
            
            // Optional: Highlight the parent dropdown as active
            const parentToggle = dropdown.querySelector('.dropdown-toggle');
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            parentToggle.classList.add('active');
        });
    });
    
    // Educational function: Explain dropdown animation principles
    function explainDropdownAnimation() {
        console.log('--- Dropdown Animation Principles ---');
        console.log('1. Opacity transition: Creates fade effect');
        console.log('2. Transform translateY: Creates slide effect');
        console.log('3. Visibility property: Controls display timing');
        console.log('4. Transition timing: 0.3s ease for smooth feel');
        console.log('5. Transform origin: Top for natural dropdown feel');
    }
    
    // Educational function: Accessibility best practices
    function explainAccessibility() {
        console.log('--- Dropdown Accessibility Features ---');
        console.log('• ARIA attributes: aria-expanded, aria-hidden');
        console.log('• Keyboard navigation: Arrow keys, Enter, Escape');
        console.log('• Focus management: Proper tab order');
        console.log('• Screen reader support: Semantic markup');
        console.log('• Click outside to close: Intuitive UX');
    }
    
    // Educational function: Performance considerations
    function explainPerformance() {
        console.log('--- Performance Optimization Tips ---');
        console.log('• Use CSS transforms instead of changing position');
        console.log('• Use opacity instead of display for smoother animations');
        console.log('• Debounce hover events to prevent flickering');
        console.log('• Use will-change CSS property for smooth animations');
        console.log('• Minimize DOM queries by caching elements');
    }
    
    // Advanced: Animation event listeners
    dropdowns.forEach(function(dropdown) {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        // Listen for transition events
        dropdownMenu.addEventListener('transitionstart', function(e) {
            console.log(`Transition started: ${e.propertyName}`);
        });
        
        dropdownMenu.addEventListener('transitionend', function(e) {
            console.log(`Transition completed: ${e.propertyName}`);
        });
    });
    
    // Initialize ARIA attributes
    function initializeAccessibility() {
        dropdowns.forEach(function(dropdown) {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            const menu = dropdown.querySelector('.dropdown-menu');
            
            toggle.setAttribute('aria-haspopup', 'true');
            toggle.setAttribute('aria-expanded', 'false');
            menu.setAttribute('role', 'menu');
            menu.setAttribute('aria-hidden', 'true');
            
            // Set role for dropdown items
            const items = menu.querySelectorAll('.dropdown-link');
            items.forEach(item => {
                item.setAttribute('role', 'menuitem');
            });
        });
    }
    
    // Call educational functions
    explainDropdownAnimation();
    explainAccessibility();
    explainPerformance();
    initializeAccessibility();
    
    // Log successful initialization
    console.log('Navbar 4 - Dropdown Menu: JavaScript loaded successfully!');
    console.log('Features demonstrated:');
    console.log('- CSS transform and opacity animations');
    console.log('- Keyboard accessibility');
    console.log('- ARIA attributes for screen readers');
    console.log('- Event delegation and state management');
    console.log('- Performance optimization techniques');
});