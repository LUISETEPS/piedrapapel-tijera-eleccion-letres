radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.SmallSquare)
    }
    if (receivedNumber == 2) {
        basic.showIcon(IconNames.Scissors)
    }
    if (receivedNumber == 3) {
        basic.showIcon(IconNames.Square)
    }
    if (Tirada == 1 && receivedNumber == 2) {
        basic.showIcon(IconNames.Yes)
    }
    if (Tirada == 1 && receivedNumber == 3) {
        basic.showIcon(IconNames.No)
    }
    if (Tirada == 1 && receivedNumber == 1) {
        basic.showIcon(IconNames.SmallDiamond)
    }
    if (Tirada == 2 && receivedNumber == 3) {
        basic.showIcon(IconNames.Yes)
    }
    if (Tirada == 2 && receivedNumber == 1) {
        basic.showIcon(IconNames.No)
    }
    if (Tirada == 2 && receivedNumber == 2) {
        basic.showIcon(IconNames.SmallDiamond)
    }
    if (Tirada == 3 && receivedNumber == 1) {
        basic.showIcon(IconNames.Yes)
    }
    if (Tirada == 3 && receivedNumber == 2) {
        basic.showIcon(IconNames.No)
    }
    if (Tirada == 3 && receivedNumber == 3) {
        basic.showIcon(IconNames.SmallDiamond)
    }
    if (Tirada == 1 && receivedNumber == 2) {
        PUNTOS += 1
    }
    if (Tirada == 2 && receivedNumber == 3) {
        PUNTOS += 1
    }
    if (Tirada == 3 && receivedNumber == 1) {
        PUNTOS += 1
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(Tirada)
})
input.onGesture(Gesture.Shake, function () {
    Tirada = randint(1, 1)
    basic.showIcon(IconNames.SmallSquare)
})
input.onButtonPressed(Button.AB, function () {
    Tirada = randint(3, 3)
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.B, function () {
    Tirada = randint(2, 2)
    basic.showIcon(IconNames.Scissors)
})
let PUNTOS = 0
let Tirada = 0
radio.setGroup(119)
basic.forever(function () {
	
})
basic.forever(function () {
    if (PUNTOS == 5) {
        basic.showString("HAS GANADO")
    }
})
