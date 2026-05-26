// ILI9486 SPI display blocks (TFT_eSPI)

Blockly.Blocks['xiaobai_ili9486_init'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_ILI9486_INIT)
            .appendField(Blockly.Msg.XIAOBAI_ILI9486_ROTATION)
            .appendField(new Blockly.FieldDropdown([
                ["0", "0"],
                ["1", "1"],
                ["2", "2"],
                ["3", "3"]
            ]), "ROT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_ILI9486_INIT_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['xiaobai_ili9486_fill_screen'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_ILI9486_FILL_SCREEN)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.XIAOBAI_ILI9486_BLACK, "TFT_BLACK"],
                [Blockly.Msg.XIAOBAI_ILI9486_WHITE, "TFT_WHITE"],
                [Blockly.Msg.XIAOBAI_ILI9486_RED, "TFT_RED"],
                [Blockly.Msg.XIAOBAI_ILI9486_GREEN, "TFT_GREEN"],
                [Blockly.Msg.XIAOBAI_ILI9486_BLUE, "TFT_BLUE"],
                [Blockly.Msg.XIAOBAI_ILI9486_YELLOW, "TFT_YELLOW"],
                [Blockly.Msg.XIAOBAI_ILI9486_CYAN, "TFT_CYAN"],
                [Blockly.Msg.XIAOBAI_ILI9486_MAGENTA, "TFT_MAGENTA"],
                [Blockly.Msg.XIAOBAI_ILI9486_ORANGE, "TFT_ORANGE"]
            ]), "COLOR");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_ILI9486_FILL_SCREEN_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['xiaobai_ili9486_draw_text'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .setCheck(null)
            .appendField(Blockly.Msg.XIAOBAI_ILI9486_DRAW_TEXT);
        this.appendDummyInput()
            .appendField("x")
            .appendField(new Blockly.FieldNumber(0, 0), "X")
            .appendField("y")
            .appendField(new Blockly.FieldNumber(0, 0), "Y")
            .appendField(Blockly.Msg.XIAOBAI_ILI9486_COLOR)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.XIAOBAI_ILI9486_WHITE, "TFT_WHITE"],
                [Blockly.Msg.XIAOBAI_ILI9486_BLACK, "TFT_BLACK"],
                [Blockly.Msg.XIAOBAI_ILI9486_RED, "TFT_RED"],
                [Blockly.Msg.XIAOBAI_ILI9486_GREEN, "TFT_GREEN"],
                [Blockly.Msg.XIAOBAI_ILI9486_BLUE, "TFT_BLUE"],
                [Blockly.Msg.XIAOBAI_ILI9486_YELLOW, "TFT_YELLOW"]
            ]), "COLOR");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_ILI9486_DRAW_TEXT_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['xiaobai_ili9486_set_chinese_font_size'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_ILI9486_SET_CHINESE_FONT_SIZE)
            .appendField(new Blockly.FieldNumber(16, 12, 16, 1), "SIZE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_ILI9486_SET_CHINESE_FONT_SIZE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['xiaobai_ili9486_draw_line'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_ILI9486_DRAW_LINE)
            .appendField("x1")
            .appendField(new Blockly.FieldNumber(0, 0), "X1")
            .appendField("y1")
            .appendField(new Blockly.FieldNumber(0, 0), "Y1")
            .appendField("x2")
            .appendField(new Blockly.FieldNumber(100, 0), "X2")
            .appendField("y2")
            .appendField(new Blockly.FieldNumber(100, 0), "Y2");
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_ILI9486_COLOR)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.XIAOBAI_ILI9486_WHITE, "TFT_WHITE"],
                [Blockly.Msg.XIAOBAI_ILI9486_RED, "TFT_RED"],
                [Blockly.Msg.XIAOBAI_ILI9486_GREEN, "TFT_GREEN"],
                [Blockly.Msg.XIAOBAI_ILI9486_BLUE, "TFT_BLUE"],
                [Blockly.Msg.XIAOBAI_ILI9486_YELLOW, "TFT_YELLOW"]
            ]), "COLOR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_ILI9486_DRAW_LINE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['xiaobai_ili9486_fill_rect'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_ILI9486_FILL_RECT)
            .appendField("x")
            .appendField(new Blockly.FieldNumber(0, 0), "X")
            .appendField("y")
            .appendField(new Blockly.FieldNumber(0, 0), "Y")
            .appendField("w")
            .appendField(new Blockly.FieldNumber(60, 1), "W")
            .appendField("h")
            .appendField(new Blockly.FieldNumber(30, 1), "H")
            .appendField(Blockly.Msg.XIAOBAI_ILI9486_COLOR)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.XIAOBAI_ILI9486_WHITE, "TFT_WHITE"],
                [Blockly.Msg.XIAOBAI_ILI9486_BLACK, "TFT_BLACK"],
                [Blockly.Msg.XIAOBAI_ILI9486_RED, "TFT_RED"],
                [Blockly.Msg.XIAOBAI_ILI9486_GREEN, "TFT_GREEN"],
                [Blockly.Msg.XIAOBAI_ILI9486_BLUE, "TFT_BLUE"],
                [Blockly.Msg.XIAOBAI_ILI9486_YELLOW, "TFT_YELLOW"]
            ]), "COLOR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_ILI9486_FILL_RECT_TOOLTIP);
        this.setHelpUrl('');
    }
};
