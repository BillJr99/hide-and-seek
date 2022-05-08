radio.onReceivedNumber(function (receivedNumber) {
    currentRSSI = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (currentRSSI > lastRSSI) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showArrow(ArrowNames.South)
    }
    lastRSSI = currentRSSI
})
let currentRSSI = 0
let lastRSSI = 0
radio.setGroup(1)
let radioNumber = 1
lastRSSI = -100
currentRSSI = -100
basic.forever(function () {
    radio.sendNumber(radioNumber)
    basic.pause(1000)
})
