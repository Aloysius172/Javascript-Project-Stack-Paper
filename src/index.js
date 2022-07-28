
import { Game } from "./scripts/game.js"


const canvas = document.getElementById("canvas");

canvas.width = 850
canvas.height = 700



const game = new Game(canvas)

game.gameStart(canvas)

