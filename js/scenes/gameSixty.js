class gameSixty extends Phaser.Scene {

    constructor() {
        super("gameSixty");
    }

    init(data) {
        console.log('init', data);
        this.spriteName = data;
    }

    preload() {
        this.load.image('cross', '../img/x.png');
        this.load.image('zero', '../img/o.png');
    }

    create() {
        let THIS = this;
        // Задаем цвет заднего фона
        let cam  = this.cameras.add(0, 0, 900, 600);
        cam.setBackgroundColor(0x2a66b6);

        //карта 8 на 8
        reranderMap.bind(this, 8, this.spriteName, THIS)();
    }

    update() {
    
    }
}