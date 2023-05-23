let reading = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    reading = pins.digitalReadPin(DigitalPin.P1)
    led.plotBarGraph(
    pins.digitalReadPin(DigitalPin.P1),
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        let if_the_variable_to_0 = 0
        basic.showNumber(reading)
        basic.showNumber(if_the_variable_to_0)
    }
})
