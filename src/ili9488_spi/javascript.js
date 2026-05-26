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
        'const uint8_t* const ili9488UnicodeFonts[] = {\n' +
        '  u8g2_font_unifont_t_chinese1,\n' +
        '  u8g2_font_unifont_t_chinese2,\n' +
        '  u8g2_font_unifont_t_chinese3\n' +
        '};\n' +
        '\n' +
        'static uint32_t ili9488DecodeUtf8(const char *s, uint8_t *bytesUsed) {\n' +
        '  uint8_t c0 = (uint8_t)s[0];\n' +
        '  if (c0 < 0x80) {\n' +
        '    *bytesUsed = 1;\n' +
        '    return c0;\n' +
        '  }\n' +
        '  if ((c0 & 0xE0) == 0xC0 && s[1] != 0) {\n' +
        '    *bytesUsed = 2;\n' +
        '    return ((uint32_t)(c0 & 0x1F) << 6) | ((uint8_t)s[1] & 0x3F);\n' +
        '  }\n' +
        '  if ((c0 & 0xF0) == 0xE0 && s[1] != 0 && s[2] != 0) {\n' +
        '    *bytesUsed = 3;\n' +
        '    return ((uint32_t)(c0 & 0x0F) << 12) | (((uint8_t)s[1] & 0x3F) << 6) | ((uint8_t)s[2] & 0x3F);\n' +
        '  }\n' +
        '  if ((c0 & 0xF8) == 0xF0 && s[1] != 0 && s[2] != 0 && s[3] != 0) {\n' +
        '    *bytesUsed = 4;\n' +
        '    return ((uint32_t)(c0 & 0x07) << 18) | (((uint8_t)s[1] & 0x3F) << 12) | (((uint8_t)s[2] & 0x3F) << 6) | ((uint8_t)s[3] & 0x3F);\n' +
        '  }\n' +
        '  *bytesUsed = 1;\n' +
        '  return 0x003F;\n' +
        '}\n' +
        '\n' +
        'static const uint8_t* ili9488SelectUnicodeFont(uint16_t codepoint) {\n' +
        '  for (uint8_t i = 0; i < sizeof(ili9488UnicodeFonts) / sizeof(ili9488UnicodeFonts[0]); ++i) {\n' +
        '    u8g2.setFont(ili9488UnicodeFonts[i]);\n' +
        '    if (u8g2_IsGlyph(&u8g2.u8g2, codepoint)) {\n' +
        '      return ili9488UnicodeFonts[i];\n' +
        '    }\n' +
        '  }\n' +
        '  return ili9488UnicodeFonts[0];\n' +
        '}\n' +
        '\n' +
        'void ili9488DrawUtf8(String text, int16_t x, int16_t y, uint16_t color) {\n' +
        '  const char *ptr = text.c_str();\n' +
        '  int16_t cursorX = x;\n' +
        '  const uint8_t *activeFont = ili9488UnicodeFonts[0];\n' +
        '  u8g2.setForegroundColor(color);\n' +
        '  u8g2.setBackgroundColor(TFT_BLACK);\n' +
        '  u8g2.setFont(activeFont);\n' +
        '  int16_t baselineY = y + u8g2.getFontAscent();\n' +
        '\n' +
        '  while (*ptr) {\n' +
        '    uint8_t bytesUsed = 0;\n' +
        '    uint32_t codepoint32 = ili9488DecodeUtf8(ptr, &bytesUsed);\n' +
        '    uint16_t codepoint = codepoint32 > 0xFFFF ? 0x003F : (uint16_t)codepoint32;\n' +
        '    const uint8_t *font = ili9488SelectUnicodeFont(codepoint);\n' +
        '    if (font != activeFont) {\n' +
        '      activeFont = font;\n' +
        '      u8g2.setFont(activeFont);\n' +
        '      baselineY = y + u8g2.getFontAscent();\n' +
        '    }\n' +
        '    cursorX += u8g2.drawGlyph(cursorX, baselineY, codepoint);\n' +
        '    ptr += bytesUsed;\n' +
        '  }\n' +
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
