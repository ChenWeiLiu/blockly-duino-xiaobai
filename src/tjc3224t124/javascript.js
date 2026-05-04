// TJC3224T124 串口屏（螢幕）Arduino 程式碼生成

// 螢幕初始化
Blockly.Arduino['xiaobai_tjc3224_init'] = function (block) {
    var serialName = block.getFieldValue('SERIAL_NAME');
    var baudRate = block.getFieldValue('BAUD_RATE');
    var rxPin = block.getFieldValue('RX_PIN');
    var txPin = block.getFieldValue('TX_PIN');

    // 儲存使用的串口名稱供其他積木使用
    Blockly.Arduino.definitions_['tjc3224_serial_name'] = 'HardwareSerial& tjc3224Serial = ' + serialName + ';';

    // 定義 TJC 指令結束碼發送函式
    Blockly.Arduino.definitions_['tjc3224_end_command'] =
        'void tjc3224EndCommand() {\n' +
        '  tjc3224Serial.write(0xFF);\n' +
        '  tjc3224Serial.write(0xFF);\n' +
        '  tjc3224Serial.write(0xFF);\n' +
        '}\n';

    // 定義觸控事件變數
    Blockly.Arduino.definitions_['tjc3224_touch_vars'] =
        'int tjc3224TouchPage = -1;\n' +
        'int tjc3224TouchId = -1;\n' +
        'int tjc3224TouchEvent = -1;\n';

    // 在 setup 中初始化串口
    if (serialName === 'Serial') {
        Blockly.Arduino.setups_['setup_tjc3224_serial'] = serialName + '.begin(' + baudRate + ');';
    } else {
        // Serial1 或 Serial2 需要指定 RX/TX 腳位
        Blockly.Arduino.setups_['setup_tjc3224_serial'] = serialName + '.begin(' + baudRate + ', SERIAL_8N1, ' + rxPin + ', ' + txPin + ');';
    }

    return '';
};

// 設定文字元件
Blockly.Arduino['xiaobai_tjc3224_set_text'] = function (block) {
    var component = block.getFieldValue('COMPONENT');
    var text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '""';

    var code = 'tjc3224Serial.print("' + component + '.txt=\\"");\n' +
        'tjc3224Serial.print(' + text + ');\n' +
        'tjc3224Serial.print("\\"");\n' +
        'tjc3224EndCommand();\n';
    return code;
};

// 設定數值元件
Blockly.Arduino['xiaobai_tjc3224_set_number'] = function (block) {
    var component = block.getFieldValue('COMPONENT');
    var value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'tjc3224Serial.print("' + component + '.val=");\n' +
        'tjc3224Serial.print(' + value + ');\n' +
        'tjc3224EndCommand();\n';
    return code;
};

// 切換頁面
Blockly.Arduino['xiaobai_tjc3224_set_page'] = function (block) {
    var pageId = block.getFieldValue('PAGE_ID');

    var code = 'tjc3224Serial.print("page ' + pageId + '");\n' +
        'tjc3224EndCommand();\n';
    return code;
};

// 設定元件可見性
Blockly.Arduino['xiaobai_tjc3224_set_visibility'] = function (block) {
    var component = block.getFieldValue('COMPONENT');
    var visible = block.getFieldValue('VISIBLE');

    var code = 'tjc3224Serial.print("vis ' + component + ',' + visible + '");\n' +
        'tjc3224EndCommand();\n';
    return code;
};

// 設定進度條
Blockly.Arduino['xiaobai_tjc3224_set_progress'] = function (block) {
    var component = block.getFieldValue('COMPONENT');
    var value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'tjc3224Serial.print("' + component + '.val=");\n' +
        'tjc3224Serial.print(constrain(' + value + ', 0, 100));\n' +
        'tjc3224EndCommand();\n';
    return code;
};

// 監聽觸控事件
Blockly.Arduino['xiaobai_tjc3224_on_touch'] = function (block) {
    var statements = Blockly.Arduino.statementToCode(block, 'STATEMENT');

    // 定義解析觸控事件的函式
    Blockly.Arduino.definitions_['tjc3224_parse_touch'] =
        'bool tjc3224ParseTouchEvent() {\n' +
        '  if (tjc3224Serial.available() >= 7) {\n' +
        '    uint8_t header = tjc3224Serial.read();\n' +
        '    if (header == 0x65) {\n' +
        '      tjc3224TouchPage = tjc3224Serial.read();\n' +
        '      tjc3224TouchId = tjc3224Serial.read();\n' +
        '      tjc3224TouchEvent = tjc3224Serial.read();\n' +
        '      // 讀取結束碼 0xFF 0xFF 0xFF\n' +
        '      tjc3224Serial.read();\n' +
        '      tjc3224Serial.read();\n' +
        '      tjc3224Serial.read();\n' +
        '      return true;\n' +
        '    }\n' +
        '  }\n' +
        '  return false;\n' +
        '}\n';

    var code = 'if (tjc3224ParseTouchEvent()) {\n' +
        statements +
        '}\n';
    return code;
};

// 取得觸控元件 ID
Blockly.Arduino['xiaobai_tjc3224_touch_id'] = function (block) {
    var code = 'tjc3224TouchId';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 取得觸控頁面 ID
Blockly.Arduino['xiaobai_tjc3224_touch_page'] = function (block) {
    var code = 'tjc3224TouchPage';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
