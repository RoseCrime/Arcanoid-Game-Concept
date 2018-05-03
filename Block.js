class Block {
    constructor(x, y, size) {
        this.x = x
        this.y = y
        //coordinates of each block, goes into gamesetter,which give each block coordinates.
        this.size = size
        //size of blocks
        this.color = color(random(50, 200), random(100, 220), random(125, 255))
        //color of blocks
        this.destroyed = false
        //when destroyed becomes true , method inside game will remove block.
    }

    refresh() {

        strokeWeight(1)
        stroke(255)

        fill(this.color)
        rect(this.x, this.y, this.size, this.size)

        return this

        //method show blocks on screen
    }

    destroy(currentDirX, currentDirY) {


        let distance = dist(ball.x, ball.y, this.x, this.y)
        //counts distance between each block and ball


        let intersection = distance <= 1 / 2 * ball.diameter + sqrt(sq(this.size / 2) + sq(this.size / 2))
        //becomes true when ball on intersection distance at least with block's corner.

        if (intersection) {

            let onRight = ball.x - this.x > ball.diameter / 2,
                onLeft = ball.x - this.x < ball.diameter / 2,
                onTop = ball.y - this.y < ball.diameter / 2,
                onBot = ball.y - this.y > ball.diameter / 2

            //conditions to count on which side ball is relatively to rects.

            let distX = abs(ball.x - this.x),
                distY = abs(ball.y - this.y)
            //counts distance without negative sign 

            if (((onRight || onLeft) && (currentDirX === ball.dirX) && (distY < this.size / 2))) {

                ball.dirX *= -1
                this.destroyed = true

            }
            //if ball on left or right side + direction already wasn't changed in this frame + it doesn't intersects in Y - reflect.
            //removes rects if true.

            if (((onTop || onBot) && (currentDirY === ball.dirY) && (distX < this.size / 2))) {
                ball.dirY *= -1
                this.destroyed = true

                //same as before with opposite directions and sides.
            }

        }
        return this
    }
}
