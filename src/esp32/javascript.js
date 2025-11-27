// ==================== ESP32 數位/類比 I/O ====================

// ESP32 數位寫入
Blockly.Arduino['esp32_digital_write'] = function (block) {
    var pin = block.getFieldValue('PIN');
    var state = Blockly.Arduino.valueToCode(block, 'STATE',
        Blockly.Arduino.ORDER_ATOMIC) || 'LOW';

    Blockly.Arduino.setups_['setup_pin_' + pin] = 'pinMode(' + pin + ', OUTPUT);';

    var code = 'digitalWrite(' + pin + ', ' + state + ');\n';
    return code;
};

// ESP32 數位讀取
Blockly.Arduino['esp32_digital_read'] = function (block) {
    var pin = block.getFieldValue('PIN');

    Blockly.Arduino.setups_['setup_pin_' + pin] = 'pinMode(' + pin + ', INPUT);';

    var code = 'digitalRead(' + pin + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// ESP32 類比讀取
Blockly.Arduino['esp32_analog_read'] = function (block) {
    var pin = block.getFieldValue('PIN');
    var code = 'analogRead(' + pin + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// ESP32 PWM 輸出
Blockly.Arduino['esp32_pwm_write'] = function (block) {
    var pin = block.getFieldValue('PIN');
    var channel = Blockly.Arduino.valueToCode(block, 'CHANNEL',
        Blockly.Arduino.ORDER_ATOMIC) || '0';
    var value = Blockly.Arduino.valueToCode(block, 'VALUE',
        Blockly.Arduino.ORDER_ATOMIC) || '0';

    // 使用 ledcAttachChannel 替代 ledcAttach，參數順序：pin, freq, resolution, channel
    Blockly.Arduino.setups_['setup_pwm_attach_' + pin + '_' + channel] =
        'ledcAttachChannel(' + pin + ', 5000, 8, ' + channel + ');';

    var code = 'ledcWrite(' + pin + ', ' + value + ');\n';
    return code;
};

// ESP32 PWM 設定
Blockly.Arduino['esp32_pwm_setup'] = function (block) {
    var channel = Blockly.Arduino.valueToCode(block, 'CHANNEL',
        Blockly.Arduino.ORDER_ATOMIC) || '0';
    var freq = Blockly.Arduino.valueToCode(block, 'FREQ',
        Blockly.Arduino.ORDER_ATOMIC) || '5000';
    var resolution = Blockly.Arduino.valueToCode(block, 'RESOLUTION',
        Blockly.Arduino.ORDER_ATOMIC) || '8';
    var pin = '2';  // 預設腳位，實際會在 pwm_write 中設定

    Blockly.Arduino.setups_['setup_pwm_config_' + channel] =
        '// PWM 通道 ' + channel + ' 設定: ' + freq + 'Hz, ' + resolution + ' 位元';

    var code = '// PWM 通道 ' + channel + ' 已設定\n';
    return code;
};

// ESP32 引腳模式設定
Blockly.Arduino['esp32_pin_mode'] = function (block) {
    var pin = block.getFieldValue('PIN');
    var mode = block.getFieldValue('MODE');

    Blockly.Arduino.setups_['setup_pin_mode_' + pin] =
        'pinMode(' + pin + ', ' + mode + ');';

    var code = '// GPIO' + pin + ' 設為 ' + mode + '\n';
    return code;
};

// ESP32 DAC 類比輸出
Blockly.Arduino['esp32_dac_write'] = function (block) {
    var pin = block.getFieldValue('PIN');
    var value = Blockly.Arduino.valueToCode(block, 'VALUE',
        Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'dacWrite(' + pin + ', ' + value + ');\n';
    return code;
};
