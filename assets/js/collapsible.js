// Collapsible Sections Script
// Handles expanding/collapsing sections and URL hash navigation

document.addEventListener('DOMContentLoaded', function() {
    initializeCollapsibles();
    handleHashNavigation();
});

// Listen for hash changes (when user clicks links)
window.addEventListener('hashchange', handleHashNavigation);

function initializeCollapsibles() {
    // Find all headings that should be collapsible
    const headings = document.querySelectorAll('h2, h3');
    
    headings.forEach(heading => {
        // Skip headings inside already-collapsible sections
        if (heading.closest('.collapsible-section')) {
            return;
        }
        
        // Skip specific headings that shouldn't be collapsible
        if (heading.classList.contains('no-collapse')) {
            return;
        }
        
        // Get all content until the next heading of same or higher level
        const content = getContentUntilNextHeading(heading);
        
        if (content.length > 0) {
            wrapInCollapsible(heading, content);
        }
    });
    
    // Add click handlers to all collapsible headers
    document.querySelectorAll('.collapsible-header').forEach(header => {
        header.addEventListener('click', function() {
            toggleCollapsible(this.parentElement);
        });
        
        // Make keyboard accessible
        header.setAttribute('tabindex', '0');
        header.setAttribute('role', 'button');
        header.setAttribute('aria-expanded', 'false');
        
        header.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleCollapsible(this.parentElement);
            }
        });
    });
}

function getContentUntilNextHeading(heading) {
    const content = [];
    let nextElement = heading.nextElementSibling;
    const headingLevel = parseInt(heading.tagName.charAt(1));
    
    while (nextElement) {
        // Stop if we hit another heading of same or higher level
        if (nextElement.tagName.match(/^H[1-6]$/)) {
            const nextLevel = parseInt(nextElement.tagName.charAt(1));
            if (nextLevel <= headingLevel) {
                break;
            }
        }
        
        content.push(nextElement);
        nextElement = nextElement.nextElementSibling;
    }
    
    return content;
}

function wrapInCollapsible(heading, content) {
    // Create collapsible wrapper
    const section = document.createElement('div');
    section.className = 'collapsible-section';
    
    // Create header
    const header = document.createElement('div');
    header.className = 'collapsible-header';
    
    // Move heading content to header
    const headingClone = heading.cloneNode(true);
    header.appendChild(headingClone);
    
    // Add toggle icon
    const toggle = document.createElement('span');
    toggle.className = 'collapsible-toggle';
    toggle.innerHTML = '▼';
    toggle.setAttribute('aria-hidden', 'true');
    header.appendChild(toggle);
    
    // Create content wrapper
    const contentDiv = document.createElement('div');
    contentDiv.className = 'collapsible-content';
    
    const contentInner = document.createElement('div');
    contentInner.className = 'collapsible-content-inner';
    
    // Move content elements
    content.forEach(el => {
        contentInner.appendChild(el);
    });
    
    contentDiv.appendChild(contentInner);
    
    // Assemble section
    section.appendChild(header);
    section.appendChild(contentDiv);
    
    // Replace original heading
    heading.parentNode.replaceChild(section, heading);
    
    // Store ID if heading had one
    if (headingClone.id) {
        section.id = headingClone.id;
    }
}

function toggleCollapsible(section) {
    const isActive = section.classList.contains('active');
    
    if (isActive) {
        section.classList.remove('active');
        section.querySelector('.collapsible-header').setAttribute('aria-expanded', 'false');
    } else {
        section.classList.add('active');
        section.querySelector('.collapsible-header').setAttribute('aria-expanded', 'true');
        
        // Smooth scroll to section if it's off screen
        const rect = section.getBoundingClientRect();
        if (rect.top < 100) { // Account for sticky header
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

function handleHashNavigation() {
    const hash = window.location.hash;
    
    if (!hash) return;
    
    // Remove the # to get the ID
    const targetId = hash.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (!targetElement) return;
    
    // Find the collapsible section containing this element
    let collapsibleSection = targetElement.closest('.collapsible-section');
    
    // If the element itself is a collapsible section
    if (targetElement.classList.contains('collapsible-section')) {
        collapsibleSection = targetElement;
    }
    
    if (collapsibleSection && !collapsibleSection.classList.contains('active')) {
        // Open the section
        collapsibleSection.classList.add('active');
        collapsibleSection.querySelector('.collapsible-header').setAttribute('aria-expanded', 'true');
        
        // Scroll to it after a brief delay to allow expansion
        setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    } else {
        // Just scroll to it
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Export functions for use in other scripts if needed
window.CollapsibleUtils = {
    toggleCollapsible: toggleCollapsible,
    handleHashNavigation: handleHashNavigation
};
