// 初始化 waifu-tips 提示和交互
window.addEventListener('load', function() {
    if (window.waifu_tips) {
        console.log('[Live2D] 初始化看板娘提示...');
        waifu_tips.init();
    }
});
