input.onButtonPressed(Button.A, function () {
	
})
let reading = 0
servos.P0.setAngle(115)
basic.forever(function () {
    basic.pause(500)
    reading = pins.analogReadPin(AnalogPin.P1)
    serial.writeNumber(reading)
    serial.writeLine("")
    if (450 < reading && reading < 490) {
        serial.writeLine("launch")
        servos.P0.setAngle(50)
        basic.pause(2000)
        servos.P0.setAngle(115)
        basic.pause(5000)
    }
})
