// MAX31865 PT100 Temperature Sensor Blocks

// MAX31865 Initialize Block
Blockly.Blocks['xiaobai_max31865_init'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_MAX31865_INIT)
            .appendField(Blockly.Msg.XIAOBAI_MAX31865_CS_PIN)
            .appendField(new Blockly.FieldDropdown([
                ["5", "5"],
                ["2", "2"],
                ["4", "4"],
                ["12", "12"],
                ["13", "13"],
                ["14", "14"],
                ["15", "15"],
                ["16", "16"],
                ["17", "17"],
                ["18", "18"],
                ["19", "19"],
                ["21", "21"],
                ["22", "22"],
                ["23", "23"],
                ["25", "25"],
                ["26", "26"],
                ["27", "27"],
                ["32", "32"],
                ["33", "33"]
            ]), "CS_PIN");
        this.appendDummyInput()
            .appendField("SCK")
            .appendField(new Blockly.FieldNumber(18, 0, 50), "SCK_PIN")
            .appendField("SDO")
            .appendField(new Blockly.FieldNumber(19, 0, 50), "SDO_PIN")
            .appendField("SDI")
            .appendField(new Blockly.FieldNumber(23, 0, 50), "SDI_PIN");
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_MAX31865_PT_TYPE)
            .appendField(new Blockly.FieldDropdown([
                ["PT100", "PT100"],
                ["PT1000", "PT1000"]
            ]), "PT_TYPE");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_MAX31865_INIT_TOOLTIP);
        this.setHelpUrl('');
    }
};

// MAX31865 Read Temperature (Celsius)
Blockly.Blocks['xiaobai_max31865_read_celsius'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_MAX31865_READ)
            .appendField(Blockly.Msg.XIAOBAI_MAX31865_CELSIUS);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_MAX31865_READ_CELSIUS_TOOLTIP);
        this.setHelpUrl('');
    }
};

// MAX31865 Read Temperature (Fahrenheit)
Blockly.Blocks['xiaobai_max31865_read_fahrenheit'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_MAX31865_READ)
            .appendField(Blockly.Msg.XIAOBAI_MAX31865_FAHRENHEIT);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_MAX31865_READ_FAHRENHEIT_TOOLTIP);
        this.setHelpUrl('');
    }
};

// MAX31865 Read Resistance
Blockly.Blocks['xiaobai_max31865_read_resistance'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_MAX31865_READ_RESISTANCE);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_MAX31865_READ_RESISTANCE_TOOLTIP);
        this.setHelpUrl('');
    }
};

// MAX31865 Check Fault
Blockly.Blocks['xiaobai_max31865_check_fault'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_MAX31865_CHECK_FAULT);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_MAX31865_CHECK_FAULT_TOOLTIP);
        this.setHelpUrl('');
    }
};
