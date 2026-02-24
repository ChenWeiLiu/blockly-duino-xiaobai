// ESP-NOW Wireless Communication
Blockly.Msg["ESPNOW"] = "ESP-NOW Wireless";
Blockly.Msg["ESPNOW_HUE"] = "260";

// Block Labels
Blockly.Msg["ESPNOW_INIT"] = "Initialize ESP-NOW";
Blockly.Msg["ESPNOW_INIT_TOOLTIP"] = "Initialize ESP-NOW wireless communication with bidirectional support";

Blockly.Msg["ESPNOW_GET_MAC"] = "Device MAC Address";
Blockly.Msg["ESPNOW_GET_MAC_TOOLTIP"] = "Get this device's MAC address, format: AA:BB:CC:DD:EE:FF";

Blockly.Msg["ESPNOW_ADD_PEER"] = "Add peer device MAC";
Blockly.Msg["ESPNOW_ADD_PEER_TOOLTIP"] = "Add a peer device for communication, requires target device's MAC address";

Blockly.Msg["ESPNOW_ADD_BROADCAST"] = "Add broadcast address";
Blockly.Msg["ESPNOW_ADD_BROADCAST_TOOLTIP"] = "Add broadcast address (FF:FF:FF:FF:FF:FF) to send messages to all devices";

Blockly.Msg["ESPNOW_SEND"] = "Send data";
Blockly.Msg["ESPNOW_TO_MAC"] = "to MAC";
Blockly.Msg["ESPNOW_SEND_TOOLTIP"] = "Send data to the device with specified MAC address";

Blockly.Msg["ESPNOW_BROADCAST"] = "Broadcast data";
Blockly.Msg["ESPNOW_BROADCAST_TOOLTIP"] = "Broadcast data to all paired devices";

Blockly.Msg["ESPNOW_ON_RECEIVE"] = "When ESP-NOW data received";
Blockly.Msg["ESPNOW_ON_RECEIVE_TOOLTIP"] = "Execute when data is received from another device via ESP-NOW";

Blockly.Msg["ESPNOW_RECEIVED_DATA"] = "Received data";
Blockly.Msg["ESPNOW_RECEIVED_DATA_TOOLTIP"] = "Get the content of the last received data";

Blockly.Msg["ESPNOW_SENDER_MAC"] = "Sender MAC address";
Blockly.Msg["ESPNOW_SENDER_MAC_TOOLTIP"] = "Get the MAC address of the device that sent the last data, can be used to reply";

Blockly.Msg["ESPNOW_SEND_STATUS"] = "Send successful?";
Blockly.Msg["ESPNOW_SEND_STATUS_TOOLTIP"] = "Check if the last send was successful (true/false)";

// Variable send and parse
Blockly.Msg["ESPNOW_SEND_VAR"] = "Send variable";
Blockly.Msg["ESPNOW_VAR_VALUE"] = "value";
Blockly.Msg["ESPNOW_SEND_VAR_TOOLTIP"] = "Send variable name and value (format: var=value)";

Blockly.Msg["ESPNOW_BROADCAST_VAR"] = "Broadcast variable";
Blockly.Msg["ESPNOW_BROADCAST_VAR_TOOLTIP"] = "Broadcast variable name and value to all devices";

Blockly.Msg["ESPNOW_PARSE_VAR"] = "Parse variable";
Blockly.Msg["ESPNOW_PARSE_VAR_FROM"] = "'s value, split by comma, get item at index";
Blockly.Msg["ESPNOW_PARSE_INDEX"] = "";
Blockly.Msg["ESPNOW_PARSE_INDEX_END"] = "";
Blockly.Msg["ESPNOW_PARSE_VAR_TOOLTIP"] = "Parse variable value and optionally get Nth item if separated by commas (0-indexed). Defaults to 0.";

Blockly.Msg["ESPNOW_HAS_VAR"] = "Has received variable";
Blockly.Msg["ESPNOW_HAS_VAR_END"] = "?";
Blockly.Msg["ESPNOW_HAS_VAR_TOOLTIP"] = "Check if the received data contains the specified variable";
