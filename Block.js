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

    destroy() {
        let distance = dist(ball.x, ball.y, this.x, this.y)
        //counts distance between each block and ball


        let intersection = distance <= 1 / 2 * ball.radius + sqrt(sq(this.size / 2) + sq(this.size / 2))
        //becomes true when ball on intersection distance at least with block's corner.



        if (intersection) {

            let onRight = ball.x - this.x > 10,
                onLeft = ball.x - this.x < 10,
                onTop = ball.y - this.y < 10,
                onBot = ball.y - this.y > 10
            //some tryes to check on which side of block ball is, will not work properly, cause ball could be on 0



            let distX = abs(ball.x - this.x),
                distY = abs(ball.y - this.y)
            //removes negative "-"

            /*                        if (distX <= 10) {
                                        ball.dirX *= -1
                                        }
                                        else if (distY <= 10) {
                                            ball.dirY *= -1
                                        }*/
            //first tryes to check distances...guess useless


            if ((onRight || onLeft) && distX <= 10) {
                ball.dirX *= -1

                this.destroyed = true
            }
            //it supposed to be if ball hit right or left side of block - reverse X speed and destryo block
            if ((onTop || onBot) && distY <= 10) {
                ball.dirY *= -1

                this.destroyed = true
            }

        }
        return this
    }





}
