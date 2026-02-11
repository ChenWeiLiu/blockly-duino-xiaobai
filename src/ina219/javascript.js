// INA219 初始化
Blockly.Arduino['ina219_init'] = function (block) {
    var num = block.getFieldValue('NUM');
    var addr = block.getFieldValue('ADDR');

    Blockly.Arduino.definitions_['include_wire'] = '#include <Wire.h>';
    Blockly.Arduino.definitions_['include_ina219'] = '#include <Adafruit_INA219.h>';
    Blockly.Arduino.definitions_['define_ina219_' + num] =
        'Adafruit_INA219 ina219_' + num + '(' + addr + ');';

    Blockly.Arduino.setups_['setup_ina219_' + num] =
        'ina219_' + num + '.begin();';

    var code = '// INA219 #' + num + ' 已初始化 (位址: ' + addr + ')\n';
    return code;
};

// INA219 讀取匯流排電壓 (V)
Blockly.Arduino['ina219_read_bus_voltage'] = function (block) {
    var num = block.getFieldValue('NUM');
    var code = 'ina219_' + num + '.getBusVoltage_V()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// INA219 讀取分流電壓 (mV)
Blockly.Arduino['ina219_read_shunt_voltage'] = function (block) {
    var num = block.getFieldValue('NUM');
    var code = 'ina219_' + num + '.getShuntVoltage_mV()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// INA219 讀取電流 (mA)
Blockly.Arduino['ina219_read_current'] = function (block) {
    var num = block.getFieldValue('NUM');
    var code = 'ina219_' + num + '.getCurrent_mA()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// INA219 讀取功率 (mW)
Blockly.Arduino['ina219_read_power'] = function (block) {
    var num = block.getFieldValue('NUM');
    var code = 'ina219_' + num + '.getPower_mW()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// INA219 設定校準範圍
Blockly.Arduino['ina219_set_calibration'] = function (block) {
    var num = block.getFieldValue('NUM');
    var range = block.getFieldValue('RANGE');
    var code = '';
    switch (range) {
        case '32V_2A':
            code = 'ina219_' + num + '.setCalibration_32V_2A();\n';
            break;
        case '32V_1A':
            code = 'ina219_' + num + '.setCalibration_32V_1A();\n';
            break;
        case '16V_400mA':
            code = 'ina219_' + num + '.setCalibration_16V_400mA();\n';
            break;
    }
    return code;
};
