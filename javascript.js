// 使用固定相對路徑載入子模組
(function () {
    var basePath = '';  // GitHub Pages 使用空路徑，本地使用 'customBlocks/xiaobai/'
    var scripts = [
        basePath + 'src/hx711/javascript.js',
        basePath + 'src/serial/javascript.js',
        basePath + 'src/esp32/javascript.js',
        basePath + 'src/ds18b20/javascript.js',
        basePath + 'src/sdcard/javascript.js'
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
