// HX711 Category
Blockly.Msg["HX711"] = "HX711 Load Cell";

// HX711 Block Labels
Blockly.Msg["HX711_INIT"] = "Initialize HX711 #";
Blockly.Msg["HX711_INIT_TOOLTIP"] = "Initialize HX711 load cell module with DOUT and SCK pins, and select sampling rate";
Blockly.Msg["HX711_RATE"] = "Sampling Rate";
Blockly.Msg["HX711_RATE_FAST"] = "Fast (80Hz, ~12ms)";
Blockly.Msg["HX711_RATE_PRECISE"] = "Precise (10Hz, ~100ms)";


Blockly.Msg["HX711_READ"] = "Read HX711 #";
Blockly.Msg["HX711_AVG_TIMES"] = "Average";
Blockly.Msg["HX711_TIMES_UNIT"] = "times";
Blockly.Msg["HX711_READ_TOOLTIP"] = "Read weight from HX711 load cell (customizable average readings: 1-20 times)";


Blockly.Msg["HX711_TARE"] = "Tare HX711 #";
Blockly.Msg["HX711_TARE_TOOLTIP"] = "Set current weight as zero point (tare)";

Blockly.Msg["HX711_CALIBRATE"] = "Calibrate HX711 #";
Blockly.Msg["HX711_SCALE_FACTOR"] = "Scale Factor";
Blockly.Msg["HX711_CALIBRATE_TOOLTIP"] = "Set calibration factor to convert raw value to actual weight";

Blockly.Msg["HX711_READ_RAW"] = "Read HX711 # Raw";
Blockly.Msg["HX711_READ_RAW_TOOLTIP"] = "Read raw value from HX711 (uncalibrated)";

Blockly.Msg["HX711_SET_GAIN"] = "Set HX711 #";
Blockly.Msg["HX711_GAIN"] = "Gain";
Blockly.Msg["HX711_SET_GAIN_TOOLTIP"] = "Set HX711 gain (128/64 for channel A, 32 for channel B)";

Blockly.Msg["HX711_IS_READY"] = "HX711 # Ready?";
Blockly.Msg["HX711_IS_READY_TOOLTIP"] = "Check if HX711 module is ready to read data";
