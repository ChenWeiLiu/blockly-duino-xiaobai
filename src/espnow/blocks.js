// ESP-NOW 初始化積木
Blockly.Blocks["espnow_init"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["ESPNOW_INIT"]);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["ESPNOW_HUE"]);
        this.setTooltip(Blockly.Msg["ESPNOW_INIT_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// ESP-NOW 取得本機 MAC 位址
Blockly.Blocks["espnow_get_mac"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["ESPNOW_GET_MAC"]);
        this.setOutput(true, "String");
        this.setColour(Blockly.Msg["ESPNOW_HUE"]);
        this.setTooltip(Blockly.Msg["ESPNOW_GET_MAC_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// ESP-NOW 新增對等裝置
Blockly.Blocks["espnow_add_peer"] = {
    init: function () {
        this.appendValueInput("MAC")
            .setCheck("String")
            .appendField(Blockly.Msg["ESPNOW_ADD_PEER"]);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["ESPNOW_HUE"]);
        this.setTooltip(Blockly.Msg["ESPNOW_ADD_PEER_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// ESP-NOW 新增廣播位址
Blockly.Blocks["espnow_add_broadcast"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["ESPNOW_ADD_BROADCAST"]);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["ESPNOW_HUE"]);
        this.setTooltip(Blockly.Msg["ESPNOW_ADD_BROADCAST_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// ESP-NOW 發送資料給指定裝置
Blockly.Blocks["espnow_send"] = {
    init: function () {
        this.appendValueInput("DATA")
            .setCheck(null)
            .appendField(Blockly.Msg["ESPNOW_SEND"]);
        this.appendValueInput("MAC")
            .setCheck("String")
            .appendField(Blockly.Msg["ESPNOW_TO_MAC"]);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["ESPNOW_HUE"]);
        this.setTooltip(Blockly.Msg["ESPNOW_SEND_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// ESP-NOW 廣播資料
Blockly.Blocks["espnow_broadcast"] = {
    init: function () {
        this.appendValueInput("DATA")
            .setCheck(null)
            .appendField(Blockly.Msg["ESPNOW_BROADCAST"]);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["ESPNOW_HUE"]);
        this.setTooltip(Blockly.Msg["ESPNOW_BROADCAST_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// ESP-NOW 當收到資料時 (回呼)
Blockly.Blocks["espnow_on_receive"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["ESPNOW_ON_RECEIVE"]);
        this.appendStatementInput("CALLBACK")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg["ESPNOW_HUE"]);
        this.setTooltip(Blockly.Msg["ESPNOW_ON_RECEIVE_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// ESP-NOW 接收到的資料
Blockly.Blocks["espnow_received_data"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["ESPNOW_RECEIVED_DATA"]);
        this.setOutput(true, "String");
        this.setColour(Blockly.Msg["ESPNOW_HUE"]);
        this.setTooltip(Blockly.Msg["ESPNOW_RECEIVED_DATA_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// ESP-NOW 發送者 MAC 位址
Blockly.Blocks["espnow_sender_mac"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["ESPNOW_SENDER_MAC"]);
        this.setOutput(true, "String");
        this.setColour(Blockly.Msg["ESPNOW_HUE"]);
        this.setTooltip(Blockly.Msg["ESPNOW_SENDER_MAC_TOOLTIP"]);
        this.setHelpUrl("");
    }
};

// ESP-NOW 發送狀態
Blockly.Blocks["espnow_send_status"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["ESPNOW_SEND_STATUS"]);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Msg["ESPNOW_HUE"]);
        this.setTooltip(Blockly.Msg["ESPNOW_SEND_STATUS_TOOLTIP"]);
        this.setHelpUrl("");
    }
};
