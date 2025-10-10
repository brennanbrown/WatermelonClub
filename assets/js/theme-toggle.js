// Theme Toggle - Light/Dark Mode 🍉
(function() {
    'use strict';

    // Get saved theme or default to system preference
    function getPreferredTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // Set theme
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateToggleButton(theme);
    }

    // Update toggle button appearance
    function updateToggleButton(theme) {
        const toggle = document.getElementById('theme-toggle');
        if (!toggle) return;

        if (theme === 'dark') {
            toggle.setAttribute('aria-label', 'Switch to light mode');
            toggle.innerHTML = '🌙';
            toggle.title = 'Dark mode';
        } else {
            toggle.setAttribute('aria-label', 'Switch to dark mode');
            toggle.innerHTML = '☀️';
            toggle.title = 'Light mode';
        }
    }

    // Toggle theme
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    // Initialize theme on page load
    function initTheme() {
        const theme = getPreferredTheme();
        setTheme(theme);

        // Add click handler to toggle button
        const toggle = document.getElementById('theme-toggle');
        if (toggle) {
            toggle.addEventListener('click', toggleTheme);
        }
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });

    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }
})();
