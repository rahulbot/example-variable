input.onButtonPressed(Button.A, function () {
    aClickCount += 1
})
input.onButtonPressed(Button.B, function () {
    bClickCount += 1
})
let aClickCount = 0
let bClickCount = 0
basic.forever(function () {
    if (aClickCount == 5) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        aClickCount = 0
    }
    if (bClickCount == 5) {
        music.playTone(523, music.beat(BeatFraction.Whole))
        bClickCount = 0
    }
})
