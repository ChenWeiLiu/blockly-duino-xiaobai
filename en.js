// Xiaobai Blocks Menu
Blockly.Msg["XIAOBAI"] = "Xiaobai Blocks";
Blockly.Msg["XIAOBAI_HUE"] = "160";

// 使用固定相對路徑載入子模組
(function () {
    var basePath = '';  // GitHub Pages 使用空路徑，本地使用 'customBlocks/xiaobai/'
    var scripts = [
        basePath + 'src/hx711/en.js',
        basePath + 'src/serial/en.js',
        basePath + 'src/esp32/en.js',
        basePath + 'src/ds18b20/en.js',
        basePath + 'src/sdcard/en.js'
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
