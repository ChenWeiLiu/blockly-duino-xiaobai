// Science Fair Blocks Menu
Blockly.Msg["XIAOBAI"] = "Science Fair Blocks";
Blockly.Msg["XIAOBAI_HUE"] = "160";

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
        basePath + 'src/hx711/en.js',
        basePath + 'src/serial/en.js',
        basePath + 'src/esp32/en.js',
        basePath + 'src/ds18b20/en.js',
        basePath + 'src/sdcard/en.js',
        basePath + 'src/drv8825/en.js',
        basePath + 'src/espnow/en.js',
        basePath + 'src/tjc_display/en.js',
        basePath + 'src/ina219/en.js',
        basePath + 'src/tcs3200/en.js',
        basePath + 'src/max31865/en.js'
    ];

    for (var i = 0; i < scripts.length; i++) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', scripts[i], false);
        xhr.send();
        if (xhr.status === 200) {
            eval(xhr.responseText);
        }
    }
})();
