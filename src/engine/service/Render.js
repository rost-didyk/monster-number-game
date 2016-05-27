export default class Render {
    constructor($canvas) {
        this.ctx = $canvas.getContext("2d");
        this.ctx.fillStyle = "#54566D";
        this.ctx.fillRect(0, 0, $canvas.width, $canvas.height);
    }

    gameStartScreen() {
        this.ctx.fillStyle = "rgb(200,0,0)";
        this.ctx.fillRect (10, 10, 55, 50);
        this.ctx.fillText('Начать');
    }
}