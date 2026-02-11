// TCS3200 初始化積木
Blockly.Blocks["tcs3200_init"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["TCS3200_INIT"])
            .appendField("S0")
            .appendField(new Blockly.FieldDropdown([
                ["2", "2"], ["4", "4"], ["5", "5"], ["12", "12"],
                ["13", "13"], ["14", "14"], ["15", "15"],
                ["16", "16"], ["17", "17"], ["18", "18"],
                ["19", "19"], ["21", "21"], ["22", "22"],
                ["23", "23"], ["25", "25"], ["26", "26"],
                ["27", "27"], ["32", "32"], ["33", "33"]
            ]), "S0")
            .appendField("S1")
            .appendField(new Blockly.FieldDropdown([
                ["3", "3"], ["4", "4"], ["5", "5"], ["12", "12"],
                ["13", "13"], ["14", "14"], ["15", "15"],
                ["16", "16"], ["17", "17"], ["18", "18"],
                ["19", "19"], ["21", "21"], ["22", "22"],
                ["23", "23"], ["25", "25"], ["26", "26"],
                ["27", "27"], ["32", "32"], ["33", "33"]
            ]), "S1")
            .appendField("S2")
            .appendField(new Blockly.FieldDropdown([
                ["4", "4"], ["5", "5"], ["12", "12"],
                ["13", "13"], ["14", "14"], ["15", "15"],
                ["16", "16"], ["17", "17"], ["18", "18"],
                ["19", "19"], ["21", "21"], ["22", "22"],
                ["23", "23"], ["25", "25"], ["26", "26"],
                ["27", "27"], ["32", "32"], ["33", "33"]
            ]), "S2")
            .appendField("S3")
            .appendField(new Blockly.FieldDropdown([
                ["5", "5"], ["12", "12"],
                ["13", "13"], ["14", "14"], ["15", "15"],
                ["16", "16"], ["17", "17"], ["18", "18"],
                ["19", "19"], ["21", "21"], ["22", "22"],
                ["23", "23"], ["25", "25"], ["26", "26"],
                ["27", "27"], ["32", "32"], ["33", "33"]
            ]), "S3")
            .appendField("OUT")
            .appendField(new Blockly.FieldDropdown([
                ["15", "15"], ["2", "2"], ["4", "4"], ["5", "5"],
                ["12", "12"], ["13", "13"], ["14", "14"],
                ["16", "16"], ["17", "17"], ["18", "18"],
                ["19", "19"], ["21", "21"], ["22", "22"],
                ["23", "23"], ["25", "25"], ["26", "26"],
                ["27", "27"], ["32", "32"], ["33", "33"],
                ["34", "34"], ["35", "35"], ["36", "36"], ["39", "39"]
            ]), "OUT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["XIAOBAI_HUE"]);
        this.setTooltip(Blockly.Msg["TCS3200_INIT_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// TCS3200 讀取顏色頻率積木
Blockly.Blocks["tcs3200_read_color"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["TCS3200_READ_COLOR"])
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg["TCS3200_COLOR_RED"], "RED"],
                [Blockly.Msg["TCS3200_COLOR_GREEN"], "GREEN"],
                [Blockly.Msg["TCS3200_COLOR_BLUE"], "BLUE"],
                [Blockly.Msg["TCS3200_COLOR_CLEAR"], "CLEAR"]
            ]), "COLOR");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Msg["XIAOBAI_HUE"]);
        this.setTooltip(Blockly.Msg["TCS3200_READ_COLOR_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// TCS3200 讀取 RGB 積木
Blockly.Blocks["tcs3200_read_rgb"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["TCS3200_READ_RGB"]);
        this.appendDummyInput()
            .appendField(Blockly.Msg["TCS3200_RED_VAR"])
            .appendField(new Blockly.FieldTextInput("r"), "RED_VAR")
            .appendField(Blockly.Msg["TCS3200_GREEN_VAR"])
            .appendField(new Blockly.FieldTextInput("g"), "GREEN_VAR")
            .appendField(Blockly.Msg["TCS3200_BLUE_VAR"])
            .appendField(new Blockly.FieldTextInput("b"), "BLUE_VAR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["XIAOBAI_HUE"]);
        this.setTooltip(Blockly.Msg["TCS3200_READ_RGB_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// TCS3200 偵測顏色名稱積木
Blockly.Blocks["tcs3200_detect_color"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["TCS3200_DETECT_COLOR"]);
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(Blockly.Msg["XIAOBAI_HUE"]);
        this.setTooltip(Blockly.Msg["TCS3200_DETECT_COLOR_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// TCS3200 設定頻率縮放積木
Blockly.Blocks["tcs3200_set_frequency"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["TCS3200_SET_FREQUENCY"])
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg["TCS3200_FREQ_OFF"], "OFF"],
                [Blockly.Msg["TCS3200_FREQ_2"], "2"],
                [Blockly.Msg["TCS3200_FREQ_20"], "20"],
                [Blockly.Msg["TCS3200_FREQ_100"], "100"]
            ]), "FREQ");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["XIAOBAI_HUE"]);
        this.setTooltip(Blockly.Msg["TCS3200_SET_FREQUENCY_TOOLTIP"]);
        this.setHelpUrl("");
    }
};
