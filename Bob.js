class Bob {
    constructor(x,y){
       var this_options = {
        restitution : 0.9,
        density : 1.2,
        friction : 1
        }
        this.body = Bodies.circle(x,y,50,this_options);
        this.radius = 50;
        World.add(world,this.body);
        
    }
    display(){
        var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			//rectMode(CENTER)
			fill("cyan");
			ellipse(0,0,50);
			pop()
    }
}