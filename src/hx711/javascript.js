// HX711 初始化
Blockly.Arduino['hx711_init'] = function (block) {
    var num = block.getFieldValue('NUM');
    var dout = block.getFieldValue('DOUT');
    var sck = block.getFieldValue('SCK');
    var rate = block.getFieldValue('RATE') || '10';  // 預設 10Hz

    Blockly.Arduino.definitions_['include_hx711'] = '#include <HX711.h>';
    Blockly.Arduino.definitions_['define_hx711_' + num] =
        'HX711 scale_' + num + ';\n' +
        'const int LOADCELL_DOUT_PIN_' + num + ' = ' + dout + ';\n' +
        'const int LOADCELL_SCK_PIN_' + num + ' = ' + sck + ';';

    var setupCode = 'scale_' + num + '.begin(LOADCELL_DOUT_PIN_' + num + ', LOADCELL_SCK_PIN_' + num + ');\n';

    // 設定採樣率
    if (rate === '80') {
        setupCode += '  scale_' + num + '.set_gain(128);\n';  // 80Hz 模式
        setupCode += '  // 注意：80Hz 模式需要 HX711 的 RATE 引腳接高電位\n';
    }

    setupCode += '  scale_' + num + '.set_scale();\n';
    setupCode += '  scale_' + num + '.tare();';

    Blockly.Arduino.setups_['setup_hx711_' + num] = setupCode;

    var code = '// HX711 #' + num + ' 已初始化 (' + rate + 'Hz)\n';
    return code;
};

// HX711 讀取重量
Blockly.Arduino['hx711_read'] = function (block) {
    var num = block.getFieldValue('NUM');
    var avgTimes = block.getFieldValue('AVG_TIMES') || '10';  // 預設 10 次
    var code = 'scale_' + num + '.get_units(' + avgTimes + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// HX711 去皮歸零
Blockly.Arduino['hx711_tare'] = function (block) {
    var num = block.getFieldValue('NUM');
    var code = 'scale_' + num + '.tare();\n';
    return code;
};

// HX711 校準
Blockly.Arduino['hx711_calibrate'] = function (block) {
    var num = block.getFieldValue('NUM');
    var scale_factor = Blockly.Arduino.valueToCode(block, 'SCALE',
        Blockly.Arduino.ORDER_ATOMIC) || '1';
    var code = 'scale_' + num + '.set_scale(' + scale_factor + ');\n';
    return code;
};

// HX711 讀取原始值
Blockly.Arduino['hx711_read_raw'] = function (block) {
    var num = block.getFieldValue('NUM');
    var code = 'scale_' + num + '.read()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// HX711 設定增益
Blockly.Arduino['hx711_set_gain'] = function (block) {
    var num = block.getFieldValue('NUM');
    var gain = block.getFieldValue('GAIN');
    var code = 'scale_' + num + '.set_gain(' + gain + ');\n';
    return code;
};

// HX711 檢測是否準備好
Blockly.Arduino['hx711_is_ready'] = function (block) {
    var num = block.getFieldValue('NUM');
    var code = 'scale_' + num + '.is_ready()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
