function createMap(mapSize){
    let x = 36;
    let y = 34;
    for (let i = 0; i < mapSize; i++) {
        x = 36;
        y += 64;
        for (let j = 0; j < mapSize; j++) {
            x += 64;
            let block = this.add.sprite(x, y, 'block');
            block.setScale(0.6,0.6);   
        }
    }
}