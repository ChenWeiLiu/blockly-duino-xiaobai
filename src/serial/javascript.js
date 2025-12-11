// Serial Communication Code Generation

Blockly.Arduino['xiaobai_serial_begin'] = function (block) {
    var serial_name = block.getFieldValue('SERIAL_NAME');
    var baud_rate = block.getFieldValue('BAUD_RATE');

    Blockly.Arduino.setups_['setup_serial_' + serial_name] = serial_name + '.begin(' + baud_rate + ');';

    return '';
};

Blockly.Arduino['xiaobai_serial_end'] = function (block) {
    var serial_name = block.getFieldValue('SERIAL_NAME');
    var code = serial_name + '.end();\n';
    return code;
};

Blockly.Arduino['xiaobai_serial_print'] = function (block) {
    var serial_name = block.getFieldValue('SERIAL_NAME');
    var text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '""';
    var code = serial_name + '.print(' + text + ');\n';
    return code;
};

Blockly.Arduino['xiaobai_serial_println'] = function (block) {
    var serial_name = block.getFieldValue('SERIAL_NAME');
    var text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '""';
    var code = serial_name + '.println(' + text + ');\n';
    return code;
};

Blockly.Arduino['xiaobai_serial_available'] = function (block) {
    var serial_name = block.getFieldValue('SERIAL_NAME');
    var code = serial_name + '.available()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['xiaobai_serial_read'] = function (block) {
    var serial_name = block.getFieldValue('SERIAL_NAME');
    var code = serial_name + '.read()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// Serial ReadStringUntil Code Generation (改良版)
Blockly.Arduino['xiaobai_serial_readstringuntil'] = function (block) {
    var serial_name = block.getFieldValue('SERIAL_NAME');
    var char_value = Blockly.Arduino.valueToCode(block, 'CHAR', Blockly.Arduino.ORDER_ATOMIC) || "'\\n'";
    var statements = Blockly.Arduino.statementToCode(block, 'STATEMENT');

    // 定義全域變數 serialStr
    Blockly.Arduino.definitions_['define_serial_str'] = 'String serialStr = "";';

    // 生成程式碼：當有資料可讀時，讀取直到指定字元，並執行內部積木
    var code = 'if (' + serial_name + '.available()) {\n' +
        '  serialStr = "";\n' +
        '  while (' + serial_name + '.available()) {\n' +
        '    serialStr = ' + serial_name + '.readStringUntil(' + char_value + ');\n' +
        '    serialStr.replace("\\r", "");\n' +
        statements +
        '  }\n' +
        '}\n';
    return code;
};

// Serial Read Result Code Generation (新增)
Blockly.Arduino['xiaobai_serial_read_result'] = function (block) {
    var code = 'serialStr';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['xiaobai_breakline'] = function (block) {
    var code = "'\\n'";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
