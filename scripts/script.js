document.addEventListener('DOMContentLoaded', function() {
    const navItems = [
        { href: 'hobbies.html', text: 'Hobbies' },
        { href: 'gallery.html', text: 'Gallery' },
        { href: 'Education.html', text: 'Education' },
        { href: 'Experience.html', text: 'Experience' },
        { href: 'Skills.html', text: 'Skills' },
        { href: 'Projects.html', text: 'Projects' }
    ];

    const container = document.querySelector('.nav-buttons-box') || document.getElementById('nav-buttons-box');
    if (!container) return;

    navItems.forEach(item => {
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        container.appendChild(a);
    });
});
