// Handle theme toggle
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    const themeButton = document.getElementById('toggle-theme');
    themeButton.textContent = document.body.dataset.theme === 'dark' ? 'Light Mode' : 'Dark Mode';
});

// Handle navbar toggle for mobile
document.getElementById('nav-toggle').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle project filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');
        const projectCards = document.querySelectorAll('.card');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                card.style.opacity = '0'; // Start hidden for fade-in effect
                setTimeout(() => {
                    card.style.transition = 'opacity 0.5s ease';
                    card.style.opacity = '1'; // Fade-in effect
                }, 10); // Delay to trigger transition
            } else {
                card.style.opacity = '0'; // Fade-out effect
                setTimeout(() => {
                    card.style.display = 'none';
                }, 500); // Wait for fade-out transition
            }
        });
    });
});
