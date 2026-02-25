// MAX31865 PT100 Temperature Sensor Code Generation

Blockly.Arduino['xiaobai_max31865_init'] = function (block) {
    var csPin = block.getFieldValue('CS_PIN');
    var sckPin = block.getFieldValue('SCK_PIN');
    var sdoPin = block.getFieldValue('SDO_PIN');
    var sdiPin = block.getFieldValue('SDI_PIN');
    var ptType = block.getFieldValue('PT_TYPE');

    // Set reference resistor and nominal resistance based on PT type
    var rNominal, rRef;
    if (ptType === 'PT1000') {
        rNominal = '1000.0';
        rRef = '4300.0';
    } else {
        rNominal = '100.0';
        rRef = '430.0';
    }

    // Add library include
    Blockly.Arduino.definitions_['include_max31865'] = '#include <Adafruit_MAX31865.h>';

    // Create MAX31865 object (software SPI with CS, SDI, SDO, SCK pins)
    Blockly.Arduino.definitions_['define_max31865'] = 'Adafruit_MAX31865 max31865(' + csPin + ', ' + sdiPin + ', ' + sdoPin + ', ' + sckPin + ');';
    Blockly.Arduino.definitions_['define_max31865_rnominal'] = '#define RNOMINAL ' + rNominal;
    Blockly.Arduino.definitions_['define_max31865_rref'] = '#define RREF ' + rRef;

    // Initialize in setup (3-wire PT100 by default)
    Blockly.Arduino.setups_['setup_max31865'] = 'max31865.begin(MAX31865_3WIRE);';

    return '';
};

Blockly.Arduino['xiaobai_max31865_read_celsius'] = function (block) {
    var code = 'max31865.temperature(RNOMINAL, RREF)';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['xiaobai_max31865_read_fahrenheit'] = function (block) {
    var code = '(max31865.temperature(RNOMINAL, RREF) * 9.0 / 5.0 + 32.0)';
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
