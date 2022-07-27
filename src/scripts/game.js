// import { FallingObject } from "./fallingObject.js"
// import { Player } from "./player.js"
// export class Game {
//   constructor(canv){
//     // this.canv = canv
//     this.ctx = canv.getContext("2d")
//     this.dimensions = {
//       width: canv.width,
//       height: canv.height
//     }
//     this.player = new Player(canv)
//   }
  
  

//   drawBackground(canv) {
//     const background = new Image()
//     background.src = "./img/footballfield.jpeg"
//     if(this instanceof Game){
//       background.onload = () => {
//         console.log("Load the bckgd")
//         this.background = background
//         background.width = canv.width  
//         background.height = canv.height
//         this.ctx.drawImage(this.background, 0, 0);
//       }
//     }
//   }

//   dropBalls(canv) {
//     if ( this instanceof Game ){
//       const numBalls = 7
//       const fallingObjects = [];
//       while (fallingObjects.length < numBalls) {
//         fallingObjects.push(new FallingObject(canv))
//       }

//       fallingObjects.forEach(fallingObject => {
//         fallingObject.animateFall();
//       })
//     }
    
//   }

//   gameStart(canv){
//     if(this instanceof Game){
//       this.drawBackground(canv)
//       this.dropBalls(canv)
//       this.player.animatePlayer()
//     }
    
//   }

  


// }



// function drawBackground() {
//   const img = new Image();
//   img.src = "./2c2wwh4.jpeg";

//   img.onload = () => {
//     console.log("Load the bckgd")
//     const ogImgHeight = img.naturalHeight;
//     const ogImgWidth = img.naturalWidth;
//     canvas.width = ogImgWidth;
//     canvas.height = ogImgHeight;
//     layout.drawImage(img, 0, 0);
//   }

// }


import { bind } from "core-js/core/function"
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
      const numBalls = 7
      const fallingObjects = [];
     
      for(let i = 0; i < numBalls; i++){
        const football = new FallingObject(canv)
        fallingObjects.push(football)
      }
      console.log(fallingObjects)
      fallingObjects.forEach((fallingObject, index) => {
        if(fallingObjects.slice(index, index + 1).pos.y + fallingObject.height === this.dimensions.height){
          setTimeout(() => {
            fallingObjects.splice(index, 1)
          }, 0)
        }else{
          fallingObject.animateFall();
        }
      })
    }
  
  }

  gameStart(canv) {
    if (this instanceof Game) {
      this.drawBackground(canv)
      this.dropBalls(canv)
      // this.player.animatePlayer()
    }

  }
}