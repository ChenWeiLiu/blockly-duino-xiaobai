// 使用固定相對路徑載入子模組（確保在 toolbox 渲染前完成）
(function () {
    // 動態檢測基礎路徑
    var currentScript = document.currentScript || (function () {
        var scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1];
    })();

    var basePath = '';
    if (currentScript && currentScript.src) {
        var scriptUrl = currentScript.src;
        // 如果是從 GitHub Pages 載入，使用完整 URL 路徑
        if (scriptUrl.indexOf('github.io') !== -1) {
            basePath = scriptUrl.substring(0, scriptUrl.lastIndexOf('/') + 1);
        } else if (scriptUrl.indexOf('customBlocks/xiaobai/') !== -1) {
            // 本地路徑
            basePath = 'customBlocks/xiaobai/';
        }
    }

    var scripts = [
        basePath + 'src/hx711/blocks.js',
        basePath + 'src/serial/blocks.js',
        basePath + 'src/esp32/blocks.js',
        basePath + 'src/ds18b20/blocks.js',
        basePath + 'src/sdcard/blocks.js',
        basePath + 'src/drv8825/blocks.js',
        basePath + 'src/espnow/blocks.js',
        basePath + 'src/tjc_display/blocks.js',
        basePath + 'src/ina219/blocks.js',
        basePath + 'src/tcs3200/blocks.js',
        basePath + 'src/max31865/blocks.js',
        basePath + 'src/ili9486_spi/blocks.js',
        basePath + 'src/tjc3224t124/blocks.js'
    ];

    for (var i = 0; i < scripts.length; i++) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', scripts[i] + '?v=1', false); // 強制重新載入
        xhr.send();
        if (xhr.status === 200) {
            eval(xhr.responseText);
        }
    }
})();
