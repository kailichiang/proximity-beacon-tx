input.onButtonPressed(Button.A, function () {
    transmit_power += -1
    if (transmit_power < 1) {
        transmit_power = 7
    }
    radio.setTransmitPower(transmit_power)
    basic.showString("" + (transmit_power))
})
input.onButtonPressed(Button.B, function () {
    transmit_power += 1
    if (transmit_power > 7) {
        transmit_power = 1
    }
    radio.setTransmitPower(transmit_power)
    basic.showString("" + (transmit_power))
})
let transmit_power = 0
radio.setGroup(1)
transmit_power = 1
radio.setTransmitPower(transmit_power)
basic.showString("" + (transmit_power))
basic.forever(function () {
    radio.sendString("1")
    basic.pause(200)
})
