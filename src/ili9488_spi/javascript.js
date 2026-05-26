// ILI9488 SPI display generators (TFT_eSPI)

Blockly.Arduino['xiaobai_ili9488_init'] = function (block) {
    var rot = block.getFieldValue('ROT');
    var sck = block.getFieldValue('SCK') || '18';
    var mosi = block.getFieldValue('MOSI') || '23';
    var cs = block.getFieldValue('CS') || '5';
    var dc = block.getFieldValue('DC') || '2';
    var rst = block.getFieldValue('RST') || '4';

    Blockly.Arduino.definitions_['marker_ili9488_spi'] = '// BlocklyduinoF2: ILI9488_SPI SCK=' + sck + ' MOSI=' + mosi + ' CS=' + cs + ' DC=' + dc + ' RST=' + rst;
    Blockly.Arduino.definitions_['include_tft_espi'] = '#include <TFT_eSPI.h>';
    Blockly.Arduino.definitions_['include_u8g2_for_tft_espi'] = '#include <U8g2_for_TFT_eSPI.h>';
    Blockly.Arduino.definitions_['define_tft_ili9488'] = 'TFT_eSPI tft = TFT_eSPI();';
    Blockly.Arduino.definitions_['define_tft_ili9488_u8g2'] = 'U8g2_for_TFT_eSPI u8g2;';
    Blockly.Arduino.definitions_['define_tft_ili9488_utf8_helpers'] =
        'void ili9488DrawUtf8(String text, int16_t x, int16_t y, uint16_t color) {\n' +
        '  static uint8_t fontIndex = 0;\n' +
        '  const uint8_t* const ili9488UnicodeFonts[] = {\n' +
        '    u8g2_font_unifont_t_chinese1,\n' +
        '    u8g2_font_unifont_t_chinese2,\n' +
        '    u8g2_font_unifont_t_chinese3\n' +
        '  };\n' +
        '  u8g2.setForegroundColor(color);\n' +
        '  u8g2.setBackgroundColor(TFT_BLACK);\n' +
        '  u8g2.setFont(ili9488UnicodeFonts[fontIndex]);\n' +
        '  u8g2.drawUTF8(x, y + 16, text.c_str());\n' +
        '  fontIndex = (fontIndex + 1) % 3;\n' +
        '}\n';

    Blockly.Arduino.setups_['setup_tft_init'] = 'tft.init();';
    Blockly.Arduino.setups_['setup_tft_rotation'] = 'tft.setRotation(' + rot + ');';
    Blockly.Arduino.setups_['setup_tft_clear'] = 'tft.fillScreen(TFT_BLACK);';
    Blockly.Arduino.setups_['setup_tft_text_defaults'] = 'tft.setTextWrap(false, false);';
    Blockly.Arduino.setups_['setup_tft_u8g2_begin'] = 'u8g2.begin(tft);';
    Blockly.Arduino.setups_['setup_tft_u8g2_font_mode'] = 'u8g2.setFontMode(0);';
    Blockly.Arduino.setups_['setup_tft_u8g2_font_direction'] = 'u8g2.setFontDirection(0);';
    Blockly.Arduino.setups_['setup_tft_u8g2_bg'] = 'u8g2.setBackgroundColor(TFT_BLACK);';
    Blockly.Arduino.setups_['setup_tft_u8g2_fg'] = 'u8g2.setForegroundColor(TFT_WHITE);';
    Blockly.Arduino.setups_['setup_tft_u8g2_font_default'] = 'u8g2.setFont(u8g2_font_unifont_t_chinese1);';

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
    var color = block.getFieldValue('COLOR');

    var code = '';
    code += 'ili9488DrawUtf8(String(' + text + '), ' + x + ', ' + y + ', ' + color + ');\n';
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
