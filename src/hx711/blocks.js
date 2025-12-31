// HX711 初始化積木
Blockly.Blocks["hx711_init"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["HX711_INIT"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM")
            .appendField("DOUT")
            .appendField(new Blockly.FieldNumber(2, 0, 50), "DOUT")
            .appendField("SCK")
            .appendField(new Blockly.FieldNumber(3, 0, 50), "SCK");
        this.appendDummyInput()
            .appendField(Blockly.Msg["HX711_RATE"])
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg["HX711_RATE_FAST"], "80"],
                [Blockly.Msg["HX711_RATE_PRECISE"], "10"]
            ]), "RATE");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["XIAOBAI_HUE"]);
        this.setTooltip(Blockly.Msg["HX711_INIT_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// HX711 讀取重量積木
Blockly.Blocks["hx711_read"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["HX711_READ"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM");
        this.setOutput(true, "Number");
        this.setColour(Blockly.Msg["XIAOBAI_HUE"]);
        this.setTooltip(Blockly.Msg["HX711_READ_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// HX711 去皮歸零積木
Blockly.Blocks["hx711_tare"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["HX711_TARE"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["XIAOBAI_HUE"]);
        this.setTooltip(Blockly.Msg["HX711_TARE_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// HX711 校準積木
Blockly.Blocks["hx711_calibrate"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["HX711_CALIBRATE"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM");
        this.appendValueInput("SCALE")
            .setCheck("Number")
            .appendField(Blockly.Msg["HX711_SCALE_FACTOR"]);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["XIAOBAI_HUE"]);
        this.setTooltip(Blockly.Msg["HX711_CALIBRATE_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// HX711 讀取原始值積木
Blockly.Blocks["hx711_read_raw"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["HX711_READ_RAW"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM");
        this.setOutput(true, "Number");
        this.setColour(Blockly.Msg["XIAOBAI_HUE"]);
        this.setTooltip(Blockly.Msg["HX711_READ_RAW_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// HX711 設定增益積木
Blockly.Blocks["hx711_set_gain"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["HX711_SET_GAIN"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM")
            .appendField(Blockly.Msg["HX711_GAIN"])
            .appendField(new Blockly.FieldDropdown([
                ["128 (A通道)", "128"],
                ["64 (A通道)", "64"],
                ["32 (B通道)", "32"]
            ]), "GAIN");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["XIAOBAI_HUE"]);
        this.setTooltip(Blockly.Msg["HX711_SET_GAIN_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// HX711 檢測是否準備好積木
Blockly.Blocks["hx711_is_ready"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["HX711_IS_READY"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM");
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Msg["XIAOBAI_HUE"]);
        this.setTooltip(Blockly.Msg["HX711_IS_READY_TOOLTIP"]);
        this.setHelpUrl("");
    }
};
