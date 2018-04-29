class Ball {
    constructor(playerX, playerY) {
        this.moving = false

        this.radius = 20

        this.angle = 0

        this.speedX = 1
        this.speedY = -3

        this.dirX = 1
        this.dirY = 1

    }

    refresh() {
        strokeWeight(2)
        stroke(247, 209, 9)
        fill(0)
        ellipse(this.x, this.y, this.radius)

        return this
    }

    launch() {
        let SPACE = 32

        if (this.moving === false && keyIsPressed && keyCode === SPACE) {
            this.moving = true
        }

        return this
    }

    wallReflect() {

        if (this.x >= width - this.radius || this.x <= 0 + this.radius) {
            this.dirX *= -1

        }
        if (this.y <= 0 + this.radius) {
            this.dirY *= -1
        }

        return this
    }

    playerReflect() {

        let sameHeight = this.y + this.radius > player.y &&
            this.y + this.radius <= player.y + player.height,
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

    death() {
        if (this.y >= height) {
            lives -= 1
            this.reset()
        }
        return this
    }

    reset() {
        this.moving = false
        this.dirY = 3
        this.dirX = 0
        this.angle = 0

        return this
    }

    move(playerX, playerY) {

        if (this.moving) {
            this.x += this.dirX * this.speedX + this.angle
            this.y += this.dirY * this.speedY + this.angle
        }
        if (!this.moving) {
            this.x = playerX
            this.y = playerY - player.height
        }

        return this

    }

}
