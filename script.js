// ============================================
// 国际主义阅读资料库 · 交互脚本
// ============================================

(function() {
    'use strict';

    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.discipline-section');

    // 切换学科显示
    function switchDiscipline(disciplineId) {
        // 更新按钮状态
        navButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.discipline === disciplineId);
        });

        // 更新内容区域
        sections.forEach(section => {
            const isTarget = section.id === disciplineId;
            section.classList.toggle('active', isTarget);
        });
    }

    // 绑定导航点击事件
    navButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const disciplineId = this.dataset.discipline;
            switchDiscipline(disciplineId);
            // 更新 URL hash
            history.pushState(null, '', '#' + disciplineId);
        });
    });

    // 页面加载时从 hash 恢复状态
    function initFromHash() {
        const hash = window.location.hash.replace('#', '');
        if (hash && document.getElementById(hash)) {
            switchDiscipline(hash);
        }
    }

    // 监听浏览器前进/后退
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.replace('#', '');
        if (hash && document.getElementById(hash)) {
            switchDiscipline(hash);
        }
    });

    // 初始化
    initFromHash();

})();
