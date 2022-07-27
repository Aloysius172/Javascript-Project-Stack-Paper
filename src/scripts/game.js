
import { Balls } from "./balls.js"
import { FallingObject } from "./fallingObject.js"
import { Player } from "./player.js"
export class Game {
  constructor(canv) {
    // this.canv = canv
    this.ctx = canv.getContext("2d")
    this.dimensions = {
      width: canv.width,
      height: canv.height
    }
    this.player = new Player(canv)
    this.balls = new Balls()
  }


  drawBackground(canv) {
    // const background = new Image()
    // background.src = "./img/footballfield.jpeg"
    // if (this instanceof Game) {
    //   background.onload = () => {
    //     console.log("Load the bckgd")
    //     this.background = background
    //     background.width = canv.width
    //     background.height = canv.height
        // this.ctx.drawImage(this.background, 0, 0);
      // }
      this.ctx.fillStyle = "green"
    
  }

  dropBalls(canv) {
    if (this instanceof Game) {
      // const numBalls = 7
      // const fallingObjects = [];
     
      console.log(this.balls.fallingObjects)

      for(let i = 0; i < this.balls.length; i++){
        // const football = new FallingObject(canv)
        // fallingObjects.push(football)
        this.balls[i].animateFall
      }
      // console.log(fallingObjects)
      // fallingObjects.forEach(fallingObject => {
      //   fallingObject.animateFall();

      // })
    }
  
  }

  gameStart(canv) {
    if (this instanceof Game) {
      this.drawBackground(canv)
      this.dropBalls(canv)
      this.player.animatePlayer()
    }

  }








}



