class Ball {
    constructor(playerX, playerY) {
        this.moving = false

        this.diameter = 20

        this.angle = 0

        this.speedX = 0 
        this.speedY = -3

        this.dirX = 1
        this.dirY = -1
        //ball coordinates and properties, depends from player's coordinates.
        //move sets to true only when ball was launched
    }

    refresh() {
        strokeWeight(2)
        stroke(247, 209, 9)
        fill(0)
        ellipse(this.x, this.y, this.diameter)

        return this
    }
    //visually shows and refreshes ball position
    launch() {
        let SPACE = 32

        if (this.moving === false && keyIsPressed && keyCode === SPACE) {
            this.moving = true
        }

        return this
    }
    //launches ball when "space" pressed

    wallReflect() {

        if (this.x >= width - this.diameter || this.x <= 0 + this.diameter) {
            this.dirX *= -1

        }
        if (this.y <= 0 + this.diameter) {
            this.dirY *= -1
        }

        return this
    }
    //reflects ball from walls.

    playerReflect() {

        let sameHeight = this.y + this.diameter > player.y &&
            this.y + this.diameter <= player.y + player.height,
            beyondRightSide = this.x > player.x + 1 / 2 * player.width,
            beyondLeftSide = this.x < player.x - 1 / 2 * player.width


        if (ball.moving) {
            if (sameHeight) {
                if (!beyondLeftSide && !beyondRightSide) {
                    this.dirY *= -1

                    let distfromPlayerMid = ball.x - player.x

                    let ballOnleft = distfromPlayerMid < 0
                    let ballOnRight = distfromPlayerMid > 0


                    if (ballOnleft) {
                        this.angle -= 0.25
                    }
                    if (ballOnRight) {
                        this.angle += 0.25
                    }

                }
            }

        }
        return this
    }
    //it checks if ball is moving (launched) And then if ball on same height with "player" it checks if it's on same X coordinates as player.If so - it means it should reflect (Y) And then just to make more interesting interactions - it changes angle if it's on right side to right and opposite for left 

    death() {
        if (this.y >= height) {
            lives -= 1
            this.reset()
        }
        return this
    }
    //if ball falled down on screen - method remove live and reset ball back on player.

    reset() {
        this.moving = false
        this.dirY = -1
        this.dirX = 1
        this.speedX = 0
        this.speedY = -3
        this.angle = 0

        return this
    }
    //resets ball back on player and reset speed and angle.
    move(playerX, playerY) {

        if (this.moving) {
            this.x += (this.dirX) * (this.speedX + this.angle)
            this.y += (this.dirY) * this.speedY
        }
        if (!this.moving) {
            this.x = playerX
            this.y = playerY - player.height
        }
        return this

    }
    //If ball moving - it counts it's speed + angle
    //if not - ball stays on player.
}
