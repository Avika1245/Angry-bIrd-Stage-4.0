class SlingShot{
    //create constructor
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            //add stiffness and length to the slingshot
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        //add it to the world
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;

    }
    display(){
    if(this.sling.bodyA != null)
    {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        //show slingshot 
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}