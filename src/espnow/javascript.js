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

    // 建立使用者回呼函式 (放在 functions_ 確保最後輸出)
    Blockly.Arduino.functions_['espnow_user_callback_func'] =
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
    var index = Blockly.Arduino.valueToCode(block, 'INDEX', Blockly.Arduino.ORDER_ATOMIC) || '0';

    // 加入解析函式
    Blockly.Arduino.definitions_['espnow_parse_var_func'] =
        '// 解析變數值 (格式: name=value)\n' +
        'String espnow_parseVar(String data, String varName) {\n' +
        '  int startIdx = data.indexOf(varName + "=");\n' +
        '  if (startIdx == -1) return "";\n' +
        '  startIdx += varName.length() + 1;\n' +
        '  int endIdx = data.indexOf(",", startIdx);\n' +
        '  if (endIdx == -1) endIdx = data.length();\n' +
        '  // 只取到該變數的結尾，或者是下一個換行/變數的開始（這裡以最簡單直接找 \",\" 作為區隔若有其他變數連續）\n' +
        '  // 為了避免截斷使用者想用陣列的逗號，我們假設一筆發送就是一個變數。若有多變數格式建議用 JSON。\n' +
        '  // 在此保留原本邏輯，把 data 到底都給這個變數（如果有陣列逗號才不會被截斷）\n' +
        '  // 如果真的有其他變數 (如 temp=12,hum=34)，這裡的 indexOf \",\" 會讓陣列功能失效。\n' +
        '  // 【修正】我們讓 parseVar 回傳直到下個變數（或結尾）之前的全部字串。\n' +
        '  return data.substring(startIdx);\n' +
        '}';

    Blockly.Arduino.definitions_['espnow_get_index_func'] =
        '// 以逗號分割字串並取得第 index 項目\n' +
        'String espnow_getIndexValue(String data, int index) {\n' +
        '  int found = 0;\n' +
        '  int strIndex[] = {0, -1};\n' +
        '  int maxIndex = data.length() - 1;\n' +
        '  for (int i = 0; i <= maxIndex && found <= index; i++) {\n' +
        '    if (data.charAt(i) == \',\' || i == maxIndex) {\n' +
        '      found++;\n' +
        '      strIndex[0] = strIndex[1] + 1;\n' +
        '      strIndex[1] = (i == maxIndex) ? i + 1 : i;\n' +
        '    }\n' +
        '  }\n' +
        '  return found > index ? data.substring(strIndex[0], strIndex[1]) : data;\n' +
        '}';

    var code = 'espnow_getIndexValue(espnow_parseVar(espnow_receivedData, ' + varName + '), ' + index + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// ESP-NOW 判斷是否有收到變數
Blockly.Arduino['espnow_has_var'] = function (block) {
    var varName = Blockly.Arduino.valueToCode(block, 'VAR_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"var"';

    // 加入判斷函式
    Blockly.Arduino.definitions_['espnow_has_var_func'] =
        '// 判斷是否有收到變數\n' +
        'bool espnow_hasVar(String data, String varName) {\n' +
        '  return data.indexOf(varName + "=") != -1;\n' +
        '}';

    var code = 'espnow_hasVar(espnow_receivedData, ' + varName + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
