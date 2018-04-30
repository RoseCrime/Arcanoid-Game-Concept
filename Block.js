class Block {
    constructor(x, y) {
        this.x = x
        this.y = y

        //coordinates of each block, goes into gamesetter,which give each block coordinates.

        this.size = 20
        //size of each block
        this.color = color(random(0, 175), random(100, 220), random(150, 255))
        //color of blocks

        this.destroyed = false
        //when destroyed becomes true , method inside game will remove block.
    }

    refresh() {

        strokeWeight(1)
        stroke(0)

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

            let onRight = ball.x - this.x > 10,
                onLeft = ball.x - this.x < 10,
                onTop = ball.y - this.y < 10,
                onBot = ball.y - this.y > 10

            //conditions to count on which side ball is relatively to rects.



            let distX = abs(ball.x - this.x),
                distY = abs(ball.y - this.y)
            //counts distance without negative sign 

            if (((onRight || onLeft) && (currentDirX === ball.dirX) && distY <= 10)) {

                ball.dirX *= -1
                this.destroyed = true
            }
            //Most hard part :D
            //if ball on left or right side + direction already wasn't changed in this frame + it doesn't intersects in Y - reflect.
            //removes rects if true.

            if (((onTop || onBot) && (currentDirY === ball.dirY) && distX <= 10)) {
                ball.dirY *= -1
                this.destroyed = true
                //same as before with opposite directions and sides.
            }

        }
        return this
    }





}
