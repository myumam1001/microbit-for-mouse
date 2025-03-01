let a = 0
mouse.startMouseService()
basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P1) < 21) {
        mouse.movexy(0, 15)
    }
    if (pins.analogReadPin(AnalogReadWritePin.P2) < 21) {
        mouse.movexy(-15, 0)
    }
    if (pins.analogReadPin(AnalogReadWritePin.P1) > 800) {
        mouse.movexy(0, -15)
    }
    if (pins.analogReadPin(AnalogReadWritePin.P2) > 800) {
        mouse.movexy(15, 0)
    }
    if (a == 0 && pins.digitalReadPin(DigitalPin.P0) == 1) {
        mouse.click()
        a = 1
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        a = 0
    }
})
