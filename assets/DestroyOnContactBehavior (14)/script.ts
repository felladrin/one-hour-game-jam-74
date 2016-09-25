class DestroyOnContactBehavior extends Sup.Behavior {
    target: Sup.Actor;
    targetName: string;
    distanceToConsiderInContact = 1;
    
    awake()
    {
        this.target = Sup.getActor(this.targetName);
    }

    update()
    {
        if (this.target != null)
        {
            let position = this.actor.getPosition();
            let targetPosition = this.target.getPosition();
            let distanceToTarget = targetPosition.distanceTo(position);

            if (distanceToTarget <= this.distanceToConsiderInContact) {
                this.actor.destroy();
                ScoreBehavior.increaseScore();
            }
        }
    }
}

Sup.registerBehavior(DestroyOnContactBehavior);