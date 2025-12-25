// MicroSD Card Adapter Code Generation

Blockly.Arduino['xiaobai_sd_init'] = function (block) {
    var cs_pin = block.getFieldValue('CS_PIN');

    // Add SD library include
    Blockly.Arduino.definitions_['include_sd'] = '#include <SD.h>';
    Blockly.Arduino.definitions_['include_spi'] = '#include <SPI.h>';

    // Global file object and status
    Blockly.Arduino.definitions_['define_sd_file'] = 'File sdFile;';
    Blockly.Arduino.definitions_['define_sd_ready'] = 'bool sdCardReady = false;';

    // Initialize SD card in setup
    Blockly.Arduino.setups_['setup_sd'] =
        'sdCardReady = SD.begin(' + cs_pin + ');\\n' +
        'if (!sdCardReady) {\\n' +
        '  Serial.println(\"SD Card initialization failed!\");\\n' +
        '} else {\\n' +
        '  Serial.println(\"SD Card initialized.\");\\n' +
        '}';

    return '';
};

Blockly.Arduino['xiaobai_sd_is_ready'] = function (block) {
    // Ensure the status variable is defined
    if (!Blockly.Arduino.definitions_['define_sd_ready']) {
        Blockly.Arduino.definitions_['define_sd_ready'] = 'bool sdCardReady = false;';
    }

    var code = 'sdCardReady';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
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
    var code = 'SD.mkdir(' + dirname + ');\\n';
    return code;
};

// ============ 進階功能程式碼生成 ============

Blockly.Arduino['xiaobai_sd_init_custom'] = function (block) {
    var cs_pin = Blockly.Arduino.valueToCode(block, 'CS_PIN', Blockly.Arduino.ORDER_ATOMIC) || '5';
    var mosi_pin = Blockly.Arduino.valueToCode(block, 'MOSI_PIN', Blockly.Arduino.ORDER_ATOMIC) || '23';
    var miso_pin = Blockly.Arduino.valueToCode(block, 'MISO_PIN', Blockly.Arduino.ORDER_ATOMIC) || '19';
    var sck_pin = Blockly.Arduino.valueToCode(block, 'SCK_PIN', Blockly.Arduino.ORDER_ATOMIC) || '18';

    // Add SD library include
    Blockly.Arduino.definitions_['include_sd'] = '#include <SD.h>';
    Blockly.Arduino.definitions_['include_spi'] = '#include <SPI.h>';

    // Global file object and status
    Blockly.Arduino.definitions_['define_sd_file'] = 'File sdFile;';
    Blockly.Arduino.definitions_['define_sd_ready'] = 'bool sdCardReady = false;';

    // Custom SPI initialization
    Blockly.Arduino.setups_['setup_sd_spi'] =
        'SPI.begin(' + sck_pin + ', ' + miso_pin + ', ' + mosi_pin + ');';

    Blockly.Arduino.setups_['setup_sd'] =
        'sdCardReady = SD.begin(' + cs_pin + ', SPI);\\n' +
        'if (!sdCardReady) {\\n' +
        '  Serial.println("SD Card initialization failed!");\\n' +
        '} else {\\n' +
        '  Serial.println("SD Card initialized with custom SPI pins.");\\n' +
        '}';

    return '';
};

Blockly.Arduino['xiaobai_sd_file_var'] = function (block) {
    var var_name = Blockly.Arduino.valueToCode(block, 'VAR_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"sdFile"';
    var_name = var_name.replace(/"/g, ''); // Remove quotes

    // Define file variable globally
    if (!Blockly.Arduino.definitions_['define_sd_file_' + var_name]) {
        Blockly.Arduino.definitions_['define_sd_file_' + var_name] = 'File ' + var_name + ';';
    }

    return '';
};

Blockly.Arduino['xiaobai_sd_open_adv'] = function (block) {
    var var_name = Blockly.Arduino.valueToCode(block, 'VAR_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"sdFile"';
    var_name = var_name.replace(/"/g, '');
    var filename = Blockly.Arduino.valueToCode(block, 'FILENAME', Blockly.Arduino.ORDER_ATOMIC) || '""';
    var mode = block.getFieldValue('MODE');

    // Ensure the variable is defined
    if (!Blockly.Arduino.definitions_['define_sd_file_' + var_name]) {
        Blockly.Arduino.definitions_['define_sd_file_' + var_name] = 'File ' + var_name + ';';
    }

    var code = var_name + ' = SD.open(' + filename + ', ' + mode + ');\\n';
    return code;
};

Blockly.Arduino['xiaobai_sd_close_adv'] = function (block) {
    var var_name = Blockly.Arduino.valueToCode(block, 'VAR_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"sdFile"';
    var_name = var_name.replace(/"/g, '');

    var code = 'if (' + var_name + ') {\\n  ' + var_name + '.close();\\n}\\n';
    return code;
};

Blockly.Arduino['xiaobai_sd_write_adv'] = function (block) {
    var var_name = Blockly.Arduino.valueToCode(block, 'VAR_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"sdFile"';
    var_name = var_name.replace(/"/g, '');
    var data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC) || '""';

    var code = 'if (' + var_name + ') {\\n  ' + var_name + '.print(' + data + ');\\n}\\n';
    return code;
};

Blockly.Arduino['xiaobai_sd_writeln_adv'] = function (block) {
    var var_name = Blockly.Arduino.valueToCode(block, 'VAR_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"sdFile"';
    var_name = var_name.replace(/"/g, '');
    var data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC) || '""';

    var code = 'if (' + var_name + ') {\\n  ' + var_name + '.println(' + data + ');\\n}\\n';
    return code;
};

Blockly.Arduino['xiaobai_sd_readln_adv'] = function (block) {
    var var_name = Blockly.Arduino.valueToCode(block, 'VAR_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"sdFile"';
    var_name = var_name.replace(/"/g, '');

    var code = var_name + '.readStringUntil(\'\\n\')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['xiaobai_sd_available_adv'] = function (block) {
    var var_name = Blockly.Arduino.valueToCode(block, 'VAR_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"sdFile"';
    var_name = var_name.replace(/"/g, '');

    var code = '(' + var_name + ' && ' + var_name + '.available())';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['xiaobai_sd_rmdir'] = function (block) {
    var dirname = Blockly.Arduino.valueToCode(block, 'DIRNAME', Blockly.Arduino.ORDER_ATOMIC) || '""';
    var code = 'SD.rmdir(' + dirname + ');\\n';
    return code;
};
