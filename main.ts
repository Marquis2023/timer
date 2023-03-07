let Astart = 0
let Bend = 0
let Dduration = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showString("Press A")
    music.playMelody("C5 E G F G B C5 - ", 120)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("Go!")
    Astart = control.eventTimestamp()
})
input.onButtonPressed(Button.AB, function () {
    music.stopMelody(MelodyStopOptions.All)
})
input.onButtonPressed(Button.B, function () {
    Bend = control.eventTimestamp()
    music.stopAllSounds()
    Dduration = Astart - Bend
    if (Dduration == 10) {
        basic.showString("You win!")
        basic.showNumber(Dduration)
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showString("You lose")
        basic.showNumber(Dduration)
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
	
})
