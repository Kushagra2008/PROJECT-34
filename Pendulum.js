class pendulum
{
    constructor(x, y, color)
    {
        var options = {
            isStatic: false,
            restitution: 1, 
            friction: 0,
            frictionAir: 0.0,
            slop: 1,
            inertia: Infinity
            
         }
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x, this.y, 40, 40, options);
        this.color = color
        World.add(world, this.body)
    }
    display()
    {
        var posi = this.body.position;
        push()
        translate(posi.x, posi.y)
        ellipseMode(CENTER);
        stroke(255);
        strokeWeight(6);
        fill(this.color)
        ellipse(0, 0, 40, 40);
        pop()
    }
}
//density: 0.8,frictionAir: 0.0,slop: 1,inertia: Infinity