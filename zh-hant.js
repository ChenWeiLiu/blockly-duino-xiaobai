// 小白積木
Blockly.Msg["XIAOBAI"] = "小白積木";
Blockly.Msg["XIAOBAI_HUE"] = "160";

// HX711 分類
Blockly.Msg["HX711"] = "HX711 稱重模組";

// HX711 積木文字
Blockly.Msg["HX711_INIT"] = "初始化 HX711 #";
Blockly.Msg["HX711_INIT_TOOLTIP"] = "初始化 HX711 稱重模組，設定 DOUT 和 SCK 腳位";

Blockly.Msg["HX711_READ"] = "讀取 HX711 #";
Blockly.Msg["HX711_READ_TOOLTIP"] = "讀取 HX711 稱重模組的重量值（平均10次讀數）";

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

// ESP32 數位/類比 I/O
Blockly.Msg["ESP32_IO"] = "ESP32 數位/類比";
Blockly.Msg["ESP32_HUE"] = "200";

Blockly.Msg["ESP32_DIGITAL_WRITE"] = "ESP32 數位輸出";
Blockly.Msg["ESP32_STATE"] = "狀態";
Blockly.Msg["ESP32_DIGITAL_WRITE_TOOLTIP"] = "設定 ESP32 指定腳位的數位輸出（HIGH/LOW）";

Blockly.Msg["ESP32_DIGITAL_READ"] = "ESP32 數位讀取";
Blockly.Msg["ESP32_DIGITAL_READ_TOOLTIP"] = "讀取 ESP32 指定腳位的數位輸入值";

Blockly.Msg["ESP32_ANALOG_READ"] = "ESP32 類比讀取";
Blockly.Msg["ESP32_ANALOG_READ_TOOLTIP"] = "讀取 ESP32 類比腳位的值（0-4095，12位元）";

Blockly.Msg["ESP32_DAC_WRITE"] = "ESP32 類比輸出";
Blockly.Msg["ESP32_DAC_WRITE_TOOLTIP"] = "設定 ESP32 DAC 類比輸出（0-255，8位元，僅 GPIO25/26）";

Blockly.Msg["ESP32_PWM_WRITE"] = "ESP32 PWM 輸出";
Blockly.Msg["ESP32_PWM_CHANNEL"] = "通道";
Blockly.Msg["ESP32_PWM_VALUE"] = "數值";
Blockly.Msg["ESP32_PWM_WRITE_TOOLTIP"] = "設定 ESP32 PWM 通道的輸出值（需先設定 PWM）";

Blockly.Msg["ESP32_PWM_SETUP"] = "ESP32 PWM 設定";
Blockly.Msg["ESP32_PWM_FREQ"] = "頻率(Hz)";
Blockly.Msg["ESP32_PWM_RESOLUTION"] = "解析度(位元)";
Blockly.Msg["ESP32_PWM_SETUP_TOOLTIP"] = "設定 ESP32 PWM 通道的頻率和解析度（8位元=0-255, 10位元=0-1023）";

Blockly.Msg["ESP32_PIN_MODE"] = "ESP32 設定腳位";
Blockly.Msg["ESP32_MODE"] = "模式";
Blockly.Msg["ESP32_MODE_OUTPUT"] = "輸出";
Blockly.Msg["ESP32_MODE_INPUT"] = "輸入";
Blockly.Msg["ESP32_MODE_INPUT_PULLUP"] = "輸入(上拉)";
Blockly.Msg["ESP32_MODE_INPUT_PULLDOWN"] = "輸入(下拉)";
Blockly.Msg["ESP32_PIN_MODE_TOOLTIP"] = "設定 ESP32 腳位模式（輸出、輸入、上拉、下拉）";
