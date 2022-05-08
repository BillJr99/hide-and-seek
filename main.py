def on_received_number(receivedNumber):
    global currentRSSI, lastRSSI
    currentRSSI = radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH)
    if currentRSSI > lastRSSI:
        basic.show_arrow(ArrowNames.NORTH)
    else:
        basic.show_arrow(ArrowNames.SOUTH)
    lastRSSI = currentRSSI
radio.on_received_number(on_received_number)

currentRSSI = 0
lastRSSI = 0
radio.set_group(1)
radioNumber = 1
lastRSSI = -100
currentRSSI = -100

def on_forever():
    radio.send_number(radioNumber)
    basic.pause(1000)
basic.forever(on_forever)
