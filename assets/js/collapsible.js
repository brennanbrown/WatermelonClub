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
    
    // IMPORTANT: Preserve the heading's ID on the section wrapper
    const headingId = heading.id;
    if (headingId) {
        section.id = headingId;
        section.setAttribute('data-heading-id', headingId);
    }
    
    // Create header
    const header = document.createElement('div');
    header.className = 'collapsible-header';
    
    // Move heading content to header
    const headingClone = heading.cloneNode(true);
    // Remove ID from clone to avoid duplicates (ID is now on section)
    headingClone.removeAttribute('id');
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
    
    // Find target - first try direct ID lookup
    let targetElement = document.getElementById(targetId);
    
    if (!targetElement) {
        console.warn(`Hash target not found: #${targetId}`);
        return;
    }
    
    // If the target is a collapsible section, open it
    if (targetElement.classList.contains('collapsible-section')) {
        // Open this section
        if (!targetElement.classList.contains('active')) {
            targetElement.classList.add('active');
            const header = targetElement.querySelector('.collapsible-header');
            if (header) {
                header.setAttribute('aria-expanded', 'true');
            }
        }
        
        // Open all parent collapsible sections
        let parent = targetElement.parentElement;
        while (parent && parent !== document.body) {
            if (parent.classList && parent.classList.contains('collapsible-section')) {
                if (!parent.classList.contains('active')) {
                    parent.classList.add('active');
                    const header = parent.querySelector('.collapsible-header');
                    if (header) {
                        header.setAttribute('aria-expanded', 'true');
                    }
                }
            }
            parent = parent.parentElement;
        }
    }
    
    // Scroll after a delay to allow expansion
    setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Add a visual highlight flash
        const originalOutline = targetElement.style.outline;
        targetElement.style.outline = '3px solid var(--watermelon-red)';
        setTimeout(() => {
            targetElement.style.outline = originalOutline;
        }, 2000);
    }, 200);
}

// Export functions for use in other scripts if needed
window.CollapsibleUtils = {
    toggleCollapsible: toggleCollapsible,
    handleHashNavigation: handleHashNavigation
};
