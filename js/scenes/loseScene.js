class loseScene extends Phaser.Scene {

    constructor() {
        super("loseScene");
    }

    init() {

    }

    preload() {
        this.load.image('cross', '../img/x.png');
        this.load.image('zero', '../img/o.png');
    }

    create() {
        // Задаем цвет заднего фона
        let cam  = this.cameras.add(0, 0, 900, 600);
        cam.setBackgroundColor(0x2a66b6);
        
    }

    update() {
    
    }
}