console.log("Portfolio Home Loaded");

// =====================
// Smooth scroll for anchor links
// =====================
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        if (link.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(link.getAttribute('href'))
                .scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// =====================
// Active link highlighting based on clean URLs
// =====================
const currentPath = window.location.pathname; // e.g., "/about", "/portfolio"
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname; // get path from full URL
    if (linkPath === currentPath || (linkPath === '/index.html' && currentPath === '/')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
