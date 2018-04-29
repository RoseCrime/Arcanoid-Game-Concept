class Player {
    constructor() {
        this.width = 1 / 3 * width
        this.height = 20

        this.x = 1 / 2 * width
        this.y = height - this.height

    }

    refresh() {
        this.width = 1 / 3 * width
        this.height = 20

        strokeWeight()
        stroke(255, 100, 100)
        fill(0, 230, 150)
        rect(this.x, this.y, this.width, this.height)
        return this
    }

    move() {
        if (keyIsPressed) {
            if (keyCode === LEFT_ARROW &&
                this.x >= 0 + 1 / 2 * this.width) {

                this.x -= 3
            }

            if (keyCode === RIGHT_ARROW &&
                this.x <= width - 1 / 2 * this.width) {

                this.x += 3
            }
            return this
        }
    }
}
