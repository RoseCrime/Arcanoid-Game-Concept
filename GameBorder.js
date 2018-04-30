class GameBorder {
    constructor() {
        this.color = color(200, 200, 150)

    }
    refresh() {
        this.x = width / 2
        this.y = height / 2
        strokeWeight(3)
        stroke(this.color)
        noFill()

        rect(this.x, this.y, width - 6, height - 6)
    }
}
