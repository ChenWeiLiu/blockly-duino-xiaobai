// INA219 分類
Blockly.Msg["INA219"] = "INA219 電流電壓感測器";

// INA219 積木文字
Blockly.Msg["INA219_INIT"] = "初始化 INA219 #";
Blockly.Msg["INA219_ADDR"] = "位址";
Blockly.Msg["INA219_INIT_TOOLTIP"] = "初始化 INA219 電流電壓感測器模組，透過不同 I2C 位址可同時使用多顆";

Blockly.Msg["INA219_READ_BUS_VOLTAGE"] = "讀取 INA219 # 匯流排電壓 (V)";
Blockly.Msg["INA219_READ_BUS_VOLTAGE_TOOLTIP"] = "讀取 INA219 的匯流排電壓，單位：伏特 (V)";

Blockly.Msg["INA219_READ_SHUNT_VOLTAGE"] = "讀取 INA219 # 分流電壓 (mV)";
Blockly.Msg["INA219_READ_SHUNT_VOLTAGE_TOOLTIP"] = "讀取 INA219 的分流電壓，單位：毫伏 (mV)";

Blockly.Msg["INA219_READ_CURRENT"] = "讀取 INA219 # 電流 (mA)";
Blockly.Msg["INA219_READ_CURRENT_TOOLTIP"] = "讀取 INA219 的電流值，單位：毫安培 (mA)";

Blockly.Msg["INA219_READ_POWER"] = "讀取 INA219 # 功率 (mW)";
Blockly.Msg["INA219_READ_POWER_TOOLTIP"] = "讀取 INA219 的功率值，單位：毫瓦 (mW)";

Blockly.Msg["INA219_SET_CALIBRATION"] = "設定 INA219 #";
Blockly.Msg["INA219_RANGE"] = "量測範圍";
Blockly.Msg["INA219_RANGE_32V_2A"] = "32V / 2A（預設）";
Blockly.Msg["INA219_RANGE_32V_1A"] = "32V / 1A（高精度）";
Blockly.Msg["INA219_RANGE_16V_400MA"] = "16V / 400mA（最高精度）";
Blockly.Msg["INA219_SET_CALIBRATION_TOOLTIP"] = "設定 INA219 的量測範圍與精度，範圍越小精度越高";
