// Smooth scrolling for nav links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Fade-in sections on scroll
const sections = document.querySelectorAll('.section, .project-card, .hero');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.classList.add('opacity-0'); // hide initially
    observer.observe(section);
});

// Back-to-top button
const topBtn = document.createElement('button');
topBtn.innerText = '↑';
topBtn.id = 'backToTop';
document.body.appendChild(topBtn);

topBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 10px 15px;
    font-size: 20px;
    background: #22c55e;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 1000;
`;

topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show button on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});

// Project hover animations
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s';
        card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.5)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});

console.log("Portfolio JS enhanced 🔥");
