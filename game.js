let finished = false
let mouseIsClicked = false
let frameCounter = 0
let fs

let player, ball, lives = 5
let blocks = []


function setup() {
    createCanvas(windowWidth, windowHeight)
    rectMode(CENTER)
    ellipseMode(CENTER)
    textAlign(CENTER)
    textStyle(ITALIC)

    gameSetter()
}

function draw() {
    background(26, 26, 26)
    panelRefresher()


    player.refresh().move()

    ball.wallReflect()
        .playerReflect()
        .death()
        .refresh()
        .move(player.x, player.y)
        .launch()

    for (let i = 0; i < blocks.length; i++) {

        blocks[i].refresh().destroy()
        
        if (blocks[i].destroyed === true) {
            blocks.splice(i, 1)
        }

    }

    mouseIsClicked = false
    frameCounter++
}


//everything resets on each stage.
function reset() {
    finished = false
}

function mouseClicked() {
    mouseIsClicked = true
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
