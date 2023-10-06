/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Clara
 * Created on: Sep 2023
 * This program changes LED's on Microbit
*/

// start code
input.onButtonPressed(Button.A, function () {

  // Red
  pins.digitalWritePin(DigitalPin.P16, 0)
  basic.showString('red')
  basic.pause(1000)

  pins.digitalWritePin(DigitalPin.P16, 0)

  // Green
  pins.digitalWritePin(DigitalPin.P15, 1)
  basic.showString('green')
  basic.pause(1000)

  pins.digitalWritePin(DigitalPin.P15, 0)

  // Blue
  pins.digitalWritePin(DigitalPin.P14, 1)
  basic.showString('blue')
  basic.pause(1000)

  pins.digitalWritePin(DigitalPin.P14, 0)

  // Magenta
  pins.digitalWritePin(DigitalPin.P16, 1)

  pins.digitalWritePin(DigitalPin.P14, 1)
  basic.showString('Magenta')
  basic.pause(1000)

  pins.digitalWritePin(DigitalPin.P16, 0)

  pins.digitalWritePin(DigitalPin.P14, 0)

  // Yellow
  pins.digitalWritePin(DigitalPin.P16, 1)

  pins.digitalWritePin(DigitalPin.P15, 1)
  basic.showString('Yellow')
  basic.pause(1000)

  pins.digitalWritePin(DigitalPin.P16, 0)
  pins.digitalWritePin(DigitalPin.P15, 0)

  // Cyan
  pins.digitalWritePin(DigitalPin.P16, 1)

  pins.digitalWritePin(DigitalPin.P14, 1)
  basic.showString('Cyan')
  basic.pause(1000)

  pins.digitalWritePin(DigitalPin.P16, 0)

  pins.digitalWritePin(DigitalPin.P14, 0)

  // White
  pins.digitalWritePin(DigitalPin.P16, 1)

  pins.digitalWritePin(DigitalPin.P14, 1)

  pins.digitalWritePin(DigitalPin.P15, 1)
  basic.showString('White')
  basic.pause(1000)

  pins.digitalWritePin(DigitalPin.P16, 0)

  pins.digitalWritePin(DigitalPin.P15, 0)

  pins.digitalWritePin(DigitalPin.P14, 0)
})
