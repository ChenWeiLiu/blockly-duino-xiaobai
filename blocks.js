// 使用固定相對路徑載入子模組（確保在 toolbox 渲染前完成）
(function () {
    var basePath = '';  // GitHub Pages 使用空路徑，本地使用 'customBlocks/xiaobai/'
    var scripts = [
        basePath + 'src/hx711/blocks.js',
        basePath + 'src/serial/blocks.js',
        basePath + 'src/esp32/blocks.js',
        basePath + 'src/ds18b20/blocks.js',
        basePath + 'src/sdcard/blocks.js'
    ];

    for (var i = 0; i < scripts.length; i++) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', scripts[i], false); // 同步請求
        xhr.send();
        if (xhr.status === 200) {
            eval(xhr.responseText);
        }
    }
})();
