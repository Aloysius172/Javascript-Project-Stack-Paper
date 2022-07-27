import { FallingObject } from "./fallingObject";

export class Balls extends FallingObject{
  constructor(pos, vel, img, canv){
    super(pos, vel, img, canv)
    this.ctx = this.canv.getContext("2d")
    this.fallingObjects = [];

    for (let i = 0; i < Math.pow(10000); i++) {
      this.fallingObjects.push(new FallingObject(this.canv))
    }

  }
  
}