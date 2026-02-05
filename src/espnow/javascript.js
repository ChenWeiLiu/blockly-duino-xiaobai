// ESP-NOW 初始化
Blockly.Arduino['espnow_init'] = function (block) {
    Blockly.Arduino.definitions_['include_esp_now'] = '#include <esp_now.h>';
    Blockly.Arduino.definitions_['include_wifi'] = '#include <WiFi.h>';

    Blockly.Arduino.definitions_['espnow_variables'] =
        '// ESP-NOW 全域變數\n' +
        'String espnow_receivedData = "";\n' +
        'String espnow_senderMac = "";\n' +
        'bool espnow_sendSuccess = false;\n' +
        'void (*espnow_userCallback)() = NULL;';

    Blockly.Arduino.definitions_['espnow_recv_callback'] =
        '// ESP-NOW 接收回呼\n' +
        'void espnow_onDataRecv(const uint8_t *mac, const uint8_t *data, int len) {\n' +
        '  char macStr[18];\n' +
        '  snprintf(macStr, sizeof(macStr), "%02X:%02X:%02X:%02X:%02X:%02X",\n' +
        '           mac[0], mac[1], mac[2], mac[3], mac[4], mac[5]);\n' +
        '  espnow_senderMac = String(macStr);\n' +
        '  char dataStr[251];\n' +
        '  memcpy(dataStr, data, len);\n' +
        '  dataStr[len] = \'\\0\';\n' +
        '  espnow_receivedData = String(dataStr);\n' +
        '  if (espnow_userCallback != NULL) {\n' +
        '    espnow_userCallback();\n' +
        '  }\n' +
        '}';

    Blockly.Arduino.definitions_['espnow_send_callback'] =
        '// ESP-NOW 發送回呼\n' +
        'void espnow_onDataSent(const uint8_t *mac, esp_now_send_status_t status) {\n' +
        '  espnow_sendSuccess = (status == ESP_NOW_SEND_SUCCESS);\n' +
        '}';

    Blockly.Arduino.definitions_['espnow_helper_functions'] =
        '// MAC 字串轉位元組陣列\n' +
        'void espnow_parseMac(const char* macStr, uint8_t* macAddr) {\n' +
        '  sscanf(macStr, "%hhX:%hhX:%hhX:%hhX:%hhX:%hhX",\n' +
        '         &macAddr[0], &macAddr[1], &macAddr[2],\n' +
        '         &macAddr[3], &macAddr[4], &macAddr[5]);\n' +
        '}\n\n' +
        '// 取得本機 MAC 位址\n' +
        'String espnow_getLocalMac() {\n' +
        '  uint8_t mac[6];\n' +
        '  WiFi.macAddress(mac);\n' +
        '  char macStr[18];\n' +
        '  snprintf(macStr, sizeof(macStr), "%02X:%02X:%02X:%02X:%02X:%02X",\n' +
        '           mac[0], mac[1], mac[2], mac[3], mac[4], mac[5]);\n' +
        '  return String(macStr);\n' +
        '}';

    var setupCode =
        'WiFi.mode(WIFI_STA);\n' +
        '  if (esp_now_init() != ESP_OK) {\n' +
        '    Serial.println("ESP-NOW init failed");\n' +
        '    return;\n' +
        '  }\n' +
        '  esp_now_register_recv_cb(espnow_onDataRecv);\n' +
        '  esp_now_register_send_cb(espnow_onDataSent);';

    Blockly.Arduino.setups_['setup_espnow'] = setupCode;

    return '// ESP-NOW 已初始化\n';
};

// ESP-NOW 取得本機 MAC 位址
Blockly.Arduino['espnow_get_mac'] = function (block) {
    var code = 'espnow_getLocalMac()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// ESP-NOW 新增對等裝置
Blockly.Arduino['espnow_add_peer'] = function (block) {
    var mac = Blockly.Arduino.valueToCode(block, 'MAC', Blockly.Arduino.ORDER_ATOMIC) || '"00:00:00:00:00:00"';

    var code =
        '{\n' +
        '  esp_now_peer_info_t peerInfo = {};\n' +
        '  espnow_parseMac(' + mac + '.c_str(), peerInfo.peer_addr);\n' +
        '  peerInfo.channel = 0;\n' +
        '  peerInfo.encrypt = false;\n' +
        '  esp_now_add_peer(&peerInfo);\n' +
        '}\n';
    return code;
};

// ESP-NOW 新增廣播位址
Blockly.Arduino['espnow_add_broadcast'] = function (block) {
    var code =
        '{\n' +
        '  esp_now_peer_info_t peerInfo = {};\n' +
        '  memset(peerInfo.peer_addr, 0xFF, 6);  // 廣播位址 FF:FF:FF:FF:FF:FF\n' +
        '  peerInfo.channel = 0;\n' +
        '  peerInfo.encrypt = false;\n' +
        '  esp_now_add_peer(&peerInfo);\n' +
        '}\n';
    return code;
};

// ESP-NOW 發送資料給指定裝置
Blockly.Arduino['espnow_send'] = function (block) {
    var data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC) || '""';
    var mac = Blockly.Arduino.valueToCode(block, 'MAC', Blockly.Arduino.ORDER_ATOMIC) || '"00:00:00:00:00:00"';

    var code =
        '{\n' +
        '  uint8_t peerAddr[6];\n' +
        '  espnow_parseMac(' + mac + '.c_str(), peerAddr);\n' +
        '  String sendData = String(' + data + ');\n' +
        '  esp_now_send(peerAddr, (uint8_t*)sendData.c_str(), sendData.length());\n' +
        '}\n';
    return code;
};

// ESP-NOW 廣播資料
Blockly.Arduino['espnow_broadcast'] = function (block) {
    var data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC) || '""';

    var code =
        '{\n' +
        '  uint8_t broadcastAddr[6] = {0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF};\n' +
        '  String sendData = String(' + data + ');\n' +
        '  esp_now_send(broadcastAddr, (uint8_t*)sendData.c_str(), sendData.length());\n' +
        '}\n';
    return code;
};

// ESP-NOW 當收到資料時 (回呼)
Blockly.Arduino['espnow_on_receive'] = function (block) {
    var statements = Blockly.Arduino.statementToCode(block, 'CALLBACK');

    // 建立使用者回呼函式
    Blockly.Arduino.definitions_['zzz_espnow_user_callback_func'] =
        '// 使用者定義的 ESP-NOW 接收處理\n' +
        'void espnow_userCallbackFunc() {\n' +
        statements +
        '}';

    var code = 'espnow_userCallback = espnow_userCallbackFunc;\n';
    return code;
};

// ESP-NOW 接收到的資料
Blockly.Arduino['espnow_received_data'] = function (block) {
    var code = 'espnow_receivedData';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// ESP-NOW 發送者 MAC 位址
Blockly.Arduino['espnow_sender_mac'] = function (block) {
    var code = 'espnow_senderMac';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// ESP-NOW 發送狀態
Blockly.Arduino['espnow_send_status'] = function (block) {
    var code = 'espnow_sendSuccess';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// ESP-NOW 發送變數 (變數名稱=數值)
Blockly.Arduino['espnow_send_var'] = function (block) {
    var varName = Blockly.Arduino.valueToCode(block, 'VAR_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"var"';
    var varValue = Blockly.Arduino.valueToCode(block, 'VAR_VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var mac = Blockly.Arduino.valueToCode(block, 'MAC', Blockly.Arduino.ORDER_ATOMIC) || '"00:00:00:00:00:00"';

    var code =
        '{\n' +
        '  uint8_t peerAddr[6];\n' +
        '  espnow_parseMac(' + mac + '.c_str(), peerAddr);\n' +
        '  String sendData = String(' + varName + ') + "=" + String(' + varValue + ');\n' +
        '  esp_now_send(peerAddr, (uint8_t*)sendData.c_str(), sendData.length());\n' +
        '}\n';
    return code;
};

// ESP-NOW 廣播變數 (變數名稱=數值)
Blockly.Arduino['espnow_broadcast_var'] = function (block) {
    var varName = Blockly.Arduino.valueToCode(block, 'VAR_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"var"';
    var varValue = Blockly.Arduino.valueToCode(block, 'VAR_VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code =
        '{\n' +
        '  uint8_t broadcastAddr[6] = {0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF};\n' +
        '  String sendData = String(' + varName + ') + "=" + String(' + varValue + ');\n' +
        '  esp_now_send(broadcastAddr, (uint8_t*)sendData.c_str(), sendData.length());\n' +
        '}\n';
    return code;
};

// ESP-NOW 解析變數值
Blockly.Arduino['espnow_parse_var'] = function (block) {
    var varName = Blockly.Arduino.valueToCode(block, 'VAR_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"var"';

    // 加入解析函式
    Blockly.Arduino.definitions_['espnow_parse_var_func'] =
        '// 解析變數值 (格式: name=value)\n' +
        'String espnow_parseVar(String data, String varName) {\n' +
        '  int startIdx = data.indexOf(varName + "=");\n' +
        '  if (startIdx == -1) return "";\n' +
        '  startIdx += varName.length() + 1;\n' +
        '  int endIdx = data.indexOf(",", startIdx);\n' +
        '  if (endIdx == -1) endIdx = data.length();\n' +
        '  return data.substring(startIdx, endIdx);\n' +
        '}';

    var code = 'espnow_parseVar(espnow_receivedData, ' + varName + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
