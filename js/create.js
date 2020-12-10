function create() {
    // Задаем цвет заднего фона
    cam  = this.cameras.add(0, 0, 900, 600);
    cam.setBackgroundColor(0x2a66b6);
    
    //создаем нолик
    let zero = this.add.sprite(-100, -100, 'zero');
    zero.setScale(0.6,0.6);
    zero.setDepth(1);

    let cross = this.add.sprite(98+64, 95, 'cross');
    cross.setScale(0.65,0.65);
    cross.setDepth(1);
     
    // createMap.bind(game);//карта 5 на 5
    createMap.bind(this, 6, zero)();
    
    

}

