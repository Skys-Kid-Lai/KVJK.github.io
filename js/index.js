// js/index.js
document.addEventListener("DOMContentLoaded", () => {
    const scrollTrigger = document.getElementById('scrollTrigger');
    const stickyContent = document.querySelector('.sticky-content');
    const domainContainer = document.querySelector('.domain-container');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const triggerPoint = 100;

        // 個人簡介
        if (scrollY > triggerPoint) {
            stickyContent.classList.add('mode-split');
        } else {
            stickyContent.classList.remove('mode-split');
        }

        // 導覽列漸顯/漸隱邏輯
        if (domainContainer) {
            const rect = domainContainer.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // 當導覽列頂部進入視窗 ( rect.top < 視窗高度 * 0.9 )
            if (rect.top < windowHeight * 0.9) {
                domainContainer.classList.add('visible');
            } else {
                // 當導覽列再次跑出視窗下方 (往上捲回去)
                // 移除 visible 類別，CSS 會自動觸發 "opacity: 0" 和 "translateY(50px)" 的過渡
                domainContainer.classList.remove('visible');
            }
        }
    });

    // 手機版設定
    if (window.innerWidth <= 768) {
        stickyContent.classList.add('mode-split');
    }
});
