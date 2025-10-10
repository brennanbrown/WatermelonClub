// Table of Contents Generator
// Automatically generates TOC for all pages except homepage

(function() {
    'use strict';

    // Don't run on homepage
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        return;
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', generateTOC);
    } else {
        generateTOC();
    }

    function generateTOC() {
        // Find all H2 and H3 headings in the main content
        const mainContent = document.querySelector('main') || document.querySelector('.content') || document.body;
        const headings = mainContent.querySelectorAll('h2, h3');
        
        if (headings.length < 3) {
            // Don't show TOC if there are fewer than 3 headings
            return;
        }

        // Create TOC container
        const tocContainer = document.createElement('nav');
        tocContainer.className = 'table-of-contents';
        tocContainer.setAttribute('aria-label', 'Table of Contents');
        
        // Create TOC header
        const tocHeader = document.createElement('div');
        tocHeader.className = 'toc-header';
        tocHeader.innerHTML = '<h2>On This Page</h2><button class="toc-toggle" aria-label="Toggle table of contents"><span></span><span></span><span></span></button>';
        tocContainer.appendChild(tocHeader);

        // Create TOC list
        const tocList = document.createElement('ul');
        tocList.className = 'toc-list';

        let currentH2Item = null;

        headings.forEach((heading, index) => {
            // Skip the first h1/h2 if it's the page title
            if (index === 0 && heading.closest('.page-header')) {
                return;
            }

            // Generate ID if heading doesn't have one
            if (!heading.id) {
                heading.id = generateId(heading.textContent);
            }

            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${heading.id}`;
            link.textContent = heading.textContent.replace(/^[#\s]+/, ''); // Clean up heading text
            
            if (heading.tagName === 'H2') {
                listItem.className = 'toc-h2';
                listItem.appendChild(link);
                tocList.appendChild(listItem);
                currentH2Item = listItem;
            } else if (heading.tagName === 'H3' && currentH2Item) {
                // Nest H3s under H2s
                let subList = currentH2Item.querySelector('ul');
                if (!subList) {
                    subList = document.createElement('ul');
                    subList.className = 'toc-sublist';
                    currentH2Item.appendChild(subList);
                }
                listItem.className = 'toc-h3';
                listItem.appendChild(link);
                subList.appendChild(listItem);
            } else if (heading.tagName === 'H3') {
                // H3 without parent H2
                listItem.className = 'toc-h3';
                listItem.appendChild(link);
                tocList.appendChild(listItem);
            }

            // Add click handler to expand collapsible sections if needed
            link.addEventListener('click', function(e) {
                const targetHeading = document.getElementById(heading.id);
                if (targetHeading && targetHeading.classList.contains('collapsible-header')) {
                    const content = targetHeading.nextElementSibling;
                    if (content && content.classList.contains('collapsible-content') && !content.classList.contains('active')) {
                        // Expand the section before scrolling
                        targetHeading.click();
                    }
                }
            });
        });

        tocContainer.appendChild(tocList);

        // Insert TOC after the page title or at the beginning of main content
        const pageTitle = document.querySelector('h1');
        const firstParagraph = mainContent.querySelector('p');
        
        if (pageTitle && pageTitle.nextElementSibling) {
            pageTitle.parentNode.insertBefore(tocContainer, pageTitle.nextElementSibling);
        } else if (firstParagraph) {
            firstParagraph.parentNode.insertBefore(tocContainer, firstParagraph);
        } else {
            mainContent.insertBefore(tocContainer, mainContent.firstChild);
        }

        // Add toggle functionality
        const toggleButton = tocContainer.querySelector('.toc-toggle');
        toggleButton.addEventListener('click', function() {
            tocContainer.classList.toggle('collapsed');
        });

        // Highlight current section on scroll
        highlightCurrentSection(headings);
    }

    function generateId(text) {
        return text
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Remove special characters
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-') // Remove duplicate hyphens
            .substring(0, 50); // Limit length
    }

    function highlightCurrentSection(headings) {
        if (!headings.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.id;
                    const tocLink = document.querySelector(`.toc-list a[href="#${id}"]`);
                    
                    if (tocLink) {
                        if (entry.isIntersecting) {
                            // Remove active class from all links
                            document.querySelectorAll('.toc-list a').forEach(link => {
                                link.classList.remove('active');
                            });
                            // Add active class to current link
                            tocLink.classList.add('active');
                        }
                    }
                });
            },
            {
                rootMargin: '-100px 0px -80% 0px'
            }
        );

        headings.forEach((heading) => {
            observer.observe(heading);
        });
    }
})();
