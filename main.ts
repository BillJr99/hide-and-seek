radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == radioNumber) {
        currentRSSI = radio.receivedPacket(RadioPacketProperty.SignalStrength)
        if (currentRSSI > lastRSSI) {
            basic.showArrow(ArrowNames.North)
        } else if (currentRSSI < lastRSSI) {
            basic.showArrow(ArrowNames.South)
        } else {
            basic.showIcon(IconNames.Heart)
        }
        lastRSSI = currentRSSI
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(currentRSSI)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(currentRSSI)
})
let currentRSSI = 0
let lastRSSI = 0
let radioNumber = 0
radioNumber = 1
radio.setGroup(radioNumber)
lastRSSI = -100
currentRSSI = -100
basic.forever(function () {
    radio.sendNumber(radioNumber)
    basic.pause(1000)
})
