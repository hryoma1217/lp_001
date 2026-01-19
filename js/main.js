document.addEventListener('DOMContentLoaded', () => {
    
    // ---------------------------------------------
    // Mobile Menu Toggle (NEW!)
    // ---------------------------------------------
    const menuBtn = document.getElementById('menu-btn');
    const headerElement = document.getElementById('header'); // header要素全体
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // ボタンクリックでクラスを付け外し
    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            headerElement.classList.toggle('menu-open');
            
            // メニューが開いているときはスクロール禁止にする（UX向上）
            if (headerElement.classList.contains('menu-open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // メニュー内のリンクをクリックしたら閉じる
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
        threshold: 0.15 // 要素の15%が見えたら発火
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 一度表示したら監視を終了
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
            header.classList.add('bg-brand-bg/95', 'backdrop-blur-sm', 'shadow-sm', 'py-2');
            header.classList.remove('py-4');
        } else {
            header.classList.remove('bg-brand-bg/95', 'backdrop-blur-sm', 'shadow-sm', 'py-2');
            header.classList.add('py-4');
        }
    });

    // ---------------------------------------------
    // Smooth Scroll for Anchor Links
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