scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanDepths8, function (sprite, location) {
    land(4)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    resetThrust()
})
function land (multiplier: number) {
    if (mySprite.vy > 16) {
        game.over(false)
    } else {
        info.setScore(info.life() * multiplier)
        game.over(true, effects.smiles)
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ax = THRUST
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        5 5 5 1 1 1 1 1 1 1 2 . . . . . 
        . 5 2 2 1 1 1 1 1 1 1 2 . . . . 
        5 5 5 1 1 1 1 1 1 1 1 8 8 . . . 
        5 5 2 2 1 1 f f f f 1 8 8 8 . . 
        . 5 5 1 1 1 f 1 1 f 1 8 8 8 8 . 
        5 5 2 2 1 1 f f f f 1 8 8 8 . . 
        5 5 2 1 1 1 1 1 1 1 1 8 8 . . . 
        . 5 5 2 1 1 1 1 1 1 1 2 . . . . 
        . . 2 1 1 1 1 1 1 1 2 . . . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    resetThrust()
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    resetThrust()
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanDepths9, function (sprite, location) {
    land(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock0, function (sprite, location) {
    land(5)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ax = 0 - THRUST
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 2 2 2 . . 
        . . . . . 2 1 1 1 1 1 1 1 2 . . 
        . . . . 2 1 1 1 1 1 1 1 2 5 5 . 
        . . . 8 8 1 1 1 1 1 1 1 1 2 5 5 
        . . 8 8 8 1 f f f f 1 1 2 2 5 5 
        . 8 8 8 8 1 f 1 1 f 1 1 1 5 5 . 
        . . 8 8 8 1 f f f f 1 1 2 2 5 5 
        . . . 8 8 1 1 1 1 1 1 1 1 5 5 5 
        . . . . 2 1 1 1 1 1 1 1 2 2 5 . 
        . . . . . 2 1 1 1 1 1 1 1 5 5 5 
        . . . . . . 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ay = GRAVITY - THRUST
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 2 8 8 8 8 8 2 . . . . . 
        . . . 2 1 1 1 1 1 1 1 2 . . . . 
        . . 2 1 1 1 f f f 1 1 1 2 . . . 
        . . 2 1 1 1 f 1 f 1 1 1 2 . . . 
        . . 2 1 1 1 f 1 f 1 1 1 2 . . . 
        . . 2 1 1 1 f f f 1 1 1 2 . . . 
        . . 2 1 1 1 1 1 1 1 1 1 2 . . . 
        . . 2 1 1 1 1 1 1 1 1 1 2 . . . 
        . . 2 1 2 1 2 1 2 1 2 1 2 . . . 
        . . 2 5 2 5 2 5 2 2 5 2 2 . . . 
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        . . . 5 . 5 5 . 5 5 . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardHole, function (sprite, location) {
    land(4)
})
function resetThrust () {
    mySprite.ay = GRAVITY
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 2 8 8 8 8 8 2 . . . . . 
        . . . 2 1 1 1 1 1 1 1 2 . . . . 
        . . 2 1 1 1 f f f 1 1 1 2 . . . 
        . . 2 1 1 1 f 1 f 1 1 1 2 . . . 
        . . 2 1 1 1 f 1 f 1 1 1 2 . . . 
        . . 2 1 1 1 f f f 1 1 1 2 . . . 
        . . 2 1 1 1 1 1 1 1 1 1 2 . . . 
        . . 2 1 1 1 1 1 1 1 1 1 2 . . . 
        . . 2 1 2 1 2 1 2 1 2 1 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite.ax = 0
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles27, function (sprite, location) {
    land(3)
})
let mySprite: Sprite = null
let GRAVITY = 0
let THRUST = 0
let IDLE = 0
THRUST = 20
GRAVITY = 5
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . 2 8 8 8 8 8 2 . . . . . 
    . . . 2 1 1 1 1 1 1 1 2 . . . . 
    . . 2 1 1 1 f f f 1 1 1 2 . . . 
    . . 2 1 1 1 f 1 f 1 1 1 2 . . . 
    . . 2 1 1 1 f 1 f 1 1 1 2 . . . 
    . . 2 1 1 1 f f f 1 1 1 2 . . . 
    . . 2 1 1 1 1 1 1 1 1 1 2 . . . 
    . . 2 1 1 1 1 1 1 1 1 1 2 . . . 
    . . 2 1 2 1 2 1 2 1 2 1 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.ay = GRAVITY
tiles.setTilemap(tilemap`level1`)
mySprite.setFlag(SpriteFlag.ShowPhysics, true)
info.setLife(300)
effects.starField.startScreenEffect()
scene.cameraFollowSprite(mySprite)
game.onUpdate(function () {
    if (controller.left.isPressed() || (controller.down.isPressed() || controller.right.isPressed())) {
        info.changeLifeBy(-1)
    }
})
