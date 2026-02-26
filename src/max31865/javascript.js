// MAX31865 PT100 Temperature Sensor Code Generation

Blockly.Arduino['xiaobai_max31865_init'] = function (block) {
    var csPin = block.getFieldValue('CS_PIN');
    var sckPin = block.getFieldValue('SCK_PIN');
    var sdoPin = block.getFieldValue('SDO_PIN');
    var sdiPin = block.getFieldValue('SDI_PIN');
    var ptType = block.getFieldValue('PT_TYPE');
    var wireType = block.getFieldValue('WIRE_TYPE');
    var rRefValue = block.getFieldValue('RREF') || '430';

    // Set wire type
    var wireConst;
    if (wireType === '2') {
        wireConst = 'MAX31865_2WIRE';
    } else if (wireType === '4') {
        wireConst = 'MAX31865_4WIRE';
    } else {
        wireConst = 'MAX31865_3WIRE';
    }

    // Set nominal resistance based on PT type, RREF from user input
    var rNominal;
    if (ptType === 'PT1000') {
        rNominal = '1000.0';
    } else {
        rNominal = '100.0';
    }

    // Add library include
    Blockly.Arduino.definitions_['include_max31865'] = '#include <Adafruit_MAX31865.h>';

    // Create MAX31865 object (software SPI with CS, SDI, SDO, SCK pins)
    Blockly.Arduino.definitions_['define_max31865'] = 'Adafruit_MAX31865 max31865(' + csPin + ', ' + sdiPin + ', ' + sdoPin + ', ' + sckPin + ');';
    Blockly.Arduino.definitions_['define_max31865_rnominal'] = '#define RNOMINAL ' + rNominal;
    Blockly.Arduino.definitions_['define_max31865_rref'] = '#define RREF ' + (String(rRefValue).indexOf('.') === -1 ? rRefValue + '.0' : rRefValue);

    // Helper function: clear fault then read temperature
    Blockly.Arduino.definitions_['func_max31865_read_temp'] =
        'float max31865_readTemp() {\n' +
        '  max31865.clearFault();\n' +
        '  return max31865.temperature(RNOMINAL, RREF);\n' +
        '}';

    // Initialize in setup with selected wire type
    var setupCode = 'max31865.begin(' + wireConst + ');\n';
    setupCode += '  max31865.clearFault();';
    Blockly.Arduino.setups_['setup_max31865'] = setupCode;

    return '';
};

Blockly.Arduino['xiaobai_max31865_read_celsius'] = function (block) {
    var code = 'max31865_readTemp()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['xiaobai_max31865_read_fahrenheit'] = function (block) {
    var code = '(max31865_readTemp() * 9.0 / 5.0 + 32.0)';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['xiaobai_max31865_read_resistance'] = function (block) {
    var code = '(max31865.readRTD() * RREF / 32768.0)';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['xiaobai_max31865_check_fault'] = function (block) {
    var code = '(max31865.readFault() != 0)';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
