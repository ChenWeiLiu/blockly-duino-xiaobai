// HX711 初始化
Blockly.Arduino['hx711_init'] = function(block) {
  var num = block.getFieldValue('NUM');
  var dout = block.getFieldValue('DOUT');
  var sck = block.getFieldValue('SCK');
  
  Blockly.Arduino.definitions_['include_hx711'] = '#include <HX711.h>';
  Blockly.Arduino.definitions_['define_hx711_' + num] = 
    'HX711 scale_' + num + ';\n' +
    'const int LOADCELL_DOUT_PIN_' + num + ' = ' + dout + ';\n' +
    'const int LOADCELL_SCK_PIN_' + num + ' = ' + sck + ';';
  
  Blockly.Arduino.setups_['setup_hx711_' + num] = 
    'scale_' + num + '.begin(LOADCELL_DOUT_PIN_' + num + ', LOADCELL_SCK_PIN_' + num + ');\n' +
    '  scale_' + num + '.set_scale();\n' +
    '  scale_' + num + '.tare();';
  
  var code = '// HX711 #' + num + ' 已初始化\n';
  return code;
};

// HX711 讀取重量
Blockly.Arduino['hx711_read'] = function(block) {
  var num = block.getFieldValue('NUM');
  var code = 'scale_' + num + '.get_units(10)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// HX711 去皮歸零
Blockly.Arduino['hx711_tare'] = function(block) {
  var num = block.getFieldValue('NUM');
  var code = 'scale_' + num + '.tare();\n';
  return code;
};

// HX711 校準
Blockly.Arduino['hx711_calibrate'] = function(block) {
  var num = block.getFieldValue('NUM');
  var scale_factor = Blockly.Arduino.valueToCode(block, 'SCALE', 
                     Blockly.Arduino.ORDER_ATOMIC) || '1';
  var code = 'scale_' + num + '.set_scale(' + scale_factor + ');\n';
  return code;
};

// HX711 讀取原始值
Blockly.Arduino['hx711_read_raw'] = function(block) {
  var num = block.getFieldValue('NUM');
  var code = 'scale_' + num + '.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// HX711 設定增益
Blockly.Arduino['hx711_set_gain'] = function(block) {
  var num = block.getFieldValue('NUM');
  var gain = block.getFieldValue('GAIN');
  var code = 'scale_' + num + '.set_gain(' + gain + ');\n';
  return code;
};

// HX711 檢測是否準備好
Blockly.Arduino['hx711_is_ready'] = function(block) {
  var num = block.getFieldValue('NUM');
  var code = 'scale_' + num + '.is_ready()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// ==================== ESP32 數位/類比 I/O ====================

// ESP32 數位寫入
Blockly.Arduino['esp32_digital_write'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var state = Blockly.Arduino.valueToCode(block, 'STATE', 
              Blockly.Arduino.ORDER_ATOMIC) || 'LOW';
  
  Blockly.Arduino.setups_['setup_pin_' + pin] = 'pinMode(' + pin + ', OUTPUT);';
  
  var code = 'digitalWrite(' + pin + ', ' + state + ');\n';
  return code;
};

// ESP32 數位讀取
Blockly.Arduino['esp32_digital_read'] = function(block) {
  var pin = block.getFieldValue('PIN');
  
  Blockly.Arduino.setups_['setup_pin_' + pin] = 'pinMode(' + pin + ', INPUT);';
  
  var code = 'digitalRead(' + pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// ESP32 類比讀取
Blockly.Arduino['esp32_analog_read'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var code = 'analogRead(' + pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// ESP32 PWM 輸出
Blockly.Arduino['esp32_pwm_write'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var channel = Blockly.Arduino.valueToCode(block, 'CHANNEL', 
                Blockly.Arduino.ORDER_ATOMIC) || '0';
  var value = Blockly.Arduino.valueToCode(block, 'VALUE', 
              Blockly.Arduino.ORDER_ATOMIC) || '0';
  
  // 使用 ledcAttachChannel 替代 ledcAttach，參數順序：pin, freq, resolution, channel
  Blockly.Arduino.setups_['setup_pwm_attach_' + pin + '_' + channel] = 
    'ledcAttachChannel(' + pin + ', 5000, 8, ' + channel + ');';
  
  var code = 'ledcWrite(' + pin + ', ' + value + ');\n';
  return code;
};

// ESP32 PWM 設定
Blockly.Arduino['esp32_pwm_setup'] = function(block) {
  var channel = Blockly.Arduino.valueToCode(block, 'CHANNEL', 
                Blockly.Arduino.ORDER_ATOMIC) || '0';
  var freq = Blockly.Arduino.valueToCode(block, 'FREQ', 
             Blockly.Arduino.ORDER_ATOMIC) || '5000';
  var resolution = Blockly.Arduino.valueToCode(block, 'RESOLUTION', 
                   Blockly.Arduino.ORDER_ATOMIC) || '8';
  var pin = '2';  // 預設腳位，實際會在 pwm_write 中設定
  
  Blockly.Arduino.setups_['setup_pwm_config_' + channel] = 
    '// PWM 通道 ' + channel + ' 設定: ' + freq + 'Hz, ' + resolution + ' 位元';
  
  var code = '// PWM 通道 ' + channel + ' 已設定\n';
  return code;
};

// ESP32 引腳模式設定
Blockly.Arduino['esp32_pin_mode'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var mode = block.getFieldValue('MODE');
  
  Blockly.Arduino.setups_['setup_pin_mode_' + pin] = 
    'pinMode(' + pin + ', ' + mode + ');';
  
  var code = '// GPIO' + pin + ' 設為 ' + mode + '\n';
  return code;
};

// ESP32 DAC 類比輸出
Blockly.Arduino['esp32_dac_write'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var value = Blockly.Arduino.valueToCode(block, 'VALUE', 
              Blockly.Arduino.ORDER_ATOMIC) || '0';
  
  var code = 'dacWrite(' + pin + ', ' + value + ');\n';
  return code;
};
