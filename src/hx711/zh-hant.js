// HX711 分類
Blockly.Msg["HX711"] = "HX711 稱重模組";

// HX711 積木文字
Blockly.Msg["HX711_INIT"] = "初始化 HX711 #";
Blockly.Msg["HX711_INIT_TOOLTIP"] = "初始化 HX711 稱重模組，設定 DOUT 和 SCK 腳位，並選擇採樣率";
Blockly.Msg["HX711_RATE"] = "採樣率";
Blockly.Msg["HX711_RATE_FAST"] = "快速 (80Hz, ~12ms)";
Blockly.Msg["HX711_RATE_PRECISE"] = "精確 (10Hz, ~100ms)";


Blockly.Msg["HX711_READ"] = "讀取 HX711 #";
Blockly.Msg["HX711_AVG_TIMES"] = "平均";
Blockly.Msg["HX711_TIMES_UNIT"] = "次";
Blockly.Msg["HX711_READ_TOOLTIP"] = "讀取 HX711 稱重模組的重量值（可設定平均讀取次數 1-20 次）";


Blockly.Msg["HX711_TARE"] = "HX711 # 去皮歸零";
Blockly.Msg["HX711_TARE_TOOLTIP"] = "將當前重量設定為零點（去皮）";

Blockly.Msg["HX711_CALIBRATE"] = "校準 HX711 #";
Blockly.Msg["HX711_SCALE_FACTOR"] = "校準係數";
Blockly.Msg["HX711_CALIBRATE_TOOLTIP"] = "設定校準係數，用於將原始值轉換為實際重量";

Blockly.Msg["HX711_READ_RAW"] = "讀取 HX711 # 原始值";
Blockly.Msg["HX711_READ_RAW_TOOLTIP"] = "讀取 HX711 的原始數值（未經校準）";

Blockly.Msg["HX711_SET_GAIN"] = "設定 HX711 #";
Blockly.Msg["HX711_GAIN"] = "增益";
Blockly.Msg["HX711_SET_GAIN_TOOLTIP"] = "設定 HX711 的增益值（128/64 為 A 通道，32 為 B 通道）";

Blockly.Msg["HX711_IS_READY"] = "HX711 # 是否準備好";
Blockly.Msg["HX711_IS_READY_TOOLTIP"] = "檢查 HX711 模組是否準備好讀取數據";
