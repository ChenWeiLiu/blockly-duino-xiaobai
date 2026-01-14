// DRV8825 初始化
Blockly.Arduino['drv8825_init'] = function (block) {
    var num = block.getFieldValue('NUM');
    var stepPin = block.getFieldValue('STEP_PIN');
    var dirPin = block.getFieldValue('DIR_PIN');
    var enablePin = block.getFieldValue('ENABLE_PIN');
    var stepsPerRev = block.getFieldValue('STEPS_PER_REV') || '24';

    Blockly.Arduino.definitions_['include_accelstepper'] = '#include <AccelStepper.h>';
    Blockly.Arduino.definitions_['define_drv8825_' + num] =
        'const int STEP_PIN_' + num + ' = ' + stepPin + ';\n' +
        'const int DIR_PIN_' + num + ' = ' + dirPin + ';\n' +
        'const int ENABLE_PIN_' + num + ' = ' + enablePin + ';\n' +
        'const int STEPS_PER_REV_' + num + ' = ' + stepsPerRev + ';\n' +
        'AccelStepper stepper_' + num + '(AccelStepper::DRIVER, STEP_PIN_' + num + ', DIR_PIN_' + num + ');';

    var setupCode =
        'pinMode(STEP_PIN_' + num + ', OUTPUT);\n' +
        '  pinMode(DIR_PIN_' + num + ', OUTPUT);\n' +
        '  pinMode(ENABLE_PIN_' + num + ', OUTPUT);\n' +
        '  digitalWrite(ENABLE_PIN_' + num + ', HIGH);  // 預設停用馬達\n' +
        '  stepper_' + num + '.setMaxSpeed(1000);  // 設定最大速度 (步/秒)\n' +
        '  stepper_' + num + '.setAcceleration(500);  // 設定加速度 (步/秒²)';

    Blockly.Arduino.setups_['setup_drv8825_' + num] = setupCode;

    var code = '// DRV8825 #' + num + ' 已初始化 (' + stepsPerRev + ' 步/轉)\n';
    return code;
};

// DRV8825 移動步數
Blockly.Arduino['drv8825_move_steps'] = function (block) {
    var num = block.getFieldValue('NUM');
    var direction = block.getFieldValue('DIRECTION');
    var steps = Blockly.Arduino.valueToCode(block, 'STEPS',
        Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'stepper_' + num + '.move(' + direction + ' * ' + steps + ');\n';
    code += 'while (stepper_' + num + '.distanceToGo() != 0) {\n';
    code += '  stepper_' + num + '.run();\n';
    code += '}\n';
    return code;
};

// DRV8825 設定轉速
Blockly.Arduino['drv8825_set_speed'] = function (block) {
    var num = block.getFieldValue('NUM');
    var speed = Blockly.Arduino.valueToCode(block, 'SPEED',
        Blockly.Arduino.ORDER_ATOMIC) || '60';

    // 將 RPM 轉換為 步/秒
    var code = 'stepper_' + num + '.setMaxSpeed((' + speed + ' * STEPS_PER_REV_' + num + ') / 60.0);\n';
    return code;
};

// DRV8825 連續旋轉
Blockly.Arduino['drv8825_run'] = function (block) {
    var num = block.getFieldValue('NUM');
    var direction = block.getFieldValue('DIRECTION');

    var code = 'stepper_' + num + '.setSpeed(' + direction + ' * stepper_' + num + '.maxSpeed());\n';
    code += 'stepper_' + num + '.runSpeed();\n';
    return code;
};

// DRV8825 停止
Blockly.Arduino['drv8825_stop'] = function (block) {
    var num = block.getFieldValue('NUM');
    var code = 'stepper_' + num + '.stop();\n';
    return code;
};

// DRV8825 啟用
Blockly.Arduino['drv8825_enable'] = function (block) {
    var num = block.getFieldValue('NUM');
    var code = 'digitalWrite(ENABLE_PIN_' + num + ', LOW);  // 啟用馬達 (LOW = 啟用)\n';
    return code;
};

// DRV8825 停用
Blockly.Arduino['drv8825_disable'] = function (block) {
    var num = block.getFieldValue('NUM');
    var code = 'digitalWrite(ENABLE_PIN_' + num + ', HIGH);  // 停用馬達 (HIGH = 停用)\n';
    return code;
};

// DRV8825 設定加速度
Blockly.Arduino['drv8825_set_acceleration'] = function (block) {
    var num = block.getFieldValue('NUM');
    var accel = Blockly.Arduino.valueToCode(block, 'ACCEL',
        Blockly.Arduino.ORDER_ATOMIC) || '100';

    var code = 'stepper_' + num + '.setAcceleration(' + accel + ');\n';
    return code;
};

// DRV8825 移動到限位器
Blockly.Arduino['drv8825_move_until_limit'] = function (block) {
    var num = block.getFieldValue('NUM');
    var direction = block.getFieldValue('DIRECTION');
    var limitPin = block.getFieldValue('LIMIT_PIN');
    var triggerState = block.getFieldValue('TRIGGER_STATE');

    Blockly.Arduino.setups_['setup_limit_pin_' + limitPin] =
        'pinMode(' + limitPin + ', INPUT_PULLUP);  // 限位開關腳位';

    var code = '// 移動到限位器觸發為止\n';
    code += 'while (digitalRead(' + limitPin + ') != ' + triggerState + ') {\n';
    code += '  stepper_' + num + '.setSpeed(' + direction + ' * stepper_' + num + '.maxSpeed());\n';
    code += '  stepper_' + num + '.runSpeed();\n';
    code += '}\n';
    code += 'stepper_' + num + '.stop();\n';
    return code;
};

// DRV8825 連續旋轉到限位器
Blockly.Arduino['drv8825_run_until_limit'] = function (block) {
    var num = block.getFieldValue('NUM');
    var direction = block.getFieldValue('DIRECTION');
    var limitPin = block.getFieldValue('LIMIT_PIN');
    var triggerState = block.getFieldValue('TRIGGER_STATE');

    Blockly.Arduino.setups_['setup_limit_pin_' + limitPin] =
        'pinMode(' + limitPin + ', INPUT_PULLUP);  // 限位開關腳位';

    var code = '// 連續旋轉到限位器觸發為止\n';
    code += 'while (digitalRead(' + limitPin + ') != ' + triggerState + ') {\n';
    code += '  stepper_' + num + '.setSpeed(' + direction + ' * stepper_' + num + '.maxSpeed());\n';
    code += '  stepper_' + num + '.runSpeed();\n';
    code += '}\n';
    code += 'stepper_' + num + '.stop();\n';
    return code;
};
