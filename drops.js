class Drops{
    constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
         this.body = Bodies.circle(x, y, 10/2, options);
         this.radius = 5;
         this.x = x;
         this.y = y;
         World.add(world, this.body);
      }
      display(){
            if(this.body.position.y>810){
                 Matter.Body.setPosition(this.body,{x:this.x,y:this.y});
             }
         var angle = this.body.angle;
         push();
         translate(this.body.position.x, this.body.position.y);
         rotate(angle);
         fill("blue");
         ellipseMode(CENTER);
         circle(0, 0, this.radius);
         pop();
      }
}