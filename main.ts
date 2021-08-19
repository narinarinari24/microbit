basic.showIcon(IconNames.Happy)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
pins.servoWritePin(AnalogPin.P1, 0)
pins.servoWritePin(AnalogPin.P2, 180)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showString("0")
        pins.servoWritePin(AnalogPin.P1, 90)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.servoWritePin(AnalogPin.P2, 180)
    } else {
        basic.showString("-")
    }
})
