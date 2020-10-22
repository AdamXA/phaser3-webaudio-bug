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
    var image = this.add.image(400, 300, 'wizball').setScale(4);
    image.setInteractive();
    image.once("pointerdown", () => {
      console.log("create iframe");
      var iframe = document.createElement("iframe");
      iframe.src = "iframe.html";
      iframe.style = "border: 0;height: 100%;position: fixed;width: 100%;overflow: hidden;z-index: 2147483647;top:0;left:0;";
      document.body.appendChild(iframe);
    })

    var music = this.sound.add('theme');

    music.play({ loop: true });
}
