// === 1. 新增：切換頁籤的工具函式 (放在最全域的位置) ===
window.switchTab = function(type) {
    // 1. 處理按鈕樣式
    // 找到所有按鈕，移除 active
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    // 把被點擊的那個按鈕加上 active (利用 onclick 的 event.target 是抓不到的，因為我們直接傳字串)
    // 這裡我們用屬性選擇器來抓對應的按鈕
    document.querySelector(`.tab-btn[onclick="switchTab('${type}')"]`).classList.add('active');

    // 2. 處理內容顯示
    // 隱藏所有內容
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    // 顯示對應 ID 的內容
    document.getElementById(`code-${type}`).classList.add('active');
};

document.addEventListener("DOMContentLoaded", () => {
    
    const layout = document.getElementById('csLayout');
    const listContainer = document.getElementById('categoryList');
    const viewer = document.getElementById('contentViewer');
    
    function renderCategories() {
        listContainer.innerHTML = ''; 
        
        csData.forEach((cat, index) => {
            const catDiv = document.createElement('div');
            catDiv.className = 'cs-category-item';
            catDiv.id = `cat-${index}`; 
            
            catDiv.innerHTML = `
                <div class="cs-category-header" onclick="toggleCategory(${index})">
                    <div class="cat-title">${cat.title}</div>
                    <div class="cat-meta">${cat.meta}</div>
                </div>
                <div class="cs-sub-list">
                    ${cat.items.map((item, itemIndex) => `
                        <div class="sub-item" id="sub-item-${index}-${itemIndex}" onclick="showContent(event, ${index}, ${itemIndex})">
                            <div class="sub-item-header" style="display:flex; justify-content:space-between; width:100%;">
                                <span>${item.name}</span>
                                <span style="font-size:0.8rem; opacity:0.6;">${item.tools}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            listContainer.appendChild(catDiv);
        });
    }

    // 切換類別
    window.toggleCategory = function(index) {
        if (window.innerWidth > 768) {
            layout.classList.add('mode-split');
        }

        const clickedItem = document.getElementById(`cat-${index}`);
        const isAlreadyActive = clickedItem.classList.contains('active');

        if (isAlreadyActive) {
            clickedItem.classList.remove('active');
        } else {
            document.querySelectorAll('.cs-category-item').forEach(el => el.classList.remove('active'));
            clickedItem.classList.add('active');
        }
        
        // 手機版自動捲動優化
        if(window.innerWidth <= 768) {
            setTimeout(() => {
                const navbarHeight = 70;
                // 增加緩衝高度，確保不會貼太緊，讓上面的細項露出來
                const buffer = 30; 
                
                // 計算目標位置
                const elementPosition = clickedItem.getBoundingClientRect().top + window.scrollY;
                
                window.scrollTo({
                    top: elementPosition - navbarHeight - buffer,
                    behavior: "smooth"
                });
            }, 300);
        }
    }

    // 返回列表 (電腦版)
    window.backToOverview = function() {
        layout.classList.remove('mode-split');
        document.querySelectorAll('.cs-category-item').forEach(el => el.classList.remove('active'));
        viewer.innerHTML = `<div class="placeholder-text">&lt; 請點擊左側細項以檢視內容 /&gt;</div>`;
    }
    
    // 回到頂部 (手機版)
    window.scrollToTop = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 顯示內容
    window.showContent = function(event, catIndex, itemIndex) {
        event.stopPropagation();
        
        const data = csData[catIndex].items[itemIndex];
        const isMobile = window.innerWidth <= 768;

        document.querySelectorAll('.sub-item').forEach(el => el.classList.remove('active'));
        const currentSubItem = document.getElementById(`sub-item-${catIndex}-${itemIndex}`);
        currentSubItem.classList.add('active');

        if (!isMobile) {
            updateDesktopViewer(data);
        } else {
            let mobileContent = currentSubItem.querySelector('.mobile-content-wrapper');

            if (mobileContent && mobileContent.classList.contains('show')) {
                mobileContent.classList.remove('show');
                setTimeout(() => mobileContent.remove(), 300);
                currentSubItem.classList.remove('active');
                return;
            }

            document.querySelectorAll('.mobile-content-wrapper').forEach(el => el.remove());
            
            const contentDiv = document.createElement('div');
            contentDiv.className = 'mobile-content-wrapper show';
            contentDiv.innerHTML = generateContentHtml(data);
            currentSubItem.appendChild(contentDiv);
            processCodeBlocks(contentDiv);
        }
    }

    function updateDesktopViewer(data) {
        viewer.innerHTML = generateContentHtml(data);
        processCodeBlocks(viewer);
    }

    function generateContentHtml(data) {
        const paddingStyle = window.innerWidth <= 768 ? 'padding:0;' : '';
        
        let previewHtml = '';
        let sourceCodeHtml = '';

        // === 情境 A: 多檔案組合 (HTML + CSS + JS) ===
        if (data.multiFiles) {
            // 1. 定義語言設定檔 (以後要加新語言，改這裡就好！)
            // key: 資料檔用的名稱, label: 按鈕顯示文字, langClass: Prism.js 的顏色類別
            const langConfig = {
                html:   { label: 'HTML',   langClass: 'html' },
                css:    { label: 'CSS',    langClass: 'css' },
                js:     { label: 'JS',     langClass: 'javascript' },
                python: { label: 'Python', langClass: 'python' },
                php:    { label: 'PHP',    langClass: 'php' },
                java:   { label: 'Java',   langClass: 'java' },
                c:      { label: 'C',      langClass: 'c' }
            };

            // 2. 處理預覽視窗 (只有 HTML/CSS/JS 能在瀏覽器預覽)
            // 如果資料裡有 html，我們就嘗試建立預覽
            if (data.multiFiles.html && !data.hidePreview) {
                const combinedCode = `
                    <html>
                    <head>
                        <style>${data.multiFiles.css || ''}</style>
                    </head>
                    <body>
                        ${data.multiFiles.html}
                        <script>
                            ${data.multiFiles.js || ''}
                        <\/script>
                    </body>
                    </html>
                `;
                const encodedCode = encodeURIComponent(combinedCode);
                previewHtml = `
                <h3 style="margin-top: 30px;">模擬網站頁面</h3>
                    <div class="browser-mockup" style="margin-top: 30px;">
                        <div class="browser-header">
                            <div class="browser-actions"><div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div></div>
                            <div class="browser-address-bar">live-preview</div>
                        </div>
                        <iframe class="preview-frame" src="data:text/html;charset=utf-8,${encodedCode}"></iframe>
                    </div>
                `;
            }

            // 3. 動態產生頁籤按鈕與內容
            let tabsHtml = '';
            let contentHtml = '';
            let isFirst = true; // 用來標記第一個頁籤 (預設啟動)

            // 遍歷你在 data.multiFiles 裡寫的所有檔案
            for (const [key, code] of Object.entries(data.multiFiles)) {
                // 如果這個檔案沒有內容，或是我們不認識這個語言，就跳過
                if (!code || !langConfig[key]) continue;

                const config = langConfig[key];
                const activeClass = isFirst ? 'active' : '';
                
                // 產生按鈕
                tabsHtml += `<button class="tab-btn ${activeClass}" onclick="switchTab('${key}')">${config.label}</button>`;
                
                // 產生程式碼區塊
                contentHtml += `
                    <div id="code-${key}" class="tab-content ${activeClass}">
                        <pre><code class="language-${config.langClass}">${escapeHtml(dedent(code))}</code></pre>
                    </div>
                `;

                isFirst = false; // 第一個跑完了，後面的都不用預設啟動
            }

            sourceCodeHtml = `
                <h3 style="margin-top: 30px;">實作程式碼</h3>
                <div class="code-tabs-container">
                    <div class="tabs-header">
                        ${tabsHtml}
                    </div>
                    ${contentHtml}
                </div>
            `;
        }
        
        // === 情境 B: 舊有的單一檔案模式 (保持相容) ===
        else if (data.simulationCode) {
            // 程式碼區塊
            const encodedCode = encodeURIComponent(data.simulationCode);

            previewHtml = `
            <h3 style="margin-top: 30px;">模擬網站頁面</h3>
                <div class="browser-mockup" style="margin-top: 30px;">
                    <div class="browser-header">
                        <div class="browser-actions">
                            <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
                        </div>
                        <div class="browser-address-bar">live-preview</div>
                    </div>
                    <iframe class="preview-frame" src="data:text/html;charset=utf-8,${encodedCode}"></iframe>
                </div>
            `;

            sourceCodeHtml = `
                <h3 style="margin-top: 30px;">實作程式碼</h3>
                <br>
                <pre><code>${escapeHtml(data.simulationCode)}</code></pre>
            `;
        } 
        // 情境 B: 純後端/演算法代碼 (只有程式碼，沒有模擬畫面)
        else if (data.codeSnippet) {
            sourceCodeHtml = `
                <h3 style="margin-top: 30px;">實作程式碼</h3>
                <pre><code class="language-java">${escapeHtml(data.codeSnippet)}</code></pre>
            `;
        }
        const parsedContent = data.content ? marked.parse(dedent(data.content)) : '';

        // 組合 HTML
        return `
            <div class="markdown-body" style="${paddingStyle}">
                <h2 style="border-bottom: 2px solid var(--cs-main); padding-bottom:10px; margin-top:0;">${data.name}</h2>
                
                <div style="margin-bottom: 20px; color: var(--text-muted); font-family: 'Fira Code'; font-size: 0.85rem;">
                    工具：${data.tools}
                </div>
                
                <div class="content-body">${marked.parse(data.content)}</div>

                ${sourceCodeHtml}
                
                ${previewHtml} 

                </div>
        `;
    }

    // 把 "<h1>" 轉換成 "&lt;h1&gt;" 在網頁上顯示出程式碼
    function escapeHtml(text) {
        if (!text) return text;
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function processCodeBlocks(container) {
        const codeBlocks = container.querySelectorAll('pre code');
        codeBlocks.forEach(block => {
            const rawCode = block.textContent;
            const lines = rawCode.split('\n');
            if (lines[lines.length - 1] === '') lines.pop();
            const lineCount = lines.length;
            
            let lineNumbersHtml = '';
            for(let i=1; i<=lineCount; i++) {
                lineNumbersHtml += `${i}<br>`;
            }

            const wrapper = document.createElement('div');
            wrapper.className = 'code-block-wrapper';
            const lineCol = document.createElement('div');
            lineCol.className = 'line-numbers-col';
            lineCol.innerHTML = lineNumbersHtml;
            const codeCol = document.createElement('div');
            codeCol.className = 'code-content-col';
            const newCodeTag = document.createElement('code');
            newCodeTag.textContent = rawCode;
            codeCol.appendChild(newCodeTag);

            wrapper.appendChild(lineCol);
            wrapper.appendChild(codeCol);

            const originalPre = block.parentNode;
            originalPre.parentNode.replaceChild(wrapper, originalPre);
        });
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            window.scrollTo(0, 0);
            document.querySelectorAll('.mobile-content-wrapper').forEach(el => el.remove());
            const activeItem = document.querySelector('.sub-item.active');
            if (activeItem) {
                const parts = activeItem.id.split('-');
                const catIndex = parts[2];
                const itemIndex = parts[3];
                const data = csData[catIndex].items[itemIndex];
                layout.classList.add('mode-split');
                updateDesktopViewer(data);
            }
        } 
    });

    renderCategories();
});
