// ESP-NOW 無線通訊
Blockly.Msg["ESPNOW"] = "ESP-NOW 無線通訊";
Blockly.Msg["ESPNOW_HUE"] = "260";

// 積木文字
Blockly.Msg["ESPNOW_INIT"] = "初始化 ESP-NOW";
Blockly.Msg["ESPNOW_INIT_TOOLTIP"] = "初始化 ESP-NOW 無線通訊，支援雙向收發";

Blockly.Msg["ESPNOW_GET_MAC"] = "本機 MAC 位址";
Blockly.Msg["ESPNOW_GET_MAC_TOOLTIP"] = "取得本裝置的 MAC 位址，格式如 AA:BB:CC:DD:EE:FF";

Blockly.Msg["ESPNOW_ADD_PEER"] = "新增對等裝置 MAC";
Blockly.Msg["ESPNOW_ADD_PEER_TOOLTIP"] = "新增要通訊的對等裝置，需提供目標裝置的 MAC 位址";

Blockly.Msg["ESPNOW_ADD_BROADCAST"] = "新增廣播位址";
Blockly.Msg["ESPNOW_ADD_BROADCAST_TOOLTIP"] = "新增廣播位址 (FF:FF:FF:FF:FF:FF)，可發送訊息給所有裝置";

Blockly.Msg["ESPNOW_SEND"] = "發送資料";
Blockly.Msg["ESPNOW_TO_MAC"] = "給 MAC";
Blockly.Msg["ESPNOW_SEND_TOOLTIP"] = "發送資料給指定 MAC 位址的裝置";

Blockly.Msg["ESPNOW_BROADCAST"] = "廣播資料";
Blockly.Msg["ESPNOW_BROADCAST_TOOLTIP"] = "廣播資料給所有已配對的裝置";

Blockly.Msg["ESPNOW_ON_RECEIVE"] = "當收到 ESP-NOW 資料時";
Blockly.Msg["ESPNOW_ON_RECEIVE_TOOLTIP"] = "當收到其他裝置發送的 ESP-NOW 資料時執行";

Blockly.Msg["ESPNOW_RECEIVED_DATA"] = "接收到的資料";
Blockly.Msg["ESPNOW_RECEIVED_DATA_TOOLTIP"] = "取得最後一次接收到的資料內容";

Blockly.Msg["ESPNOW_SENDER_MAC"] = "發送者 MAC 位址";
Blockly.Msg["ESPNOW_SENDER_MAC_TOOLTIP"] = "取得最後一次發送資料的裝置 MAC 位址，可用於回傳資料";

Blockly.Msg["ESPNOW_SEND_STATUS"] = "發送成功?";
Blockly.Msg["ESPNOW_SEND_STATUS_TOOLTIP"] = "檢查最後一次發送是否成功 (true/false)";

// 變數發送與解析
Blockly.Msg["ESPNOW_SEND_VAR"] = "發送變數";
Blockly.Msg["ESPNOW_VAR_VALUE"] = "數值";
Blockly.Msg["ESPNOW_SEND_VAR_TOOLTIP"] = "發送變數名稱與數值 (格式: 變數=數值)";

Blockly.Msg["ESPNOW_BROADCAST_VAR"] = "廣播變數";
Blockly.Msg["ESPNOW_BROADCAST_VAR_TOOLTIP"] = "廣播變數名稱與數值給所有裝置";

Blockly.Msg["ESPNOW_PARSE_VAR"] = "解析變數";
Blockly.Msg["ESPNOW_PARSE_VAR_FROM"] = "的數值，以逗號分割取第";
Blockly.Msg["ESPNOW_PARSE_INDEX"] = "項";
Blockly.Msg["ESPNOW_PARSE_INDEX_END"] = "";
Blockly.Msg["ESPNOW_PARSE_VAR_TOOLTIP"] = "從接收到的資料中解析變數數值，如果數字之間有逗號，可設定要取出第幾項 (從 0 開始)。全取請填 0 或不接。";

Blockly.Msg["ESPNOW_HAS_VAR"] = "有收到變數";
Blockly.Msg["ESPNOW_HAS_VAR_END"] = "?";
Blockly.Msg["ESPNOW_HAS_VAR_TOOLTIP"] = "判斷接收到的資料中是否包含指定的變數";
