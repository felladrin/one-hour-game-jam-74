class PlayerBehavior extends Sup.Behavior {
  speed = 0.03;
  direction = 0;
  
  update() {
    if (Sup.Input.isMouseButtonDown(0)) {
      switch(this.direction){
        case 0: this.actor.moveOrientedY(this.speed); break;
        case 1: this.actor.moveOrientedX(this.speed); break;
        case 2: this.actor.moveOrientedY(-this.speed); break;
        case 3: this.actor.moveOrientedX(-this.speed); break;
      }
    }
    
    if (Sup.Input.wasMouseButtonJustPressed(1) || Sup.Input.wasMouseButtonJustPressed(2)) {
      this.direction++;
      
      if (this.direction > 3) {
        this.direction = 0;
      }
      
      switch(this.direction){
        case 0:
          this.actor.spriteRenderer.setAnimation("up", false);
          break;
        case 1:
          this.actor.spriteRenderer.setAnimation("right", false);
          break;
        case 2:
          this.actor.spriteRenderer.setAnimation("down", false);
          break;
        case 3:
          this.actor.spriteRenderer.setAnimation("left", false);
          break;
      }
    }
  }
}
Sup.registerBehavior(PlayerBehavior);
