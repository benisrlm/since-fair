let reading = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P0)
    serial.writeNumber(reading)
    serial.writeLine("")
    servos.P2.setAngle(reading / 10)
    basic.pause(500)
})
