/**
 * main.js
 * * 役割:
 * 1. スクロール連動アニメーション (Fade-in Up)
 * 2. スムーズスクロール
 * (ヘッダーのスクロール検知はCSSでの常時表示に変更したため削除)
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==============================================
    // 1. スクロール連動アニメーション (Fade-in Up)
    // ==============================================
    
    const animTargets = document.querySelectorAll('.scroll-anim');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    animTargets.forEach(target => {
        observer.observe(target);
    });


    // ==============================================
    // 2. ヘッダーのスクロール制御 (修正: 削除)
    // ヘッダーは常時表示となったため、このブロックは削除しました。
    // ==============================================
    

    // ==============================================
    // 3. スムーズスクロール (アンカーリンク)
    // ==============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});