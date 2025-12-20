document.addEventListener("DOMContentLoaded", () => {
    
    // 深淺色模式切換
    const toggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // 檢查是否有儲存的設定，沒有則預設 'dark'
    let currentTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    if(toggleBtn){
        toggleBtn.addEventListener('click', () => {
            let newTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if(toggleBtn) {
            // 切換太陽/月亮符號
            toggleBtn.textContent = theme === 'dark' ? '☀' : '☾';
        }
    }

    // 手機版漢堡選單
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if(hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // 切換漢堡圖示 (三條線 <-> X)
            hamburger.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        });

        // 點擊連結後自動收合選單
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.textContent = '☰';
            });
        });
    }
});
