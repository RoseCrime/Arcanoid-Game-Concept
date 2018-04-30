const gameSetter = () => {
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
    //refreshes texts, showing lives each frame

}

const setBlocks = () => {

    let sideMargin = 20
    let betweenMargin = 10
    let itemsInRow = floor((width - 40) / 20)
    let blockSize = 20

    let topMargin = 75,
        botMargin = 50

    let rowMargin = (height - topMargin - botMargin) / 5

    let rowAmount = 5


    for (let i = 0; i < rowAmount; i++) {
        for (let j = 0; j <= itemsInRow; j++) {

            let incrementX = j * blockSize + sideMargin

            blocks.push(new Block(incrementX, topMargin + rowMargin * i))

        }
    }

}
//function which sets blocks on it's places
