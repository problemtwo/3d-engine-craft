class GameController {
  
  constructor(ThreeScene, ThreeCamera) {
    this.ThreeScene = ThreeScene; // The scene object from Three.js
    this.ThreeCamera = ThreeCamera; // The camara object from Three.js
    this.player = new Player(this, new Vector3D(40, 4, 0), new Vector3D(0.5, 2, 0.5), "0x00ff00", "", {
        "speed": 20,
        "jumpSpeed": 320,
        "lookSpeed": 15
    });
    this.scenes = [
      {
        "title": "Introduction",
        "objects": [
					//new Block(this, new Vector3D(0, 0, 0), new Vector3D(10000, 0.1, 0.1), 0.9, "0xff0000"), // x axis
          //new Block(this, new Vector3D(0, 0, 0), new Vector3D(0.1, 10000, 0.1), 0.9, "0x00ff00"), // y axis
          //new Block(this, new Vector3D(0, 0, 0), new Vector3D(0.1, 0.1, 10000), 0.9, "0x0000ff"), // z axis
          new Block(this, new Vector3D(0, 0, 0), new Vector3D(8000, 0.5, 8000), 0.9, "0xaaaaaa", "textures/iron_texture.jpg"), //ground
          //walls
          new Block(this, new Vector3D(5, 2.6, 0), new Vector3D(0.2, 5, 20), 0, "0x7ec0ee", "textures/log_cabin_texture.jpg"),
          new Block(this, new Vector3D(-5, 2.6, 0), new Vector3D(0.2, 5, 20), 0, "0x7ec0ee", "textures/log_cabin_texture.jpg"),
          //doorway
          new Block(this, new Vector3D(0, 4, 10), new Vector3D(10, 2.5, 0.5), 0, "0x7ec0ee", "textures/log_cabin_texture.jpg"),
          new Block(this, new Vector3D(3, 1.5, 10), new Vector3D(4, 2.5, 0.5), 0, "0x7ec0ee", "textures/log_cabin_texture.jpg"),
          new Block(this, new Vector3D(-3, 1.5, 10), new Vector3D(4, 2.5, 0.5), 0, "0x7ec0ee", "textures/log_cabin_texture.jpg"),
          new Block(this, new Vector3D(0, 2.6, -10), new Vector3D(10, 5, 0.5), 0, "0x7ec0ee", "textures/log_cabin_texture.jpg"),//wall
          new Block(this, new Vector3D(0, 0.3, 0), new Vector3D(10, 0.2, 20), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //floor
          new Block(this, new Vector3D(0, 5, 0), new Vector3D(10, 0.2, 20), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //ceiling
          new Block(this, new Vector3D(0, 0.4, 6.75), new Vector3D(10, 0.2, 5), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //step1
          new Block(this, new Vector3D(0, 0.6, 5.75), new Vector3D(10, 0.2, 3), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //step2
          new Block(this, new Vector3D(0, 0.2, 4.25), new Vector3D(6, 2, 1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //desk
          new Block(this, new Vector3D(0, 0.2, 4.25), new Vector3D(1, 3.5, 0.9), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //desk
          new Block(this, new Vector3D(0, 0.2, 4.25), new Vector3D(3, 2.5, 0.8), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //desk
          //bench1
          new Block(this, new Vector3D(0, 0.2, 0-1.5), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0, 0.6, 0.25-1.5), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench2
          new Block(this, new Vector3D(0, 0.2, 0), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0, 0.6, 0.25), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench3
          new Block(this, new Vector3D(0, 0.2, 0-3), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0, 0.6, 0.25-3), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench4
          new Block(this, new Vector3D(0, 0.2, 0-4.5), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0, 0.6, 0.25-4.5), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench5
          new Block(this, new Vector3D(0, 0.2, 0-6), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0, 0.6, 0.25-6), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench6
          new Block(this, new Vector3D(0, 0.2, 0-7.5), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0, 0.6, 0.25-7.5), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench7
          new Block(this, new Vector3D(0, 0.2, 0-9), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0, 0.6, 0.25-9), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //set outside
          new Block(this, new Vector3D(10, 5, 0), new Vector3D(0.2, 10, 40), 0, "0x20b0d0", ""),
          new Block(this, new Vector3D(-10, 5, 0), new Vector3D(0.2, 10, 40), 0, "0x20b0d0", ""),
          new Block(this, new Vector3D(0, 5, 20), new Vector3D(20, 10, 0.5), 0, "0x20b0d0", ""),
          new Block(this, new Vector3D(0, 6.8, -20), new Vector3D(20, 7, 0.5), 0, "0x20b0d0", ""),
          new Block(this, new Vector3D(6, 1.8, -20), new Vector3D(8, 3, 0.5), 0, "0x20b0d0", ""),
          new Block(this, new Vector3D(-6, 1.8, -20), new Vector3D(8, 3, 0.5), 0, "0x20b0d0", ""),
          new Block(this, new Vector3D(0, 10, 0), new Vector3D(20, 0.2, 40), 0.9, "0x20b0d0", ""), //sky
          //next set
          new Block(this, new Vector3D(5+40, 2.6, 0), new Vector3D(0.2, 5, 20), 0, "0x7ec0ee", "textures/iron_texture.jpg"),
          new Block(this, new Vector3D(-5+40, 2.6, 0), new Vector3D(0.2, 5, 20), 0, "0x7ec0ee", "textures/iron_texture.jpg"),
          //doorway
          new Block(this, new Vector3D(0+40, 4, 10), new Vector3D(10, 2.5, 0.5), 0, "0x7ec0ee", "textures/iron_texture.jpg"),
          new Block(this, new Vector3D(3+40, 1.5, 10), new Vector3D(4, 2.5, 0.5), 0, "0x7ec0ee", "textures/iron_texture.jpg"),
          new Block(this, new Vector3D(-3+40, 1.5, 10), new Vector3D(4, 2.5, 0.5), 0, "0x7ec0ee", "textures/iron_texture.jpg"),
          new Block(this, new Vector3D(0+40, 2.6, -10), new Vector3D(10, 5, 0.5), 0, "0x7ec0ee", "textures/iron_texture.jpg"),//wall
          new Block(this, new Vector3D(0+40, 0.3, 0), new Vector3D(10, 0.2, 20), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //floor
          new Block(this, new Vector3D(0+40, 5, 0), new Vector3D(10, 0.2, 20), 0.9, "0xaaaaaa", "textures/iron_texture.jpg"), //floor
          new Block(this, new Vector3D(0+40, 0.4, 6.75), new Vector3D(10, 0.2, 5), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //step1
          new Block(this, new Vector3D(0+40, 0.6, 5.75), new Vector3D(10, 0.2, 3), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //step2
          new Block(this, new Vector3D(0+40, 0.2, 4.25), new Vector3D(6, 1, 1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //desk
          new Block(this, new Vector3D(4.8+40, 3, -7), new Vector3D(0.2, 2, 3), 0.9, "0xaaaaaa", "textures/USFlag.jpg"), //US Flag
          new Block(this, new Vector3D(4.8+40, 3, -7+3.2), new Vector3D(0.2, 2, 3), 0.9, "0xaaaaaa", "textures/BritishFlag.jpg"), //British Flag
          new Block(this, new Vector3D(4.8+40, 3, -7+6.4), new Vector3D(0.2, 2, 3), 0.9, "0xaaaaaa", "textures/FrenchFlag.jpg"), //French Flag
          new Block(this, new Vector3D(4.8+40, 3, -7+9.6), new Vector3D(0.2, 2, 3), 0.9, "0xaaaaaa", "textures/SovietFlag.jpg"), //Soviet Flag
          new Block(this, new Vector3D(-4.8+40, 3, -7+9.6), new Vector3D(0.2, 2, 3), 0.9, "0xaaaaaa", "textures/USFlag.jpg"), //US Flag
          new Block(this, new Vector3D(-4.8+40, 3, -7+6.4), new Vector3D(0.2, 2, 3), 0.9, "0xaaaaaa", "textures/BritishFlag.jpg"), //British Flag
          new Block(this, new Vector3D(-4.8+40, 3, -7+3.2), new Vector3D(0.2, 2, 3), 0.9, "0xaaaaaa", "textures/FrenchFlag.jpg"), //French Flag
          new Block(this, new Vector3D(-4.8+40, 3, -7), new Vector3D(0.2, 2, 3), 0.9, "0xaaaaaa", "textures/SovietFlag.jpg"), //Soviet Flag
          //bench1
          new Block(this, new Vector3D(0+40, 0.2, 0-1.5), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25-1.5), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench2
          new Block(this, new Vector3D(0+40, 0.2, 0), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench3
          new Block(this, new Vector3D(0+40, 0.2, 0-3), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25-3), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench4
          new Block(this, new Vector3D(0+40, 0.2, 0-4.5), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25-4.5), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench5
          new Block(this, new Vector3D(0+40, 0.2, 0-6), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25-6), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench6
          new Block(this, new Vector3D(0+40, 0.2, 0-7.5), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25-7.5), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench7
          new Block(this, new Vector3D(0+40, 0.2, 0-9), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25-9), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //set outside
          new Block(this, new Vector3D(10+40, 5, 0), new Vector3D(0.2, 10, 40), 0, "0x20b0d0", ""),
          new Block(this, new Vector3D(-10+40, 5, 0), new Vector3D(0.2, 10, 40), 0, "0x20b0d0", ""),
          new Block(this, new Vector3D(0+40, 5, 20), new Vector3D(20, 10, 0.5), 0, "0x20b0d0", ""),
          new Block(this, new Vector3D(0+40, 6.8, -20), new Vector3D(20, 7, 0.5), 0, "0x20b0d0", ""),
          new Block(this, new Vector3D(6+40, 1.8, -20), new Vector3D(8, 3, 0.5), 0, "0x20b0d0", ""),
          new Block(this, new Vector3D(-6+40, 1.8, -20), new Vector3D(8, 3, 0.5), 0, "0x20b0d0", ""),
          new Block(this, new Vector3D(0+40, 10, 0), new Vector3D(20, 0.2, 40), 0.9, "0x20b0d0", "")
				],
        "npcs": [
          this.player,
					new NPC(this, new Vector3D(-1,3,1), new Vector3D(0.4, 2.1, 0.4), "", "models/Hester Prynne.glb", true, 'glb', true, 1, new Vector3D(0,0,1)),
					new NPC(this, new Vector3D(0,3,5.1), new Vector3D(0.4, 2.1, 0.4), "", "models/Hale.glb", true, 'glb', true, 0, new Vector3D(0,0,0), (obj) => { obj.collisionBox.cube.rotation.y = Math.PI; } ),
					new NPC(this, new Vector3D(-2,3,5.1), new Vector3D(0.4, 2.1, 0.4), "", "models/Roger.glb", true, 'glb', false, 0, new Vector3D(0,0,0), (obj) => { obj.collisionBox.cube.rotation.y = Math.PI; } ),
					//new NPC(this, new Vector3D(-1,3,-2), new Vector3D(0.4, 2.1, 0.4), "", "models/Male.glb", true, false),
					//new NPC(this, new Vector3D(1,3,-2), new Vector3D(0.2, 1.8, 0.1), "", "models/Tituba.glb", true, true, (obj) => { obj.pos.z += .01; }),
					//new NPC(this, new Vector3D(1,3,-4), new Vector3D(0.2, 1.8, 0.1), "", "models/Tituba.glb", true, true)
        ]
      },
      {
        "title": "100 Years Ago",
        "objects": [
          new Block(this, new Vector3D(0, 0, 0), new Vector3D(8000, 0.5, 8000), 0.9, "0xaaaaaa", "textures/iron_texture.jpg"), //ground
          //next set
          new Block(this, new Vector3D(5+40, 2.6, 0), new Vector3D(0.2, 5, 20), 0, "0x7ec0ee", "textures/iron_texture.jpg"),
          new Block(this, new Vector3D(-5+40, 2.6, 0), new Vector3D(0.2, 5, 20), 0, "0x7ec0ee", "textures/iron_texture.jpg"),
          //doorway
          new Block(this, new Vector3D(0+40, 4, 10), new Vector3D(10, 2.5, 0.5), 0, "0x7ec0ee", "textures/iron_texture.jpg"),
          new Block(this, new Vector3D(3+40, 1.5, 10), new Vector3D(4, 2.5, 0.5), 0, "0x7ec0ee", "textures/iron_texture.jpg"),
          new Block(this, new Vector3D(-3+40, 1.5, 10), new Vector3D(4, 2.5, 0.5), 0, "0x7ec0ee", "textures/iron_texture.jpg"),
          new Block(this, new Vector3D(0+40, 2.6, -10), new Vector3D(10, 5, 0.5), 0, "0x7ec0ee", "textures/iron_texture.jpg"),//wall
          new Block(this, new Vector3D(0+40, 0.3, 0), new Vector3D(10, 0.2, 20), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //floor
          new Block(this, new Vector3D(0+40, 5, 0), new Vector3D(10, 0.2, 20), 0.9, "0xaaaaaa", "textures/iron_texture.jpg"), //floor
          new Block(this, new Vector3D(0+40, 0.4, 6.75), new Vector3D(10, 0.2, 5), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //step1
          new Block(this, new Vector3D(0+40, 0.6, 5.75), new Vector3D(10, 0.2, 3), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //step2
          new Block(this, new Vector3D(40, 0.2, 4.25), new Vector3D(6, 2, 1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //desk
          new Block(this, new Vector3D(40, 0.2, 4.25), new Vector3D(1, 3.5, 0.9), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //desk
          new Block(this, new Vector3D(40, 0.2, 4.25), new Vector3D(3, 2.5, 0.8), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //desk
          new Block(this, new Vector3D(4.8+40, 3, -7), new Vector3D(0.2, 2, 3), 0.9, "0xaaaaaa", "textures/USFlag.jpg"), //US Flag
          new Block(this, new Vector3D(4.8+40, 3, -7+3.2), new Vector3D(0.2, 2, 3), 0.9, "0xaaaaaa", "textures/BritishFlag.jpg"), //British Flag
          new Block(this, new Vector3D(4.8+40, 3, -7+6.4), new Vector3D(0.2, 2, 3), 0.9, "0xaaaaaa", "textures/FrenchFlag.jpg"), //French Flag
          new Block(this, new Vector3D(4.8+40, 3, -7+9.6), new Vector3D(0.2, 2, 3), 0.9, "0xaaaaaa", "textures/SovietFlag.jpg"), //Soviet Flag
          new Block(this, new Vector3D(-4.8+40, 3, -7+9.6), new Vector3D(0.2, 2, 3), 0.9, "0xaaaaaa", "textures/USFlag.jpg"), //US Flag
          new Block(this, new Vector3D(-4.8+40, 3, -7+6.4), new Vector3D(0.2, 2, 3), 0.9, "0xaaaaaa", "textures/BritishFlag.jpg"), //British Flag
          new Block(this, new Vector3D(-4.8+40, 3, -7+3.2), new Vector3D(0.2, 2, 3), 0.9, "0xaaaaaa", "textures/FrenchFlag.jpg"), //French Flag
          new Block(this, new Vector3D(-4.8+40, 3, -7), new Vector3D(0.2, 2, 3), 0.9, "0xaaaaaa", "textures/SovietFlag.jpg"), //Soviet Flag
          //bench1
          new Block(this, new Vector3D(0+40, 0.2, 0-1.5), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25-1.5), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench2
          new Block(this, new Vector3D(0+40, 0.2, 0), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench3
          new Block(this, new Vector3D(0+40, 0.2, 0-3), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25-3), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench4
          new Block(this, new Vector3D(0+40, 0.2, 0-4.5), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25-4.5), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench5
          new Block(this, new Vector3D(0+40, 0.2, 0-6), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25-6), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench6
          new Block(this, new Vector3D(0+40, 0.2, 0-7.5), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25-7.5), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench7
          new Block(this, new Vector3D(0+40, 0.2, 0-9), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25-9), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //set outside
          new Block(this, new Vector3D(10+40, 5, 0), new Vector3D(0.2, 10, 40), 0, "0x20b0d0", ""),
          new Block(this, new Vector3D(-10+40, 5, 0), new Vector3D(0.2, 10, 40), 0, "0x20b0d0", ""),
          new Block(this, new Vector3D(0+40, 5, 20), new Vector3D(20, 10, 0.5), 0, "0x20b0d0", ""),
          new Block(this, new Vector3D(0+40, 6.8, -20), new Vector3D(20, 7, 0.5), 0, "0x20b0d0", ""),
          new Block(this, new Vector3D(6+40, 1.8, -20), new Vector3D(8, 3, 0.5), 0, "0x20b0d0", ""),
          new Block(this, new Vector3D(-6+40, 1.8, -20), new Vector3D(8, 3, 0.5), 0, "0x20b0d0", ""),
          new Block(this, new Vector3D(0+40, 10, 0), new Vector3D(20, 0.2, 40), 0.9, "0x20b0d0", "")
        ],
        "npcs": [
          this.player,
					new NPC(this, new Vector3D(39,3,1), new Vector3D(0.4, 2.1, 0.4), "", "models/Hester Prynne.glb", true, 'glb', true, 1, new Vector3D(0,0,1)),
					new NPC(this, new Vector3D(40,3,5.1), new Vector3D(0.4, 2.1, 0.4), "", "models/Hale.glb", true, 'glb', true, 0, new Vector3D(0,0,0), (obj) => { obj.collisionBox.cube.rotation.y = Math.PI; } ),
					new NPC(this, new Vector3D(42,3,5.1), new Vector3D(0.4, 2.1, 0.4), "", "models/Roger.glb", true, 'glb', false, 0, new Vector3D(0,0,0), (obj) => { obj.collisionBox.cube.rotation.y = Math.PI; } ),
        ]
      }
    ];
		var modelPaths = ['Parris','Female'].map(function(v){return 'models/' + v + '.glb'});
		function randomPath(){
			return modelPaths[Math.floor(modelPaths.length * Math.random())]
		}
		for(var i = 0; i < 3; i++) {
			for(var j = 0; j < 5; j++) {
				var row = 1.8*i - 2, col = 1.5*j - 6.6;
				var path = randomPath();
				var displ = (path === 'models/Parris.glb') ? new Vector3D(0,0,0) : new Vector3D(0.5,0,-0.5);
				this.scenes[0].npcs.push(new NPC(this,new Vector3D(row, 3, col),new Vector3D(0.2,2.1,0.2),"",path,true,'glb',true,0,displ, (obj) => { 
							if (!obj.collisionBox.playAnimation) {
								obj.collisionBox.playAnimation = Math.random() < 0.01; 
								obj.collisionBox.animationCounter = 0;
							}
							if (obj.collisionBox.playAnimation && obj.collisionBox.animationCounter == 0) {
								obj.collisionBox.animationCounter = 300;
							}
							if (obj.collisionBox.playAnimation) {
								obj.collisionBox.animationCounter--;
								if (obj.collisionBox.animationCounter < 1) {
										obj.collisionBox.playAnimation = false;
								}
							}
							obj.collisionBox.animation.paused = !obj.collisionBox.playAnimation;
				} ));
				this.scenes[1].npcs.push(new NPC(this,new Vector3D(row+40, 3, col),new Vector3D(0.2,2.1,0.2),"",path,true,'glb',true,0,displ, (obj) => { 
							if (!obj.collisionBox.playAnimation) {
								obj.collisionBox.playAnimation = Math.random() < 0.01; 
								obj.collisionBox.animationCounter = 0;
							}
							if (obj.collisionBox.playAnimation && obj.collisionBox.animationCounter == 0) {
								obj.collisionBox.animationCounter = 300;
							}
							if (obj.collisionBox.playAnimation) {
								obj.collisionBox.animationCounter--;
								if (obj.collisionBox.animationCounter < 1) {
										obj.collisionBox.playAnimation = false;
								}
							}
							obj.collisionBox.animation.paused = !obj.collisionBox.playAnimation;
				} ));
			}
		}

    this.sceneNum = 1;
    
    // Store a clock for physics calculations.
    this.clock = new THREE.Clock();
    this.delta;
    this.maxStep = (1/10) * 1000; // The biggest timestep allowed. When the game lags,
    // it will take many steps of this size once it recovers instead of one huge step.
    this.maxFrames = 10; // The most frames it will attempt to recover in one frame.
  }
  
  get scene() {
    return this.scenes[this.sceneNum];
  }

  checkCollision(object) {
    var collides = false;
    var npc;
    for (var i in this.scene.npcs) {
      npc = this.scene.npcs[i];
      if (npc !== object) { // Ensure we don't collide the object with itself.
        if (object.collisionBox.collideWith(npc)) {
            collides = true;
        }
      }
    }
    var obj;
    for (var i in this.scene.objects) {
      obj = this.scene.objects[i];
      if (obj !== object) { // Ensure we don't collide the object with itself.
        if (object.collisionBox.collideWith(obj)) {
            collides = true;
        }
      }
    }
    return collides;
  }
  
  init() {
    var npc;
    for (var i in this.scene.npcs) {
      npc = this.scene.npcs[i];
      if (npc !== this.player) {
          npc.collisionBox.initRender();
      }
    }
    var obj;
    for (var i in this.scene.objects) {
      obj = this.scene.objects[i];
      obj.collisionBox.initRender();
    }
  }

  integrate() {
      var npc;
      for (var i in this.scene.npcs) {
          npc = this.scene.npcs[i];
          npc.update();
      }
      var obj;
      for (var i in this.scene.objects) {
          obj = this.scene.objects[i];
          obj.update();
      }
  }

  update() {
    var frameTime = this.clock.getDelta(), frames = 0;
    
    while (frameTime > 0 && frames < this.maxFrames) {
        this.delta = Math.min(frameTime, this.maxStep);
        this.integrate();
        frameTime -= this.delta;
        frames++;
    }
  }
  
}
