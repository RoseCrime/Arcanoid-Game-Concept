const gameSetter = () => {
    gameBorder = new GameBorder()
    player = new Player()
    ball = new Ball(player.x, player.y - player.height, player.height)
    //creates ball and player

    setBlocks()
    //sets blocks on it's positions
}
const panelRefresher = () => {
    textSize(20)

    let txt = 'Lives left:'
    let txtWidth = textWidth(text)

    strokeWeight(1)
    stroke(200, 155, 155)
    fill(255)
    text('Lives left:' + lives, width - txtWidth, 20, txtWidth, 20)
    //refreshes texts, showing lives
}

const setBlocks = () => {

    let sidesMargin = 75
    let btwBlocksX = 2
    let blockSize = width / 50
    let itemsInRow = floor((width - sidesMargin * 2) / (blockSize + btwBlocksX))
    let rowAmount = 10

    let rowMargin = (height - sidesMargin - sidesMargin) / rowAmount

    for (let i = 0; i < rowAmount; i++) {
        for (let j = 0; j <= itemsInRow; j++) {

            let incrementX = j * blockSize + sidesMargin

            blocks.push(new Block(incrementX + btwBlocksX * j, sidesMargin + rowMargin * i, blockSize))

        }
    }

}
//Sets blocks on it's places
