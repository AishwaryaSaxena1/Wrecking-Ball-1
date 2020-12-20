class Rope{
    constructor(bodyA, pointB){
    
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 350
        }
        this.pointB=pointB
        this.slingshot = Constraint.create(options);
        
        World.add(world, this.slingshot);
    }
    display(){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke(255,167,3);   
        line(pointA.x, pointA.y, pointB.x, pointB.y);   
        
    }
    
}