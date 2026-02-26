const loadComponent = async (id, path) => {
    try {
        const response = await fetch(path);
        const html = await response.text();
        document.getElementById(id).innerHTML = html;
    } catch (err) {
        console.error("Error loading component:", path, err);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Aapke folder structure "component/" ke hisaab se paths
    loadComponent('navbar-placeholder', 'component/navbar.html');
    loadComponent('hero-placeholder', 'component/hero.html');
    loadComponent('about-placeholder', 'component/about.html');
    loadComponent('services-placeholder', 'component/services.html');
    loadComponent('portfolio-placeholder', 'component/portfolio.html');
    loadComponent('team-placeholder', 'component/team.html'); 
    loadComponent('testimonial-placeholder', 'component/testimonial.html');
    loadComponent('contact-placeholder', 'component/contact.html');
    loadComponent('footer-placeholder', 'component/footer.html');
});