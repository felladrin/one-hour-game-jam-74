class ScoreBehavior extends Sup.Behavior {
  public static score = 0;
  
  public static increaseScore() {
    this.score++;
  }
  
  update() {
    this.actor.textRenderer.setText("SCORE: " + ScoreBehavior.score);
  }
}
Sup.registerBehavior(ScoreBehavior);
