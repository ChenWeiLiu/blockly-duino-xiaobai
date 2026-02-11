// INA219 初始化積木
Blockly.Blocks["ina219_init"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["INA219_INIT"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM")
            .appendField(Blockly.Msg["INA219_ADDR"])
            .appendField(new Blockly.FieldDropdown([
                ["0x40 (A0=GND, A1=GND)", "0x40"],
                ["0x41 (A0=VS, A1=GND)", "0x41"],
                ["0x44 (A0=GND, A1=VS)", "0x44"],
                ["0x45 (A0=VS, A1=VS)", "0x45"]
            ]), "ADDR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["XIAOBAI_HUE"]);
        this.setTooltip(Blockly.Msg["INA219_INIT_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// INA219 讀取匯流排電壓積木
Blockly.Blocks["ina219_read_bus_voltage"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["INA219_READ_BUS_VOLTAGE"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Msg["XIAOBAI_HUE"]);
        this.setTooltip(Blockly.Msg["INA219_READ_BUS_VOLTAGE_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// INA219 讀取分流電壓積木
Blockly.Blocks["ina219_read_shunt_voltage"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["INA219_READ_SHUNT_VOLTAGE"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Msg["XIAOBAI_HUE"]);
        this.setTooltip(Blockly.Msg["INA219_READ_SHUNT_VOLTAGE_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// INA219 讀取電流積木
Blockly.Blocks["ina219_read_current"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["INA219_READ_CURRENT"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Msg["XIAOBAI_HUE"]);
        this.setTooltip(Blockly.Msg["INA219_READ_CURRENT_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// INA219 讀取功率積木
Blockly.Blocks["ina219_read_power"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["INA219_READ_POWER"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Msg["XIAOBAI_HUE"]);
        this.setTooltip(Blockly.Msg["INA219_READ_POWER_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// INA219 設定校準範圍積木
Blockly.Blocks["ina219_set_calibration"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["INA219_SET_CALIBRATION"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM")
            .appendField(Blockly.Msg["INA219_RANGE"])
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg["INA219_RANGE_32V_2A"], "32V_2A"],
                [Blockly.Msg["INA219_RANGE_32V_1A"], "32V_1A"],
                [Blockly.Msg["INA219_RANGE_16V_400MA"], "16V_400mA"]
            ]), "RANGE");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["XIAOBAI_HUE"]);
        this.setTooltip(Blockly.Msg["INA219_SET_CALIBRATION_TOOLTIP"]);
        this.setHelpUrl("");
    }
};
