class GreyBlock extends BaseClass{
constructor(x,y,width,height) {
 
  super(x,y,width,height)
    }
    
    display(){
     if(this.body.speed <6.5){
      fill(134, 135, 135);
      super.display();
     }
     else{
      World.remove(world,this.body);
      push()
      this.visiblity = this.visiblity - 5
      tint(255,this.Visiblity);
      rect(this.body.position.x,this.body.y,width,height)
      pop()
     }
    
     
    }
  };