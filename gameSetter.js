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
    let amount = floor((width - 40) / 20)
    let blockSize = 20
    
    

    for (let i = 0; i <= amount; i++) {

        let incrementX = i * blockSize + sideMargin

        blocks.push(new Block(incrementX, 100))

        blocks.push(new Block(incrementX, 200))

        blocks.push(new Block(incrementX, 300))

        blocks.push(new Block(incrementX, 400))

        blocks.push(new Block(incrementX, 500))
    }
}
//function which sets blocks on it's places
