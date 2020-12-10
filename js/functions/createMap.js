function createMap(mapSize, zero){
    console.log(zero);
    let x = 36;
    let y = 34;
    for (let i = 0; i < mapSize; i++) {
        x = 36;
        y += 64;
        for (let j = 0; j < mapSize; j++) {
            x += 64;
            let block = this.add.sprite(x, y, 'block')
                .setScale(0.6,0.6)
                .setInteractive()
                .on('pointerover', function(){
                    this.setTint(0xe0e4f1);
                })
                .on('pointerout', function(){
                    this.setTint();
                })
                .on('pointerdown', function(){
                    zero.x = this.x - 2;
                    zero.y = this.y - 1;
                    console.log("Hello block x = " + this.x + " y = " + this.y);
                })
        }
    }
}

function addZeroOrCross(){
    
}