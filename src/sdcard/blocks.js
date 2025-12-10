// MicroSD Card Adapter Blocks

// SD Card Initialize Block
Blockly.Blocks['xiaobai_sd_init'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_SD_INIT)
            .appendField(Blockly.Msg.XIAOBAI_SD_CS_PIN)
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
            ]), "CS_PIN");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_SD_INIT_TOOLTIP);
        this.setHelpUrl('');
    }
};

// SD Card File Open Block
Blockly.Blocks['xiaobai_sd_open'] = {
    init: function () {
        this.appendValueInput("FILENAME")
            .setCheck("String")
            .appendField(Blockly.Msg.XIAOBAI_SD_OPEN);
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_SD_MODE)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.XIAOBAI_SD_MODE_READ, "FILE_READ"],
                [Blockly.Msg.XIAOBAI_SD_MODE_WRITE, "FILE_WRITE"],
                [Blockly.Msg.XIAOBAI_SD_MODE_APPEND, "FILE_APPEND"]
            ]), "MODE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_SD_OPEN_TOOLTIP);
        this.setHelpUrl('');
    }
};

// SD Card File Close Block
Blockly.Blocks['xiaobai_sd_close'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_SD_CLOSE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_SD_CLOSE_TOOLTIP);
        this.setHelpUrl('');
    }
};

// SD Card Write Data Block
Blockly.Blocks['xiaobai_sd_write'] = {
    init: function () {
        this.appendValueInput("DATA")
            .setCheck(null)
            .appendField(Blockly.Msg.XIAOBAI_SD_WRITE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_SD_WRITE_TOOLTIP);
        this.setHelpUrl('');
    }
};

// SD Card Write Line Block
Blockly.Blocks['xiaobai_sd_writeln'] = {
    init: function () {
        this.appendValueInput("DATA")
            .setCheck(null)
            .appendField(Blockly.Msg.XIAOBAI_SD_WRITELN);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_SD_WRITELN_TOOLTIP);
        this.setHelpUrl('');
    }
};

// SD Card Read Line Block
Blockly.Blocks['xiaobai_sd_readln'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_SD_READLN);
        this.setOutput(true, "String");
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_SD_READLN_TOOLTIP);
        this.setHelpUrl('');
    }
};

// SD Card File Available Block
Blockly.Blocks['xiaobai_sd_available'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.XIAOBAI_SD_AVAILABLE);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_SD_AVAILABLE_TOOLTIP);
        this.setHelpUrl('');
    }
};

// SD Card File Exists Block
Blockly.Blocks['xiaobai_sd_exists'] = {
    init: function () {
        this.appendValueInput("FILENAME")
            .setCheck("String")
            .appendField(Blockly.Msg.XIAOBAI_SD_EXISTS);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_SD_EXISTS_TOOLTIP);
        this.setHelpUrl('');
    }
};

// SD Card Remove File Block
Blockly.Blocks['xiaobai_sd_remove'] = {
    init: function () {
        this.appendValueInput("FILENAME")
            .setCheck("String")
            .appendField(Blockly.Msg.XIAOBAI_SD_REMOVE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_SD_REMOVE_TOOLTIP);
        this.setHelpUrl('');
    }
};

// SD Card Make Directory Block
Blockly.Blocks['xiaobai_sd_mkdir'] = {
    init: function () {
        this.appendValueInput("DIRNAME")
            .setCheck("String")
            .appendField(Blockly.Msg.XIAOBAI_SD_MKDIR);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.XIAOBAI_HUE);
        this.setTooltip(Blockly.Msg.XIAOBAI_SD_MKDIR_TOOLTIP);
        this.setHelpUrl('');
    }
};
