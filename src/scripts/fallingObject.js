




export class FallingObject {
  constructor(canv) {
    this.canv = canv;
    this.ctx = this.canv.getContext("2d")
    const img = new Image();
    img.src = "./img/football.jpeg"

    img.onload = () => {
      const scale = 0.2
      this.img = img
      this.width = img.width * scale;
      this.height = img.height * scale;
      this.pos = {
        x: Math.floor(Math.random() * this.canv.width),
        y: 0
      }
    }

    this.vel = {
      x: 0,
      y: 7
    }

  }

  drawObject() {
    this.ctx.drawImage(this.img, this.pos.x, this.pos.y, this.width, this.height)
  }

  update() {
    if (this.img) {
      this.drawObject()
      if (this.pos.y + this.height <= this.canv.height)
        this.pos.y += this.vel.y
    }
  }

  animateFall() {
    console.log("object falling")
    requestAnimationFrame(this.animateFall.bind(this))
    this.ctx.fillRect(0, 0, this.canv.width, this.canv.height)
    this.update()
  }





}


