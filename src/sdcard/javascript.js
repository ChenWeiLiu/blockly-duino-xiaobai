// MicroSD Card Adapter Code Generation

Blockly.Arduino['xiaobai_sd_init'] = function (block) {
    var cs_pin = block.getFieldValue('CS_PIN');

    // Add SD library include
    Blockly.Arduino.includes_['include_sd'] = '#include <SD.h>';
    Blockly.Arduino.includes_['include_spi'] = '#include <SPI.h>';

    // Global file object
    Blockly.Arduino.definitions_['define_sd_file'] = 'File sdFile;';

    // Initialize SD card in setup
    Blockly.Arduino.setups_['setup_sd'] =
        'if (!SD.begin(' + cs_pin + ')) {\n' +
        '  Serial.println("SD Card initialization failed!");\n' +
        '  return;\n' +
        '}\n' +
        'Serial.println("SD Card initialized.");';

    return '';
};

Blockly.Arduino['xiaobai_sd_open'] = function (block) {
    var filename = Blockly.Arduino.valueToCode(block, 'FILENAME', Blockly.Arduino.ORDER_ATOMIC) || '""';
    var mode = block.getFieldValue('MODE');

    var code = 'sdFile = SD.open(' + filename + ', ' + mode + ');\n';
    return code;
};

Blockly.Arduino['xiaobai_sd_close'] = function (block) {
    var code = 'if (sdFile) {\n  sdFile.close();\n}\n';
    return code;
};

Blockly.Arduino['xiaobai_sd_write'] = function (block) {
    var data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC) || '""';
    var code = 'if (sdFile) {\n  sdFile.print(' + data + ');\n}\n';
    return code;
};

Blockly.Arduino['xiaobai_sd_writeln'] = function (block) {
    var data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC) || '""';
    var code = 'if (sdFile) {\n  sdFile.println(' + data + ');\n}\n';
    return code;
};

Blockly.Arduino['xiaobai_sd_readln'] = function (block) {
    var code = 'sdFile.readStringUntil(\'\\n\')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['xiaobai_sd_available'] = function (block) {
    var code = '(sdFile && sdFile.available())';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['xiaobai_sd_exists'] = function (block) {
    var filename = Blockly.Arduino.valueToCode(block, 'FILENAME', Blockly.Arduino.ORDER_ATOMIC) || '""';
    var code = 'SD.exists(' + filename + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['xiaobai_sd_remove'] = function (block) {
    var filename = Blockly.Arduino.valueToCode(block, 'FILENAME', Blockly.Arduino.ORDER_ATOMIC) || '""';
    var code = 'SD.remove(' + filename + ');\n';
    return code;
};

Blockly.Arduino['xiaobai_sd_mkdir'] = function (block) {
    var dirname = Blockly.Arduino.valueToCode(block, 'DIRNAME', Blockly.Arduino.ORDER_ATOMIC) || '""';
    var code = 'SD.mkdir(' + dirname + ');\n';
    return code;
};
