// TJC3224T124 串口屏（螢幕）積木定義

// 螢幕初始化積木
Blockly.Blocks['xiaobai_tjc3224_init'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_INIT)
            .appendField(new Blockly.FieldDropdown([
                ["Serial", "Serial"],
                ["Serial1", "Serial1"],
                ["Serial2", "Serial2"]
            ]), "SERIAL_NAME")
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_BAUD)
            .appendField(new Blockly.FieldDropdown([
                ["9600", "9600"],
                ["19200", "19200"],
                ["38400", "38400"],
                ["57600", "57600"],
                ["115200", "115200"]
            ]), "BAUD_RATE");
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_RX_PIN)
            .appendField(new Blockly.FieldNumber(16, 0, 39), "RX_PIN")
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_TX_PIN)
            .appendField(new Blockly.FieldNumber(17, 0, 39), "TX_PIN");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_TJC3224_INIT_TOOLTIP);
        this.setHelpUrl('');
    }
};

// 設定文字元件積木
Blockly.Blocks['xiaobai_tjc3224_set_text'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_SET_TEXT)
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_COMPONENT)
            .appendField(new Blockly.FieldTextInput("t0"), "COMPONENT");
        this.appendValueInput("TEXT")
            .setCheck(null)
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_TEXT_VALUE);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_TJC3224_SET_TEXT_TOOLTIP);
        this.setHelpUrl('');
    }
};

// 設定數值元件積木
Blockly.Blocks['xiaobai_tjc3224_set_number'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_SET_NUMBER)
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_COMPONENT)
            .appendField(new Blockly.FieldTextInput("n0"), "COMPONENT");
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_NUMBER_VALUE);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_TJC3224_SET_NUMBER_TOOLTIP);
        this.setHelpUrl('');
    }
};

// 切換頁面積木
Blockly.Blocks['xiaobai_tjc3224_set_page'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_SET_PAGE)
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_PAGE_ID)
            .appendField(new Blockly.FieldNumber(0, 0), "PAGE_ID");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_TJC3224_SET_PAGE_TOOLTIP);
        this.setHelpUrl('');
    }
};

// 設定元件可見性積木
Blockly.Blocks['xiaobai_tjc3224_set_visibility'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_SET_VISIBILITY)
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_COMPONENT)
            .appendField(new Blockly.FieldTextInput("t0"), "COMPONENT")
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_VISIBILITY)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.XIAOBAI_TJC3224_VISIBLE || "顯示", "1"],
                [Blockly.Msg.XIAOBAI_TJC3224_HIDDEN || "隱藏", "0"]
            ]), "VISIBLE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_TJC3224_SET_VISIBILITY_TOOLTIP);
        this.setHelpUrl('');
    }
};

// 設定進度條積木
Blockly.Blocks['xiaobai_tjc3224_set_progress'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_SET_PROGRESS)
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_COMPONENT)
            .appendField(new Blockly.FieldTextInput("j0"), "COMPONENT");
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_PROGRESS_VALUE);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_TJC3224_SET_PROGRESS_TOOLTIP);
        this.setHelpUrl('');
    }
};

// 監聽觸控事件積木
Blockly.Blocks['xiaobai_tjc3224_on_touch'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_ON_TOUCH);
        this.appendStatementInput("STATEMENT")
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_DO);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_TJC3224_ON_TOUCH_TOOLTIP);
        this.setHelpUrl('');
    }
};

// 取得觸控元件 ID 積木
Blockly.Blocks['xiaobai_tjc3224_touch_id'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_TOUCH_ID);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_TJC3224_TOUCH_ID_TOOLTIP);
        this.setHelpUrl('');
    }
};

// 取得觸控頁面 ID 積木
Blockly.Blocks['xiaobai_tjc3224_touch_page'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_TJC3224_TOUCH_PAGE);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_TJC3224_TOUCH_PAGE_TOOLTIP);
        this.setHelpUrl('');
    }
};
