class NPC {

  constructor(GC, pos, size, color = "0x00f000", texturePath = "", hasBlenderModel = false, modelFormatType = '', hasBlenderAnimation = false, blenderAnimationIndex = 0, renderDisplacement = new Vector3D(0,0,0), behavior = function(obj) { return; } ) {
    this.GC = GC; // the GameController
    this.pos = pos;
    this.vel = new Vector3D(0, 0, 0);
    this.speed = 1;
    this.size = size; // Vector3D corresponding to the width, height, and length of the NPC. This doesn't rotate with the player, so it needs to be extra bulky.
    this.color = color;
		this.renderDisplacement = renderDisplacement;
		this.blenderAnimationIndex = blenderAnimationIndex;
    this.collisionBox = new CollisionBox(this, true, hasBlenderModel, modelFormatType, hasBlenderAnimation);
    this.texturePath = texturePath; // file path for the texture image
    this.prevTime = performance.now();
    this.behavior = behavior;
  }

  display() {
      this.collisionBox.display();
  }

	physics() {
      this.vel.y += PHYSICS.GRAVITY * GC.delta;
      this.vel.y *= PHYSICS.AIR_RESISTANCE;
      this.pos.shift(this.vel.getScaled(GC.delta));
      this.justCollided = false;
      this.justCollided = this.GC.checkCollision(this);
  } 
 
  update() {
    this.physics();
    this.display();
    this.behavior(this);
  }

}
