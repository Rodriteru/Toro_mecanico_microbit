radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        neZha.stopAllMotor()
    } else if (receivedNumber == 1) {
        neZha.setMotorSpeed(neZha.MotorList.M1, potencia / 30)
        neZha.setMotorSpeed(neZha.MotorList.M2, potencia / 30)
    } else if (receivedNumber == 2) {
        neZha.setMotorSpeed(neZha.MotorList.M1, potencia / 30 * -1)
        neZha.setMotorSpeed(neZha.MotorList.M2, potencia / 30 * -1)
    } else if (receivedNumber == 3) {
        neZha.setMotorSpeed(neZha.MotorList.M1, potencia / 50 * -1)
        neZha.setMotorSpeed(neZha.MotorList.M2, potencia / 50)
    } else if (receivedNumber == 4) {
        neZha.setMotorSpeed(neZha.MotorList.M1, potencia / 50)
        neZha.setMotorSpeed(neZha.MotorList.M2, potencia / 50 * -1)
    } else if (receivedNumber == 5) {
        if (PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J3, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) <= 7) {
            if (PlanetX_Basic.Crash(PlanetX_Basic.DigitalRJPin.J4)) {
                neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 360)
            } else {
                radio.sendNumber(9)
            }
        } else {
            radio.sendNumber(9)
        }
    } else if (receivedNumber == 6) {
        if (PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J3, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) <= 7) {
            if (PlanetX_Basic.Crash(PlanetX_Basic.DigitalRJPin.J4)) {
                neZha.setServoAngel(neZha.ServoTypeList._180, neZha.ServoList.S1, 10)
            } else {
                radio.sendNumber(9)
            }
        } else {
            radio.sendNumber(9)
        }
    } else if (receivedNumber == 7) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 10)
        neZha.setMotorSpeed(neZha.MotorList.M2, -10)
    } else if (receivedNumber == 8) {
        neZha.setMotorSpeed(neZha.MotorList.M1, -10)
        neZha.setMotorSpeed(neZha.MotorList.M2, 10)
    }
})
let potencia = 0
radio.setGroup(120)
music.play(music.stringPlayable("E F E A B C5 B G ", 400), music.PlaybackMode.UntilDone)
basic.forever(function () {
    potencia = PlanetX_Basic.trimpot(PlanetX_Basic.AnalogRJPin.J1)
    if (PlanetX_Basic.Crash(PlanetX_Basic.DigitalRJPin.J4) && PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J3, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) <= 7) {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, true, 100)
    } else {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, false, 100)
    }
})
