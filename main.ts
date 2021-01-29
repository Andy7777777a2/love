let Y = 0
let X = 0
input.onButtonPressed(Button.A, function () {
    Y = 0
    X = 1
    led.plot(X, Y)
    X += 2
    led.plot(X, Y)
    Y += 1
    X = 0
    for (let index = 0; index < 5; index++) {
        led.plot(X, Y)
        X += 1
    }
    Y += 1
    X = 0
    for (let index = 0; index < 5; index++) {
        led.plot(X, Y)
        X += 1
    }
    Y += 1
    X = 1
    for (let index = 0; index < 3; index++) {
        led.plot(X, Y)
        X += 1
    }
    Y += 1
    X = 2
    led.plot(X, Y)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(300)
})
