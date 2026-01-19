document.addEventListener('DOMContentLoaded', () => {
    
    // ---------------------------------------------
    // Mobile Menu Toggle
    // ---------------------------------------------
    const menuBtn = document.getElementById('menu-btn');
    const headerElement = document.getElementById('header');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            headerElement.classList.toggle('menu-open');
            
            // メニュー展開時はスクロール禁止
            if (headerElement.classList.contains('menu-open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            headerElement.classList.remove('menu-open');
            document.body.style.overflow = '';
        });
    });

    // ---------------------------------------------
    // Scroll Animation (Fade-in UP)
    // ---------------------------------------------
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 少しでも見えたら発火
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));

    // ---------------------------------------------
    // Header Scroll Effect
    // ---------------------------------------------
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-md', 'py-3');
            header.classList.remove('py-5');
        } else {
            header.classList.remove('shadow-md', 'py-3');
            header.classList.add('py-5');
        }
    });

    // ---------------------------------------------
    // Smooth Scroll
    // ---------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});