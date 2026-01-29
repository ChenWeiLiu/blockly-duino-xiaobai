// TJC3324T124 串口屏（螢幕）Arduino 程式碼生成

// 螢幕初始化
Blockly.Arduino['xiaobai_tjc_init'] = function (block) {
    var serialName = block.getFieldValue('SERIAL_NAME');
    var baudRate = block.getFieldValue('BAUD_RATE');
    var rxPin = block.getFieldValue('RX_PIN');
    var txPin = block.getFieldValue('TX_PIN');

    // 儲存使用的串口名稱供其他積木使用
    Blockly.Arduino.definitions_['tjc_serial_name'] = 'HardwareSerial& tjcSerial = ' + serialName + ';';

    // 定義 TJC 指令結束碼發送函式
    Blockly.Arduino.definitions_['tjc_end_command'] =
        'void tjcEndCommand() {\n' +
        '  tjcSerial.write(0xFF);\n' +
        '  tjcSerial.write(0xFF);\n' +
        '  tjcSerial.write(0xFF);\n' +
        '}\n';

    // 定義觸控事件變數
    Blockly.Arduino.definitions_['tjc_touch_vars'] =
        'int tjcTouchPage = -1;\n' +
        'int tjcTouchId = -1;\n' +
        'int tjcTouchEvent = -1;\n';

    // 在 setup 中初始化串口
    if (serialName === 'Serial') {
        Blockly.Arduino.setups_['setup_tjc_serial'] = serialName + '.begin(' + baudRate + ');';
    } else {
        // Serial1 或 Serial2 需要指定 RX/TX 腳位
        Blockly.Arduino.setups_['setup_tjc_serial'] = serialName + '.begin(' + baudRate + ', SERIAL_8N1, ' + rxPin + ', ' + txPin + ');';
    }

    return '';
};

// 設定文字元件
Blockly.Arduino['xiaobai_tjc_set_text'] = function (block) {
    var component = block.getFieldValue('COMPONENT');
    var text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '""';

    var code = 'tjcSerial.print("' + component + '.txt=\\"");\n' +
        'tjcSerial.print(' + text + ');\n' +
        'tjcSerial.print("\\"");\n' +
        'tjcEndCommand();\n';
    return code;
};

// 設定數值元件
Blockly.Arduino['xiaobai_tjc_set_number'] = function (block) {
    var component = block.getFieldValue('COMPONENT');
    var value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'tjcSerial.print("' + component + '.val=");\n' +
        'tjcSerial.print(' + value + ');\n' +
        'tjcEndCommand();\n';
    return code;
};

// 切換頁面
Blockly.Arduino['xiaobai_tjc_set_page'] = function (block) {
    var pageId = block.getFieldValue('PAGE_ID');

    var code = 'tjcSerial.print("page ' + pageId + '");\n' +
        'tjcEndCommand();\n';
    return code;
};

// 設定元件可見性
Blockly.Arduino['xiaobai_tjc_set_visibility'] = function (block) {
    var component = block.getFieldValue('COMPONENT');
    var visible = block.getFieldValue('VISIBLE');

    var code = 'tjcSerial.print("vis ' + component + ',' + visible + '");\n' +
        'tjcEndCommand();\n';
    return code;
};

// 設定進度條
Blockly.Arduino['xiaobai_tjc_set_progress'] = function (block) {
    var component = block.getFieldValue('COMPONENT');
    var value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'tjcSerial.print("' + component + '.val=");\n' +
        'tjcSerial.print(constrain(' + value + ', 0, 100));\n' +
        'tjcEndCommand();\n';
    return code;
};

// 監聽觸控事件
Blockly.Arduino['xiaobai_tjc_on_touch'] = function (block) {
    var statements = Blockly.Arduino.statementToCode(block, 'STATEMENT');

    // 定義解析觸控事件的函式
    Blockly.Arduino.definitions_['tjc_parse_touch'] =
        'bool tjcParseTouchEvent() {\n' +
        '  if (tjcSerial.available() >= 7) {\n' +
        '    uint8_t header = tjcSerial.read();\n' +
        '    if (header == 0x65) {\n' +
        '      tjcTouchPage = tjcSerial.read();\n' +
        '      tjcTouchId = tjcSerial.read();\n' +
        '      tjcTouchEvent = tjcSerial.read();\n' +
        '      // 讀取結束碼 0xFF 0xFF 0xFF\n' +
        '      tjcSerial.read();\n' +
        '      tjcSerial.read();\n' +
        '      tjcSerial.read();\n' +
        '      return true;\n' +
        '    }\n' +
        '  }\n' +
        '  return false;\n' +
        '}\n';

    var code = 'if (tjcParseTouchEvent()) {\n' +
        statements +
        '}\n';
    return code;
};

// 取得觸控元件 ID
Blockly.Arduino['xiaobai_tjc_touch_id'] = function (block) {
    var code = 'tjcTouchId';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 取得觸控頁面 ID
Blockly.Arduino['xiaobai_tjc_touch_page'] = function (block) {
    var code = 'tjcTouchPage';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
