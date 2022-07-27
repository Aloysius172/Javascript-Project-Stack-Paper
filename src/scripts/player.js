

// export class Player {
//   constructor(canv) {
//     this.canv = canv;
//     this.ctx = this.canv.getContext('2d')
//     const img = new Image();
//     img.src = "./img/football.jpeg"
    
//     img.onload = () => {
//       const scale = 0.3
//       this.img = img
//       this.width = img.width * scale
//       this.height = img.height * scale
//       // console.log(this.canv.width)
//       this.pos = {
//         x: this.canv.width / 2 - this.width / 2,
//         y: this.canv.height - this.height - 60
//       }

      
//     }
//     this.vel = {
//       x: 0,
//       y: 0
//     }

//   }

//   drawCharacter() {
//     this.ctx.drawImage(this.img, this.pos.x, this.pos.y, this.width, this.height)
//   }

//   updateCharacter() {
//     if(this.img){
//       this.drawCharacter()
//       this.pos.x += this.vel.x
//     }
//   }

//   animatePlayer() {
//     console.log("animating player")
//     requestAnimationFrame(this.animatePlayer.bind(this))
//     this.ctx.fillRect(0, 0, this.canv.width, this.canv.height)
//     this.updateCharacter()
//     if (keys.left.pressed && this.pos.x >= 0) {
//       this.vel.x -= 1
//     } else if (keys.right.pressed && this.pos.x + this.width <= this.canv.width) {
//       this.vel.x += 1
//     } else {
//       this.vel.x = 0
//     }
//   }
  
// }
// const keys = {
//   right: {
//     pressed: false
//   },
//   left: {
//     pressed: false
//   }
// }
// window.addEventListener('keydown', ({ key }) => {
//   switch (key) {
//     case "ArrowRight":
//       console.log("move to the right")
//       keys.right.pressed = true
//       break

//     case "ArrowLeft":
//       console.log("move to the left")
//       keys.left.pressed = true
//       break
//   }
//   console.log(keys.left.pressed)
// })

// window.addEventListener('keyup', ({ key }) => {
//   switch (key) {
//     case "ArrowRight":
//       console.log("stop moving right")
//       keys.right.pressed = false
//       break

//     case "ArrowLeft":
//       console.log("stop moving left")
//       keys.left.pressed = false
//       break
//   }
//   console.log(keys.left.pressed)
// })

export class Player {
  constructor(canv) {
    this.canv = canv;
    this.ctx = this.canv.getContext('2d')
    const img = new Image();
    img.src = "./img/abcatch.png"

    img.onload = () => {
      const scale = 0.2
      this.img = img
      this.width = img.width * scale
      this.height = img.height * scale
      // console.log(this.canv.width)
      this.pos = {
        x: this.canv.width / 2 - this.width / 2,
        y: this.canv.height - this.height - 60
      }
    }
    this.vel = {
      x: 0,
      y: 0
    }

  }

  drawCharacter() {
    this.ctx.drawImage(this.img, this.pos.x, this.pos.y, this.width, this.height)
  }

  updateCharacter() {
    if (this.img) {
      this.drawCharacter()
      this.pos.x += this.vel.x
    }
  }

  animatePlayer() {
    console.log("animating player")
    requestAnimationFrame(this.animatePlayer.bind(this))
    this.ctx.fillRect(0, 0, this.canv.width, this.canv.height)
    this.updateCharacter()
    if (keys.left.pressed && this.pos.x >= 0) {
      this.vel.x -= 1
    } else if (keys.right.pressed && this.pos.x + this.width <= this.canv.width) {
      this.vel.x += 1
    } else {
      this.vel.x = 0
    }
  }

}
const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}
window.addEventListener('keydown', ({ key }) => {
  switch (key) {
    case "ArrowRight":
      console.log("move to the right")
      keys.right.pressed = true
      break

    case "ArrowLeft":
      console.log("move to the left")
      keys.left.pressed = true
      break
  }
  console.log(keys.left.pressed)
})

window.addEventListener('keyup', ({ key }) => {
  switch (key) {
    case "ArrowRight":
      console.log("stop moving right")
      keys.right.pressed = false
      break

    case "ArrowLeft":
      console.log("stop moving left")
      keys.left.pressed = false
      break
  }
  console.log(keys.left.pressed)
})



