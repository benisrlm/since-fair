let reading = 0
basic.forever(function () {
    reading = pins.digitalReadPin(DigitalPin.P0)
    led.plotBarGraph(
    pins.digitalReadPin(DigitalPin.P0),
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
})
