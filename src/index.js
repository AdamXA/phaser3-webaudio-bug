import Phaser from "phaser";
import wizball from "./assets/wizball.png";
import wizballaudio from "./assets/oedipus_wizball_highscore.mp3";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  },
  audio: {
    disableWebAudio: false,
  }
};

const game = new Phaser.Game(config);

function preload ()
{
    this.load.audio('theme', [wizballaudio]);

    this.load.image('wizball', wizball);
}

function create ()
{
    this.add.image(400, 300, 'wizball').setScale(4);

    var music = this.sound.add('theme');

    music.play({ loop: true });
}
