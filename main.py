def on_received_number(receivedNumber):
    if receivedNumber == 0:
        neZha.stop_all_motor()
    elif receivedNumber == 1:
        neZha.set_motor_speed(neZha.MotorList.M1, potencia / 30)
        neZha.set_motor_speed(neZha.MotorList.M2, potencia / 30)
    elif receivedNumber == 2:
        neZha.set_motor_speed(neZha.MotorList.M1, potencia / 30 * -1)
        neZha.set_motor_speed(neZha.MotorList.M2, potencia / 30 * -1)
    elif receivedNumber == 3:
        neZha.set_motor_speed(neZha.MotorList.M1, potencia / 50 * -1)
        neZha.set_motor_speed(neZha.MotorList.M2, potencia / 50)
    elif receivedNumber == 4:
        neZha.set_motor_speed(neZha.MotorList.M1, potencia / 50)
        neZha.set_motor_speed(neZha.MotorList.M2, potencia / 50 * -1)
    elif receivedNumber == 5:
        if PlanetX_Basic.ultrasound_sensor(PlanetX_Basic.DigitalRJPin.J3,
            PlanetX_Basic.Distance_Unit_List.DISTANCE_UNIT_CM) <= 7:
            if PlanetX_Basic.crash(PlanetX_Basic.DigitalRJPin.J4):
                neZha.set_servo_angel(neZha.ServoTypeList._360, neZha.ServoList.S1, 360)
            else:
                radio.send_number(9)
        else:
            radio.send_number(9)
    elif receivedNumber == 6:
        if PlanetX_Basic.ultrasound_sensor(PlanetX_Basic.DigitalRJPin.J3,
            PlanetX_Basic.Distance_Unit_List.DISTANCE_UNIT_CM) <= 7:
            if PlanetX_Basic.crash(PlanetX_Basic.DigitalRJPin.J4):
                neZha.set_servo_angel(neZha.ServoTypeList._180, neZha.ServoList.S1, 10)
            else:
                radio.send_number(9)
        else:
            radio.send_number(9)
    elif receivedNumber == 7:
        neZha.set_motor_speed(neZha.MotorList.M1, 10)
        neZha.set_motor_speed(neZha.MotorList.M2, -10)
    elif receivedNumber == 8:
        neZha.set_motor_speed(neZha.MotorList.M1, -10)
        neZha.set_motor_speed(neZha.MotorList.M2, 10)
radio.on_received_number(on_received_number)

potencia = 0
radio.set_group(120)
music.play(music.string_playable("E F E A B C5 B G ", 400),
    music.PlaybackMode.UNTIL_DONE)

def on_forever():
    global potencia
    potencia = PlanetX_Basic.trimpot(PlanetX_Basic.AnalogRJPin.J1)
    if PlanetX_Basic.crash(PlanetX_Basic.DigitalRJPin.J4) and PlanetX_Basic.ultrasound_sensor(PlanetX_Basic.DigitalRJPin.J3,
        PlanetX_Basic.Distance_Unit_List.DISTANCE_UNIT_CM) <= 7:
        PlanetX_Display.led_brightness(PlanetX_Display.DigitalRJPin.J2, True, 100)
    else:
        PlanetX_Display.led_brightness(PlanetX_Display.DigitalRJPin.J2, False, 100)
basic.forever(on_forever)
