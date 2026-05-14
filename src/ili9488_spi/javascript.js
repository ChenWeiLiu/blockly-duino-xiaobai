// ILI9488 SPI display generators (TFT_eSPI)

Blockly.Arduino['xiaobai_ili9488_init'] = function (block) {
    var rot = block.getFieldValue('ROT');

    Blockly.Arduino.definitions_['include_tft_espi'] = '#include <TFT_eSPI.h>';
    Blockly.Arduino.definitions_['define_tft_ili9488'] = 'TFT_eSPI tft = TFT_eSPI();';

    Blockly.Arduino.setups_['setup_tft_init'] = 'tft.init();';
    Blockly.Arduino.setups_['setup_tft_rotation'] = 'tft.setRotation(' + rot + ');';
    Blockly.Arduino.setups_['setup_tft_text_defaults'] = 'tft.setTextWrap(false, false);';

    return '';
};

Blockly.Arduino['xiaobai_ili9488_fill_screen'] = function (block) {
    var color = block.getFieldValue('COLOR');
    return 'tft.fillScreen(' + color + ');\n';
};

Blockly.Arduino['xiaobai_ili9488_draw_text'] = function (block) {
    var text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '""';
    var x = block.getFieldValue('X');
    var y = block.getFieldValue('Y');
    var size = block.getFieldValue('SIZE');
    var color = block.getFieldValue('COLOR');

    var code = '';
    code += 'tft.setTextColor(' + color + ', TFT_BLACK);\n';
    code += 'tft.setTextSize(' + size + ');\n';
    code += 'tft.drawString(String(' + text + '), ' + x + ', ' + y + ');\n';
    return code;
};

Blockly.Arduino['xiaobai_ili9488_draw_line'] = function (block) {
    var x1 = block.getFieldValue('X1');
    var y1 = block.getFieldValue('Y1');
    var x2 = block.getFieldValue('X2');
    var y2 = block.getFieldValue('Y2');
    var color = block.getFieldValue('COLOR');

    return 'tft.drawLine(' + x1 + ', ' + y1 + ', ' + x2 + ', ' + y2 + ', ' + color + ');\n';
};

Blockly.Arduino['xiaobai_ili9488_fill_rect'] = function (block) {
    var x = block.getFieldValue('X');
    var y = block.getFieldValue('Y');
    var w = block.getFieldValue('W');
    var h = block.getFieldValue('H');
    var color = block.getFieldValue('COLOR');

    return 'tft.fillRect(' + x + ', ' + y + ', ' + w + ', ' + h + ', ' + color + ');\n';
};
