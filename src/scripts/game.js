
import { Ball } from "./balls.js"
// import { FallingObject } from "./fallingObject.js"
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
    this.ball = new Ball(canv)
    
    // const background = new Image()
    // background.src = "./img/footballfield.jpeg"
    
    // background.onload = () => {
    //   console.log("Load the bckgd")
    //   background.width = canv.width
    //   background.height = canv.height
    //   this.background = background
    //   this.ctx.drawImage(this.background, 0, 0);
      
    // }
    this.ctx.fillStyle = "green"
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
      // this.ctx.fillStyle = "green"
    
  }

  makeBalls(canv) {
    // if (this instanceof Game) {
      // const numBalls = 7
      // const fallingObjects = [];

      // for(let i = 0; i < this.balls.length; i++){
      //   const football = new Ball(canv)
      //   fallingObjects.push(football)
      //   this.balls[i].animateFall
      // }
      // console.log(fallingObjects)
      // fallingObjects.forEach(fallingObject => {
      //   fallingObject.animateFall();

      // })
      let ballcounter = 0
      const allBalls = []
      let createBall = function(ball){
        ball.animateBall()
      }

      for (let i = 0; i < 100; i++) {
        const football = new Ball(canv)
        allBalls.push(football)
        createBall(allBalls[i])
        allBalls.slice(i, 1)
        console.log(allBalls)
        ballcounter += i
        // console.log(ballcounter)
      }
  
  
  }

  gameStart(canv) {
    
      // this.drawBackground(canv)
      
      
      this.player.animatePlayer()
      this.makeBalls(canv)
  }
}












