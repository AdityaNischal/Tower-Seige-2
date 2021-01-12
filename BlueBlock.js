class BlueBlock extends BaseClass {
constructor(x,y,width,height) {
  
  super(x,y,width,height)

  this.visiblity = 255;
    }
  
    display(){
      if(this.body.speed < 6.5){
      fill(135,206,234)
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
   
    
     
  

     
    };
      

      }
     