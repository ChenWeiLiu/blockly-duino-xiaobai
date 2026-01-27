// ==================== ESP32 數位/類比 I/O ====================

// ESP32 數位寫入
Blockly.Blocks["esp32_digital_write"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("ESP32 數位輸出")
            .appendField("腳位")
            .appendField(new Blockly.FieldDropdown([
                ["GPIO0", "0"], ["GPIO2", "2"], ["GPIO4", "4"], ["GPIO5", "5"],
                ["GPIO12", "12"], ["GPIO13", "13"], ["GPIO14", "14"], ["GPIO15", "15"],
                ["GPIO16", "16"], ["GPIO17", "17"], ["GPIO18", "18"], ["GPIO19", "19"],
                ["GPIO21", "21"], ["GPIO22", "22"], ["GPIO23", "23"], ["GPIO25", "25"],
                ["GPIO26", "26"], ["GPIO27", "27"], ["GPIO32", "32"], ["GPIO33", "33"]
            ]), "PIN");
        this.appendValueInput("STATE")
            .setCheck(null)
            .appendField("狀態");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["ESP32_HUE"]);
        this.setTooltip("設定 ESP32 指定腳位的數位輸出（HIGH/LOW）");
        this.setHelpUrl("");
    }
};

// ESP32 數位讀取
Blockly.Blocks["esp32_digital_read"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("ESP32 數位讀取")
            .appendField("腳位")
            .appendField(new Blockly.FieldDropdown([
                ["GPIO0", "0"], ["GPIO2", "2"], ["GPIO4", "4"], ["GPIO5", "5"],
                ["GPIO12", "12"], ["GPIO13", "13"], ["GPIO14", "14"], ["GPIO15", "15"],
                ["GPIO16", "16"], ["GPIO17", "17"], ["GPIO18", "18"], ["GPIO19", "19"],
                ["GPIO21", "21"], ["GPIO22", "22"], ["GPIO23", "23"], ["GPIO25", "25"],
                ["GPIO26", "26"], ["GPIO27", "27"], ["GPIO32", "32"], ["GPIO33", "33"],
                ["GPIO34", "34"], ["GPIO35", "35"], ["GPIO36", "36"], ["GPIO39", "39"]
            ]), "PIN");
        this.setOutput(true, "Number");
        this.setColour(Blockly.Msg["ESP32_HUE"]);
        this.setTooltip("讀取 ESP32 指定腳位的數位輸入值");
        this.setHelpUrl("");
    }
};

// ESP32 類比讀取 (ADC)
Blockly.Blocks["esp32_analog_read"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("ESP32 類比讀取")
            .appendField("腳位")
            .appendField(new Blockly.FieldDropdown([
                ["GPIO32 (ADC1_CH4)", "32"],
                ["GPIO33 (ADC1_CH5)", "33"],
                ["GPIO34 (ADC1_CH6)", "34"],
                ["GPIO35 (ADC1_CH7)", "35"],
                ["GPIO36 (ADC1_CH0)", "36"],
                ["GPIO39 (ADC1_CH3)", "39"]
            ]), "PIN");
        this.setOutput(true, "Number");
        this.setColour(Blockly.Msg["ESP32_HUE"]);
        this.setTooltip("讀取 ESP32 類比腳位的值（0-4095，12位元）");
        this.setHelpUrl("");
    }
};

// ESP32 PWM 輸出
Blockly.Blocks["esp32_pwm_write"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("ESP32 PWM 輸出")
            .appendField("腳位")
            .appendField(new Blockly.FieldDropdown([
                ["GPIO0", "0"], ["GPIO2", "2"], ["GPIO4", "4"], ["GPIO5", "5"],
                ["GPIO12", "12"], ["GPIO13", "13"], ["GPIO14", "14"], ["GPIO15", "15"],
                ["GPIO16", "16"], ["GPIO17", "17"], ["GPIO18", "18"], ["GPIO19", "19"],
                ["GPIO21", "21"], ["GPIO22", "22"], ["GPIO23", "23"], ["GPIO25", "25"],
                ["GPIO26", "26"], ["GPIO27", "27"], ["GPIO32", "32"], ["GPIO33", "33"]
            ]), "PIN");
        this.appendValueInput("CHANNEL")
            .setCheck("Number")
            .appendField("通道");
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField("數值");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["ESP32_HUE"]);
        this.setTooltip("設定 ESP32 PWM 通道的輸出值");
        this.setHelpUrl("");
    }
};

// ESP32 PWM 設定
Blockly.Blocks["esp32_pwm_setup"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("ESP32 PWM 設定");
        this.appendValueInput("CHANNEL")
            .setCheck("Number")
            .appendField("通道");
        this.appendValueInput("FREQ")
            .setCheck("Number")
            .appendField("頻率(Hz)");
        this.appendValueInput("RESOLUTION")
            .setCheck("Number")
            .appendField("解析度(位元)");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["ESP32_HUE"]);
        this.setTooltip("設定 ESP32 PWM 通道的頻率和解析度");
        this.setHelpUrl("");
    }
};

// ESP32 引腳模式設定
Blockly.Blocks["esp32_pin_mode"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("ESP32 設定腳位")
            .appendField("腳位")
            .appendField(new Blockly.FieldDropdown([
                ["GPIO0", "0"], ["GPIO1", "1"], ["GPIO2", "2"], ["GPIO3", "3"], ["GPIO4", "4"],
                ["GPIO5", "5"], ["GPIO12", "12"], ["GPIO13", "13"], ["GPIO14", "14"], ["GPIO15", "15"],
                ["GPIO16", "16"], ["GPIO17", "17"], ["GPIO18", "18"], ["GPIO19", "19"], ["GPIO21", "21"],
                ["GPIO22", "22"], ["GPIO23", "23"], ["GPIO25", "25"], ["GPIO26", "26"], ["GPIO27", "27"],
                ["GPIO32", "32"], ["GPIO33", "33"]
            ]), "PIN")
            .appendField("模式")
            .appendField(new Blockly.FieldDropdown([
                ["輸出", "OUTPUT"],
                ["輸入", "INPUT"],
                ["輸入(上拉)", "INPUT_PULLUP"],
                ["輸入(下拉)", "INPUT_PULLDOWN"]
            ]), "MODE");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["ESP32_HUE"]);
        this.setTooltip("設定 ESP32 腳位模式（輸出、輸入、上拉、下拉）");
        this.setHelpUrl("");
    }
};

// ESP32 DAC 類比輸出
Blockly.Blocks["esp32_dac_write"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("ESP32 類比輸出")
            .appendField("腳位")
            .appendField(new Blockly.FieldDropdown([
                ["GPIO25 (DAC1)", "25"],
                ["GPIO26 (DAC2)", "26"]
            ]), "PIN");
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField("數值(0-255)");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["ESP32_HUE"]);
        this.setTooltip("設定 ESP32 DAC 類比輸出（0-255，8位元）");
        this.setHelpUrl("");
    }
};
