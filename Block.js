class Block {
    constructor(x, y) {
        this.x = x
        this.y = y

        this.size = 20
        this.color = color(random(0, 175), random(100, 220), random(150, 255))

        this.destroyed = false

    }

    refresh() {

        strokeWeight(1)
        stroke(0)

        fill(this.color)
        rect(this.x, this.y, this.size, this.size)

        return this
    }

    destroy() {
        let distance = dist(ball.x, ball.y, this.x, this.y)


        let intersection = distance <= 1 / 2 * ball.radius + sqrt(sq(this.size / 2) + sq(this.size / 2))




        if (intersection) {

            let onRight = ball.x - this.x > 10,
                onLeft = ball.x - this.x < 10,
                onTop = ball.y - this.y < 10,
                onBot = ball.y - this.y > 10


            let distX = abs(ball.x - this.x),
                distY = abs(ball.y - this.y)

            /*                        if (distX == 10) {
                                        ball.dirX *= -1
                                        }
                                        else if (distY == 10) {
                                            ball.dirY *= -1
                                        }*/


            if ((onRight || onLeft) && distX <= 10) {
                ball.dirX *= -1

                this.destroyed = true
            }
            if ((onTop || onBot) && distY <= 10) {
                ball.dirY *= -1

                this.destroyed = true
            }

        }
        return this
    }





}
