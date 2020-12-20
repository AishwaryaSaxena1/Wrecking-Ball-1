class Ground
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true			
			};
		this.body=Bodies.rectangle(x, y, width, height , options);
		this.width=width
		this.height=height
		World.add(world, this.body);
	}
	display()
	{
			push ()
			rectMode(CENTER)
			strokeWeight(4);
			stroke(255,255,255);
			fill(94,255,0)
			rect(this.body.position.x,this.body.position.y,this.width, this.height);
			pop()
			
	}

}