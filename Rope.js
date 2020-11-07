class Chain{
    constructor(bodyA, pointB,){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 300
        }
        this.pointB = pointB;
        
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        stroke(28,19,229);
        strokeWeight(4);
        line(pointA.x, pointA.y,pointB.x, pointB.y);
    }
    
}