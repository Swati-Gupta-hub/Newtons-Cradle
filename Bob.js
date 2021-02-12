class Bob
 {
    constructor(x,y)
    
    {
      var options = 
      {
          isStatic:false,
          'restitution':1,
          'friction':0,
          'density':7.1      
      }
      
      this.body = Bodies.circle(x,y,25, options);
      World.add(world,this.body)
      
      console.log(this.body);
    }
    display()
    {
     var pos=this.body.position
      push();
     

      ellipseMode(RADIUS);
      fill("white");
      ellipse(pos.x, pos.y,25,25);
      pop();
    }
  }