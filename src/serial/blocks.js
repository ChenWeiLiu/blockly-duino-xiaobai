// Serial Communication Blocks for ESP32

// Serial Begin Block
Blockly.Blocks['xiaobai_serial_begin'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_SERIAL_BEGIN)
            .appendField(Blockly.Msg.XIAOBAI_SERIAL_INIT)
            .appendField(new Blockly.FieldDropdown([
                ["Serial", "Serial"],
                ["Serial1", "Serial1"],
                ["Serial2", "Serial2"]
            ]), "SERIAL_NAME")
            .appendField(Blockly.Msg.XIAOBAI_SERIAL_BAUD)
            .appendField(new Blockly.FieldDropdown([
                ["4800", "4800"],
                ["9600", "9600"],
                ["19200", "19200"],
                ["38400", "38400"],
                ["57600", "57600"],
                ["115200", "115200"]
            ]), "BAUD_RATE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_SERIAL_BEGIN_TOOLTIP);
        this.setHelpUrl('');
    }
};

// Serial End Block
Blockly.Blocks['xiaobai_serial_end'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_SERIAL_END)
            .appendField(new Blockly.FieldDropdown([
                ["Serial", "Serial"],
                ["Serial1", "Serial1"],
                ["Serial2", "Serial2"]
            ]), "SERIAL_NAME")
            .appendField(Blockly.Msg.XIAOBAI_SERIAL_END_TEXT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_SERIAL_END_TOOLTIP);
        this.setHelpUrl('');
    }
};

// Serial Print Block
Blockly.Blocks['xiaobai_serial_print'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .setCheck(null)
            .appendField(Blockly.Msg.XIAOBAI_SERIAL_PRINT)
            .appendField(new Blockly.FieldDropdown([
                ["Serial", "Serial"],
                ["Serial1", "Serial1"],
                ["Serial2", "Serial2"]
            ]), "SERIAL_NAME")
            .appendField(Blockly.Msg.XIAOBAI_SERIAL_PRINT_TEXT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_SERIAL_PRINT_TOOLTIP);
        this.setHelpUrl('');
    }
};

// Serial Println Block
Blockly.Blocks['xiaobai_serial_println'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .setCheck(null)
            .appendField(Blockly.Msg.XIAOBAI_SERIAL_PRINTLN)
            .appendField(new Blockly.FieldDropdown([
                ["Serial", "Serial"],
                ["Serial1", "Serial1"],
                ["Serial2", "Serial2"]
            ]), "SERIAL_NAME")
            .appendField(Blockly.Msg.XIAOBAI_SERIAL_PRINTLN_TEXT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_SERIAL_PRINTLN_TOOLTIP);
        this.setHelpUrl('');
    }
};

// Serial Available Block
Blockly.Blocks['xiaobai_serial_available'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_SERIAL_AVAILABLE)
            .appendField(new Blockly.FieldDropdown([
                ["Serial", "Serial"],
                ["Serial1", "Serial1"],
                ["Serial2", "Serial2"]
            ]), "SERIAL_NAME")
            .appendField(Blockly.Msg.XIAOBAI_SERIAL_AVAILABLE_TEXT);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_SERIAL_AVAILABLE_TOOLTIP);
        this.setHelpUrl('');
    }
};

// Serial Read Block
Blockly.Blocks['xiaobai_serial_read'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_SERIAL_READ)
            .appendField(new Blockly.FieldDropdown([
                ["Serial", "Serial"],
                ["Serial1", "Serial1"],
                ["Serial2", "Serial2"]
            ]), "SERIAL_NAME")
            .appendField(Blockly.Msg.XIAOBAI_SERIAL_READ_TEXT);
        this.setOutput(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_SERIAL_READ_TOOLTIP);
        this.setHelpUrl('');
    }
};

// Serial ReadStringUntil Block
Blockly.Blocks['xiaobai_serial_readstringuntil'] = {
    init: function () {
        this.appendValueInput("CHAR")
            .setCheck(null)
            .appendField(Blockly.Msg.XIAOBAI_SERIAL_READSTRINGUNTIL)
            .appendField(new Blockly.FieldDropdown([
                ["Serial", "Serial"],
                ["Serial1", "Serial1"],
                ["Serial2", "Serial2"]
            ]), "SERIAL_NAME")
            .appendField(Blockly.Msg.XIAOBAI_SERIAL_READSTRINGUNTIL_TEXT);
        this.setOutput(true, "String");
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_SERIAL_READSTRINGUNTIL_TOOLTIP);
        this.setHelpUrl('');
    }
};

// Break Line Block (for use with readStringUntil)
Blockly.Blocks['xiaobai_breakline'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_BREAKLINE);
        this.setOutput(true, null);
        this.setColour(120); // 綠色
        this.setTooltip(Blockly.Msg.XIAOBAI_BREAKLINE_TOOLTIP);
        this.setHelpUrl('');
    }
};
