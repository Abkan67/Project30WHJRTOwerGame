class Block{
    constructor(x, y, width, height) {
      this.ded = false;
      this.visibility = 255;
        var options = {
          restitution:0.2,
          friction: 0.9,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");
        World.add(world, this.body);
      }
      remove() {
        World.remove(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        if(this.body.speed>3||this.ded) {this.ded=true; this.visibility-=25; tint(255, this.visibility);}
        if(this.tint<=0){this.remove();} else {
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0,0,this.width, this.height);
        }
        pop();
      }
}
