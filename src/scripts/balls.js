// import { FallingObject } from "./fallingObject";


export class Ball{
  constructor(canv){
    this.canv = canv
    this.ctx = this.canv.getContext("2d")
    
    const img = new Image()
    img.src = "./img/football-png-24989.png"

    img.onload = () => {
      this.scale = 0.2
      this.img = img
      this.width = img.width * this.scale;
      this.height = img.height * this.scale;
      this.pos = {
        x: Math.floor(Math.random() * this.canv.width),
        y: 0
      }
      
      this.ctx.drawImage(this.img, this.pos.x, this.pos.y, this.width, this.height)
      
      
    }
    this.vel = {
      x: 0,
      y: 5
    }
    
  }
  

  update(){
    // console.log("updating ball")
    if(this.img){
      this.ctx.drawImage(this.img, this.pos.x, this.pos.y, this.width, this.height)
      if (this.pos.y + this.height <= this.canv.height){
        this.pos.y += this.vel.y
      }
    }
  }

  animateBall() {
    // console.log("object falling")
    requestAnimationFrame(this.animateBall.bind(this))
    this.ctx.fillRect(0, 0, this.canv.width, this.canv.height)
    this.update()
  }
    


}