class sling
{
    constructor(bodya, pointb)
    {
        var options = 
        {
            bodyA: bodya, 
            pointB: pointb,
            stifness: 3
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }
    display()
    {
        var pos1 = this.chain.bodyA.position;
        var pos2 = this.chain.pointB;
        push();
        strokeWeight(5);
        stroke("white");
        line(pos1.x, pos1.y, pos2.x, pos2.y);
        pop();
    }
}

