
import { Game } from "./scripts/game.js"


const canvas = document.getElementById("canvas");

canvas.width = 800
canvas.height = 800



const game = new Game(canvas)

game.gameStart(canvas)

