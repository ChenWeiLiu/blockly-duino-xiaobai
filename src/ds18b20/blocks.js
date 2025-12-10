// DS18B20 Temperature Sensor Blocks

// DS18B20 Initialize Block
Blockly.Blocks['xiaobai_ds18b20_init'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_DS18B20_INIT)
            .appendField(Blockly.Msg.XIAOBAI_DS18B20_PIN)
            .appendField(new Blockly.FieldDropdown([
                ["2", "2"],
                ["4", "4"],
                ["5", "5"],
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
            ]), "PIN");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_DS18B20_INIT_TOOLTIP);
        this.setHelpUrl('');
    }
};

// DS18B20 Read Temperature Block (Celsius)
Blockly.Blocks['xiaobai_ds18b20_read_celsius'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_DS18B20_READ)
            .appendField(Blockly.Msg.XIAOBAI_DS18B20_CELSIUS);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_DS18B20_READ_CELSIUS_TOOLTIP);
        this.setHelpUrl('');
    }
};

// DS18B20 Read Temperature Block (Fahrenheit)
Blockly.Blocks['xiaobai_ds18b20_read_fahrenheit'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_DS18B20_READ)
            .appendField(Blockly.Msg.XIAOBAI_DS18B20_FAHRENHEIT);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_DS18B20_READ_FAHRENHEIT_TOOLTIP);
        this.setHelpUrl('');
    }
};

// DS18B20 Request Temperature Block
Blockly.Blocks['xiaobai_ds18b20_request'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_DS18B20_REQUEST);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_DS18B20_REQUEST_TOOLTIP);
        this.setHelpUrl('');
    }
};
