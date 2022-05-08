radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == radioNumber) {
        currentRSSI = radio.receivedPacket(RadioPacketProperty.SignalStrength)
        if (currentRSSI > lastRSSI) {
            basic.showArrow(ArrowNames.North)
        } else {
            basic.showArrow(ArrowNames.South)
        }
        lastRSSI = currentRSSI
    }
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
