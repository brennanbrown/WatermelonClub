// Navigation Script
// Handles mobile menu toggle and dropdown navigation

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initDropdowns();
    initStickyHeader();
});

function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('main-nav');
    
    if (!toggle || !nav) return;
    
    toggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
        
        // Update aria-expanded
        const isExpanded = nav.classList.contains('active');
        toggle.setAttribute('aria-expanded', isExpanded);
        
        // Prevent body scroll when menu is open
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !toggle.contains(e.target)) {
            nav.classList.remove('active');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            nav.classList.remove('active');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
}

function initDropdowns() {
    const dropdownParents = document.querySelectorAll('.has-dropdown');
    
    dropdownParents.forEach(parent => {
        const link = parent.querySelector('a');
        const dropdown = parent.querySelector('.dropdown');
        
        if (!link || !dropdown) return;
        
        // On mobile, toggle dropdown on click
        if (window.innerWidth <= 768) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                parent.classList.toggle('active');
            });
        }
        
        // Make keyboard accessible
        link.setAttribute('aria-haspopup', 'true');
        link.setAttribute('aria-expanded', 'false');
        
        parent.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                link.setAttribute('aria-expanded', 'true');
            }
        });
        
        parent.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) {
                link.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Keyboard navigation
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                parent.classList.toggle('active');
                const isExpanded = parent.classList.contains('active');
                link.setAttribute('aria-expanded', isExpanded);
            }
        });
    });
}

function initStickyHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;
    
    let lastScrollTop = 0;
    let scrollThreshold = 100;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow when scrolled
        if (scrollTop > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Optional: Hide header on scroll down, show on scroll up
        // Uncomment if you want this behavior
        /*
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        */
        
        lastScrollTop = scrollTop;
    }, { passive: true });
}

// Smooth scroll to anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') return;
        
        const targetId = href.substring(1);
        const target = document.getElementById(targetId);
        
        if (target) {
            e.preventDefault();
            
            // Close mobile menu if open
            const nav = document.getElementById('main-nav');
            const toggle = document.getElementById('mobile-menu-toggle');
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
                toggle.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            // Scroll to target with offset for sticky header
            const headerHeight = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update URL without triggering navigation
            history.pushState(null, null, href);
        }
    });
});

// Highlight current page in navigation
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        
        if (linkPath === currentPath) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

highlightCurrentPage();

// Handle window resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Reset mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            const nav = document.getElementById('main-nav');
            const toggle = document.getElementById('mobile-menu-toggle');
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
                toggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    }, 250);
});
