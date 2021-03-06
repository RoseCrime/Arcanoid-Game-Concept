let finished = false
let mouseIsClicked = false
let frameCounter = 0
let fs

let player, ball, lives = 5
let blocks = []


function setup() {
    createCanvas(windowWidth, windowHeight)
    //sets canvas sizes to size of window, exepting scroll size (it was removed in css)
    rectMode(CENTER)
    ellipseMode(CENTER)
    textAlign(CENTER)
    textStyle(ITALIC)
    //Modes which sets rectangle,ellipse and text in center. (means when we put ellipse in 0,0 - 0 0 will be it's center )


    gameSetter()
    //launches gameSetter method, just to not make setup function too messy.
}

function draw() {
    //everything happens each frame in this function
    background(26, 26, 26)

    //resets background of canvas
    panelRefresher()
    //refreshes game panels , like lives and some other in future.

    let currentDirX = ball.dirX,
        currentDirY = ball.dirY
    //stores current direction of ball , to not reflect twice per frame.


    gameBorder.refresh()
    
    player.refresh().move()
    //launches player's methods.

    ball.wallReflect()
        .playerReflect()
        .death()
        .refresh()
        .move(player.x, player.y)
        .launch()
    //launches ball's methods



    
    
    for (let i = 0; i < blocks.length; i++) {

        blocks[i].refresh().destroy(currentDirX, currentDirY)

        if (blocks[i].destroyed === true) {
            blocks.splice(i, 1)
        }
    }
    //loop launches block's methods and if one of them have destroyed property set to true - destroyes it.

    mouseIsClicked = false
    frameCounter++
    //I don't use it right now , but it's my solution to check mouseClicks and count frames to make something happen every X seconds.
}


//everything resets on each stage.
function reset() {
    finished = false
    //just variable to finish game in future
}

function mouseClicked() {
    mouseIsClicked = true
    //sets variable as true till the end of frame , not using right now.
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    //resizes canvas when window was resized.
    let playerBeyondRightSide = player.x + player.width / 2 >= width,
        playerBeyondLeftSide = player.x - player.width / 2 <= 0

    if (playerBeyondRightSide) {
        player.x = width - player.width / 2
    }
    if (playerBeyondLeftSide) {
        player.x = 0 + player.width / 2
    }
    //conditions to not let player go beyond window.
}
