let pencacah = 9
basic.forever(function () {
    if (pencacah >= 0) {
        basic.showNumber(pencacah)
        pencacah += -1
        basic.pause(300)
    } else {
        pencacah = 9
    }
})
