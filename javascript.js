// 使用同步 AJAX 載入子模組
(function () {
    var basePath = 'customBlocks/xiaobai/';
    var scripts = [
        basePath + 'src/hx711/javascript.js',
        basePath + 'src/esp32/javascript.js'
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
