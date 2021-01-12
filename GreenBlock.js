class GreenBlock extends BaseClass {
  constructor(x,y,width,height) {
   
    super(x,y,width,height)
  }

    display(){
     if(this.body.speed <7){
      fill(63,224,208);
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