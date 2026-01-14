// DRV8825 步進馬達
Blockly.Msg["DRV8825"] = "DRV8825 步進馬達";
Blockly.Msg["DRV8825_HUE"] = "20";

// DRV8825 積木文字
Blockly.Msg["DRV8825_INIT"] = "初始化 DRV8825 #";
Blockly.Msg["DRV8825_INIT_TOOLTIP"] = "初始化 DRV8825 步進馬達驅動器，設定 STEP、DIR、ENABLE 腳位和每轉步數";
Blockly.Msg["DRV8825_STEPS_PER_REV"] = "每轉步數";

Blockly.Msg["DRV8825_MOVE_STEPS"] = "馬達 #";
Blockly.Msg["DRV8825_STEPS"] = "移動步數";
Blockly.Msg["DRV8825_MOVE_STEPS_TOOLTIP"] = "讓步進馬達移動指定步數（正數為順時針，負數為逆時針）";

Blockly.Msg["DRV8825_SET_SPEED"] = "設定馬達 #";
Blockly.Msg["DRV8825_SPEED_RPM"] = "轉速 (RPM)";
Blockly.Msg["DRV8825_SET_SPEED_TOOLTIP"] = "設定步進馬達的轉速（每分鐘轉數）";

Blockly.Msg["DRV8825_RUN"] = "馬達 #";
Blockly.Msg["DRV8825_DIRECTION"] = "方向";
Blockly.Msg["DRV8825_CLOCKWISE"] = "順時針";
Blockly.Msg["DRV8825_COUNTERCLOCKWISE"] = "逆時針";
Blockly.Msg["DRV8825_RUN_TOOLTIP"] = "讓步進馬達以設定的速度連續旋轉";

Blockly.Msg["DRV8825_STOP"] = "停止馬達 #";
Blockly.Msg["DRV8825_STOP_TOOLTIP"] = "立即停止步進馬達";

Blockly.Msg["DRV8825_ENABLE"] = "啟用馬達 #";
Blockly.Msg["DRV8825_ENABLE_TOOLTIP"] = "啟用步進馬達（提供電流鎖定馬達）";

Blockly.Msg["DRV8825_DISABLE"] = "停用馬達 #";
Blockly.Msg["DRV8825_DISABLE_TOOLTIP"] = "停用馬達（省電模式，馬達自由轉動）";

Blockly.Msg["DRV8825_SET_ACCEL"] = "設定馬達 #";
Blockly.Msg["DRV8825_ACCEL_VALUE"] = "加速度 (步/秒²)";
Blockly.Msg["DRV8825_SET_ACCEL_TOOLTIP"] = "設定步進馬達的加速度（數值越大加速越快）";

// 限位器積木
Blockly.Msg["DRV8825_MOVE_UNTIL_LIMIT"] = "馬達 #";
Blockly.Msg["DRV8825_RUN_UNTIL_LIMIT"] = "馬達 #";
Blockly.Msg["DRV8825_LIMIT_PIN"] = "移動到限位腳位";
Blockly.Msg["DRV8825_LIMIT_STATE"] = "為";
Blockly.Msg["DRV8825_LIMIT_STOP"] = "時停止";
Blockly.Msg["DRV8825_MOVE_UNTIL_LIMIT_TOOLTIP"] = "讓步進馬達朝指定方向移動，直到限位開關被觸發為止";
Blockly.Msg["DRV8825_RUN_UNTIL_LIMIT_TOOLTIP"] = "讓步進馬達以設定速度連續旋轉，直到限位開關被觸發為止";
