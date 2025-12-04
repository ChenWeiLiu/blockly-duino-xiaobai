// 使用同步 AJAX 載入子模組（確保在 toolbox 渲染前完成）
(function () {
    var basePath = 'customBlocks/xiaobai/';
    var scripts = [
        basePath + 'src/hx711/blocks.js',
        basePath + 'src/esp32/blocks.js'
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
