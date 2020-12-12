class gameScene extends Phaser.Scene {

    constructor() {
        super("gameScene");
    }

    init(data) {
        console.log('init', data);
        this.spriteName = data.spriteName;
    }

    preload() {
        this.load.image('block', '../img/Block.png');
        this.load.image('cross', '../img/x.png');
        this.load.image('zero', '../img/o.png');
    }

    create() {
        let THIS = this;
        // Задаем цвет заднего фона
        let cam  = this.cameras.add(0, 0, 900, 600);
        cam.setBackgroundColor(0x2a66b6);
        
        // createMap.bind(game);//карта 5 на 5
        createMap.bind(this, 5, this.spriteName, THIS)();
    }

    update() {
        let THIS = this;
        finder.findFive(THIS, this.spriteName);
    }
}
