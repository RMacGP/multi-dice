radio.onReceivedNumber(function (receivedNumber) {
    if (my_dice <= receivedNumber) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
let my_dice = 0
radio.setGroup(99)
basic.forever(function () {
    my_dice = randint(1, 6)
    radio.sendNumber(my_dice)
})
