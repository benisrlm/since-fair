let reading = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    let if_the_variable_to_0 = 0
    reading = pins.digitalReadPin(DigitalPin.P0)
    led.plotBarGraph(
    pins.digitalReadPin(DigitalPin.P0),
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    } else {
        basic.showNumber(if_the_variable_to_0)
        servos.P0.setRange(0, 180)
    }
    reading = pins.digitalReadPin(DigitalPin.P1)
    led.plotBarGraph(
    pins.digitalReadPin(DigitalPin.P1),
    1023
    )
    if (true) {
        basic.showNumber(reading)
    } else {
        basic.showNumber(if_the_variable_to_0)
        basic.showString("i need water")
    }
})
