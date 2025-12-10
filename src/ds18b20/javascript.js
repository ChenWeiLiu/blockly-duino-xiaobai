// DS18B20 Temperature Sensor Code Generation

Blockly.Arduino['xiaobai_ds18b20_init'] = function (block) {
    var pin = block.getFieldValue('PIN');

    // Add library includes
    Blockly.Arduino.definitions_['include_onewire'] = '#include <OneWire.h>';
    Blockly.Arduino.definitions_['include_dallas_temp'] = '#include <DallasTemperature.h>';

    // Create OneWire and DallasTemperature objects
    Blockly.Arduino.definitions_['define_ds18b20_pin'] = 'OneWire oneWire(' + pin + ');';
    Blockly.Arduino.definitions_['define_ds18b20_sensor'] = 'DallasTemperature sensors(&oneWire);';

    // Initialize in setup
    Blockly.Arduino.setups_['setup_ds18b20'] = 'sensors.begin();';

    return '';
};

Blockly.Arduino['xiaobai_ds18b20_request'] = function (block) {
    var code = 'sensors.requestTemperatures();\n';
    return code;
};

Blockly.Arduino['xiaobai_ds18b20_read_celsius'] = function (block) {
    var code = 'sensors.getTempCByIndex(0)';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['xiaobai_ds18b20_read_fahrenheit'] = function (block) {
    var code = 'sensors.getTempFByIndex(0)';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
