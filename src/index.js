// //with myron
// import { FallingObject } from "./scripts/fallingObject.js"
// import { Player } from "./scripts/player.js"
// import { Game } from "./scripts/game.js"
// document.addEventListener('DOMContentLoaded', () => {

//   const canvas = document.getElementById("canvas");
//   const layout = canvas.getContext('2d');
//   canvas.width = innerWidth
//   canvas.height = innerHeight
  
 
  
//   const game = new Game(canvas)
//   const player = new Player(canvas)
//   // const fallingItem = new FallingObject(canvas);
//  game.gameStart(canvas)

  
  
//   const keys = {
//     right: {
//       pressed: false
//     },
//     left: {
//       pressed: false
//     }
//   }

//   // function animatePlayer() {
//   //   requestAnimationFrame(animatePlayer)
//   //   layout.fillRect(0, 0, canvas.width, canvas.height)
//   //   player.updateCharacter(layout)
//   //   if (keys.left.pressed && player.pos.x >= 0) {
//   //     player.vel.x -= 1
//   //   } else if (keys.right.pressed && player.pos.x + player.width  <= canvas.width ) {
//   //     player.vel.x += 1
//   //   } else {
//   //     player.vel.x = 0
//   //   }
//   // }

//   // animatePlayer();

//   // function animateFall() {
//   //   console.log("object falling")
//   //   requestAnimationFrame(animateFall)
//   //   layout.fillRect(0, 0, canvas.width, canvas.height)
//   //   fallingItem.update(layout)
//   // }
//   // animateFall();
  
  
  
  
//   // let num = 7
//   // const fallingObjects = [];
//   // while (fallingObjects.length < num){
//   //   fallingObjects.push(new FallingObject(canvas))
//   // }
  
//   // fallingObjects.forEach(fallingObject => {
//   //   fallingObject.animateFall();
//   // })

  
  
  
  
//   window.addEventListener('keydown', ({ key }) => {
//     switch (key) {
//       case "ArrowRight":
//         console.log("move to the right")
//         keys.right.pressed = true
//         break

//       case "ArrowLeft":
//         console.log("move to the left")
//         keys.left.pressed = true
//         break
//     }
//     console.log(keys.left.pressed)
//   })

//   window.addEventListener('keyup', ({ key }) => {
//     switch (key) {
//       case "ArrowRight":
//         console.log("stop moving right")
//         keys.right.pressed = false
//         break

//       case "ArrowLeft":
//         console.log("stop moving left")
//         keys.left.pressed = false
//         break
//     }
//     console.log(keys.left.pressed)
//   })

// })



import { Game } from "./scripts/game.js"


const canvas = document.getElementById("canvas");

canvas.width = 800
canvas.height = 800



const game = new Game(canvas)

game.gameStart(canvas)

