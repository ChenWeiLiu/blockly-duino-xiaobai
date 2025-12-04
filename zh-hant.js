// 小白積木
Blockly.Msg["XIAOBAI"] = "小白積木";
Blockly.Msg["XIAOBAI_HUE"] = "160";

// 動態檢測當前腳本路徑
(function () {
    var currentScript = document.currentScript || (function () {
        var scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1];
    })();

    var basePath = currentScript.src.substring(0, currentScript.src.lastIndexOf('/') + 1);

    var scripts = [
        basePath + 'src/hx711/zh-hant.js',
        basePath + 'src/esp32/zh-hant.js'
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
