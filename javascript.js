// 使用固定相對路徑載入子模組
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
        basePath + 'src/hx711/javascript.js',
        basePath + 'src/serial/javascript.js',
        basePath + 'src/esp32/javascript.js',
        basePath + 'src/ds18b20/javascript.js',
        basePath + 'src/sdcard/javascript.js',
        basePath + 'src/drv8825/javascript.js',
        basePath + 'src/espnow/javascript.js'
    ];

    for (var i = 0; i < scripts.length; i++) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', scripts[i] + '?v=1', false);
        xhr.send();
        if (xhr.status === 200) {
            eval(xhr.responseText);
        }
    }
})();
