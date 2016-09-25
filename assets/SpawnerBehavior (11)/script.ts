class SpawnerBehavior extends Sup.Behavior
{
    prefabPath: string;
    spawnAtOnce = 1;
    spawnLimit = 10;
    spawnInterval = 2;
    rangeMinX = -1;
    rangeMaxX = 1;
    rangeMinY = -1;
    rangeMaxY = 1;
    rangeMinZ = -1;
    rangeMaxZ = 1;

    private interval = 0;

    update()
    {
        if (this.interval > this.spawnInterval)
        {
            this.interval = 0;

            for (let i = 0; (i < this.spawnAtOnce) && (this.actor.getChildren().length < this.spawnLimit); i++)
            {
                this.spawn();
            }
        }
        else
        {
            this.interval += 1 / Sup.Game.getFPS();
        }
    }

    spawn()
    {
        let spawnerPosition = this.actor.getPosition();
        
        let prefab = Sup.appendScene(this.prefabPath, this.actor)[0];
        
        prefab.setPosition(
            Sup.Math.Random.integer(spawnerPosition.x + this.rangeMinX, spawnerPosition.x + this.rangeMaxX),
            Sup.Math.Random.integer(spawnerPosition.y + this.rangeMinY, spawnerPosition.y + this.rangeMaxY),
            Sup.Math.Random.integer(spawnerPosition.z + this.rangeMinZ, spawnerPosition.z + this.rangeMaxZ)
        );
    }
}

Sup.registerBehavior(SpawnerBehavior);