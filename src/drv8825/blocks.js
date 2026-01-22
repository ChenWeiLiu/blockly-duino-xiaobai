// DRV8825 初始化積木
Blockly.Blocks["drv8825_init"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["DRV8825_INIT"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM")
            .appendField("STEP")
            .appendField(new Blockly.FieldNumber(2, 0, 50), "STEP_PIN")
            .appendField("DIR")
            .appendField(new Blockly.FieldNumber(3, 0, 50), "DIR_PIN");
        this.appendDummyInput()
            .appendField("ENABLE")
            .appendField(new Blockly.FieldNumber(4, 0, 50), "ENABLE_PIN")
            .appendField(Blockly.Msg["DRV8825_STEPS_PER_REV"])
            .appendField(new Blockly.FieldNumber(24, 1, 6400), "STEPS_PER_REV");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["DRV8825_HUE"]);
        this.setTooltip(Blockly.Msg["DRV8825_INIT_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// DRV8825 移動步數積木
Blockly.Blocks["drv8825_move_steps"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["DRV8825_MOVE_STEPS"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM")
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg["DRV8825_CLOCKWISE"], "1"],
                [Blockly.Msg["DRV8825_COUNTERCLOCKWISE"], "-1"]
            ]), "DIRECTION");
        this.appendValueInput("STEPS")
            .setCheck("Number")
            .appendField(Blockly.Msg["DRV8825_STEPS"]);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["XIAOBAI_HUE"]);
        this.setTooltip(Blockly.Msg["DRV8825_MOVE_STEPS_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// DRV8825 設定轉速積木
Blockly.Blocks["drv8825_set_speed"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["DRV8825_SET_SPEED"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM");
        this.appendValueInput("SPEED")
            .setCheck("Number")
            .appendField(Blockly.Msg["DRV8825_SPEED_RPM"]);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["DRV8825_HUE"]);
        this.setTooltip(Blockly.Msg["DRV8825_SET_SPEED_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// DRV8825 連續旋轉積木
Blockly.Blocks["drv8825_run"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["DRV8825_RUN"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM")
            .appendField(Blockly.Msg["DRV8825_DIRECTION"])
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg["DRV8825_CLOCKWISE"], "1"],
                [Blockly.Msg["DRV8825_COUNTERCLOCKWISE"], "-1"]
            ]), "DIRECTION");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["DRV8825_HUE"]);
        this.setTooltip(Blockly.Msg["DRV8825_RUN_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// DRV8825 停止積木
Blockly.Blocks["drv8825_stop"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["DRV8825_STOP"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["DRV8825_HUE"]);
        this.setTooltip(Blockly.Msg["DRV8825_STOP_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// DRV8825 啟用積木
Blockly.Blocks["drv8825_enable"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["DRV8825_ENABLE"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["DRV8825_HUE"]);
        this.setTooltip(Blockly.Msg["DRV8825_ENABLE_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// DRV8825 停用積木
Blockly.Blocks["drv8825_disable"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["DRV8825_DISABLE"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["DRV8825_HUE"]);
        this.setTooltip(Blockly.Msg["DRV8825_DISABLE_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// DRV8825 設定加速度積木
Blockly.Blocks["drv8825_set_acceleration"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["DRV8825_SET_ACCEL"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM");
        this.appendValueInput("ACCEL")
            .setCheck("Number")
            .appendField(Blockly.Msg["DRV8825_ACCEL_VALUE"]);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["DRV8825_HUE"]);
        this.setTooltip(Blockly.Msg["DRV8825_SET_ACCEL_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// DRV8825 移動到限位器積木
Blockly.Blocks["drv8825_move_until_limit"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["DRV8825_MOVE_UNTIL_LIMIT"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM")
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg["DRV8825_CLOCKWISE"], "1"],
                [Blockly.Msg["DRV8825_COUNTERCLOCKWISE"], "-1"]
            ]), "DIRECTION");
        this.appendDummyInput()
            .appendField(Blockly.Msg["DRV8825_LIMIT_PIN"])
            .appendField(new Blockly.FieldNumber(12, 0, 50), "LIMIT_PIN")
            .appendField(Blockly.Msg["DRV8825_LIMIT_STATE"])
            .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "TRIGGER_STATE")
            .appendField(Blockly.Msg["DRV8825_LIMIT_STOP"]);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["DRV8825_HUE"]);
        this.setTooltip(Blockly.Msg["DRV8825_MOVE_UNTIL_LIMIT_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// DRV8825 連續旋轉到限位器積木
Blockly.Blocks["drv8825_run_until_limit"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["DRV8825_RUN_UNTIL_LIMIT"])
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "NUM")
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg["DRV8825_CLOCKWISE"], "1"],
                [Blockly.Msg["DRV8825_COUNTERCLOCKWISE"], "-1"]
            ]), "DIRECTION");
        this.appendDummyInput()
            .appendField(Blockly.Msg["DRV8825_LIMIT_PIN"])
            .appendField(new Blockly.FieldNumber(12, 0, 50), "LIMIT_PIN")
            .appendField(Blockly.Msg["DRV8825_LIMIT_STATE"])
            .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "TRIGGER_STATE")
            .appendField(Blockly.Msg["DRV8825_LIMIT_STOP"]);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["DRV8825_HUE"]);
        this.setTooltip(Blockly.Msg["DRV8825_RUN_UNTIL_LIMIT_TOOLTIP"]);
        this.setHelpUrl("");
    }
};
