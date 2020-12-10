function create() {
    const THIS = this;
    // Задаем цвет заднего фона
    cam  = this.cameras.add(0, 0, 900, 600);
    cam.setBackgroundColor(0x2a66b6);
    
    // createMap.bind(game);//карта 5 на 5
    createMap.bind(this, 5, 'zero', THIS)();
    
    

}

