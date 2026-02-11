// TCS3200 初始化
Blockly.Arduino['tcs3200_init'] = function (block) {
    var s0 = block.getFieldValue('S0');
    var s1 = block.getFieldValue('S1');
    var s2 = block.getFieldValue('S2');
    var s3 = block.getFieldValue('S3');
    var out = block.getFieldValue('OUT');

    Blockly.Arduino.definitions_['define_tcs3200_pins'] =
        '// TCS3200 腳位定義\n' +
        'const int TCS3200_S0 = ' + s0 + ';\n' +
        'const int TCS3200_S1 = ' + s1 + ';\n' +
        'const int TCS3200_S2 = ' + s2 + ';\n' +
        'const int TCS3200_S3 = ' + s3 + ';\n' +
        'const int TCS3200_OUT = ' + out + ';';

    Blockly.Arduino.definitions_['define_tcs3200_read_func'] =
        '// TCS3200 讀取顏色頻率函式\n' +
        'int tcs3200_readColor(int s2Val, int s3Val) {\n' +
        '  digitalWrite(TCS3200_S2, s2Val);\n' +
        '  digitalWrite(TCS3200_S3, s3Val);\n' +
        '  delay(100);\n' +
        '  return pulseIn(TCS3200_OUT, LOW);\n' +
        '}';

    Blockly.Arduino.definitions_['define_tcs3200_detect_func'] =
        '// TCS3200 偵測顏色名稱函式\n' +
        'String tcs3200_detectColor() {\n' +
        '  int red = tcs3200_readColor(LOW, LOW);\n' +
        '  int green = tcs3200_readColor(HIGH, HIGH);\n' +
        '  int blue = tcs3200_readColor(LOW, HIGH);\n' +
        '  if (red < green && red < blue) {\n' +
        '    if (red < 40) return "Red";\n' +
        '    if (green < 60) return "Yellow";\n' +
        '    return "Red";\n' +
        '  } else if (green < red && green < blue) {\n' +
        '    return "Green";\n' +
        '  } else if (blue < red && blue < green) {\n' +
        '    return "Blue";\n' +
        '  }\n' +
        '  if (red < 50 && green < 50 && blue < 50) return "White";\n' +
        '  return "Black";\n' +
        '}';

    Blockly.Arduino.setups_['setup_tcs3200'] =
        'pinMode(TCS3200_S0, OUTPUT);\n' +
        '  pinMode(TCS3200_S1, OUTPUT);\n' +
        '  pinMode(TCS3200_S2, OUTPUT);\n' +
        '  pinMode(TCS3200_S3, OUTPUT);\n' +
        '  pinMode(TCS3200_OUT, INPUT);\n' +
        '  // 預設頻率縮放 20%\n' +
        '  digitalWrite(TCS3200_S0, HIGH);\n' +
        '  digitalWrite(TCS3200_S1, LOW);';

    var code = '// TCS3200 已初始化 (S0=' + s0 + ', S1=' + s1 +
        ', S2=' + s2 + ', S3=' + s3 + ', OUT=' + out + ')\n';
    return code;
};

// TCS3200 讀取顏色頻率
Blockly.Arduino['tcs3200_read_color'] = function (block) {
    var color = block.getFieldValue('COLOR');
    var code = '';
    switch (color) {
        case 'RED':
            code = 'tcs3200_readColor(LOW, LOW)';
            break;
        case 'GREEN':
            code = 'tcs3200_readColor(HIGH, HIGH)';
            break;
        case 'BLUE':
            code = 'tcs3200_readColor(LOW, HIGH)';
            break;
        case 'CLEAR':
            code = 'tcs3200_readColor(HIGH, LOW)';
            break;
    }
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// TCS3200 讀取 RGB
Blockly.Arduino['tcs3200_read_rgb'] = function (block) {
    var redVar = block.getFieldValue('RED_VAR');
    var greenVar = block.getFieldValue('GREEN_VAR');
    var blueVar = block.getFieldValue('BLUE_VAR');

    Blockly.Arduino.definitions_['define_tcs3200_rgb_vars'] =
        'int ' + redVar + ' = 0;\n' +
        'int ' + greenVar + ' = 0;\n' +
        'int ' + blueVar + ' = 0;';

    var code = redVar + ' = tcs3200_readColor(LOW, LOW);\n' +
        greenVar + ' = tcs3200_readColor(HIGH, HIGH);\n' +
        blueVar + ' = tcs3200_readColor(LOW, HIGH);\n';
    return code;
};

// TCS3200 偵測顏色名稱
Blockly.Arduino['tcs3200_detect_color'] = function (block) {
    var code = 'tcs3200_detectColor()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// TCS3200 設定頻率縮放
Blockly.Arduino['tcs3200_set_frequency'] = function (block) {
    var freq = block.getFieldValue('FREQ');
    var code = '';
    switch (freq) {
        case 'OFF':
            code = 'digitalWrite(TCS3200_S0, LOW);\ndigitalWrite(TCS3200_S1, LOW);\n';
            break;
        case '2':
            code = 'digitalWrite(TCS3200_S0, LOW);\ndigitalWrite(TCS3200_S1, HIGH);\n';
            break;
        case '20':
            code = 'digitalWrite(TCS3200_S0, HIGH);\ndigitalWrite(TCS3200_S1, LOW);\n';
            break;
        case '100':
            code = 'digitalWrite(TCS3200_S0, HIGH);\ndigitalWrite(TCS3200_S1, HIGH);\n';
            break;
    }
    return code;
};
