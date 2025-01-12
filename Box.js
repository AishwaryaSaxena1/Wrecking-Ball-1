class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.3
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    //this.Visiblity=255
    this.image = loadImage("images/block.png");
    World.add(world, this.body);
  }

  
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
   
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill("pink");
    stroke("red")
    strokeWeight(4)
    image(this.image,0, 0, this.width, this.height);
    pop();
    

    

  }
};
