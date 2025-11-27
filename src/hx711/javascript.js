// HX711 初始化
Blockly.Arduino['hx711_init'] = function (block) {
    var num = block.getFieldValue('NUM');
    var dout = block.getFieldValue('DOUT');
    var sck = block.getFieldValue('SCK');

    Blockly.Arduino.definitions_['include_hx711'] = '#include <HX711.h>';
    Blockly.Arduino.definitions_['define_hx711_' + num] =
        'HX711 scale_' + num + ';\n' +
        'const int LOADCELL_DOUT_PIN_' + num + ' = ' + dout + ';\n' +
        'const int LOADCELL_SCK_PIN_' + num + ' = ' + sck + ';';

    Blockly.Arduino.setups_['setup_hx711_' + num] =
        'scale_' + num + '.begin(LOADCELL_DOUT_PIN_' + num + ', LOADCELL_SCK_PIN_' + num + ');\n' +
        '  scale_' + num + '.set_scale();\n' +
        '  scale_' + num + '.tare();';

    var code = '// HX711 #' + num + ' 已初始化\n';
    return code;
};

// HX711 讀取重量
Blockly.Arduino['hx711_read'] = function (block) {
    var num = block.getFieldValue('NUM');
    var code = 'scale_' + num + '.get_units(10)';
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
