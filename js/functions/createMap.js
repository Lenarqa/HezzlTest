function createMap(mapSize, itemSprite, THIS){
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
                    if(MAP[this.i][this.j] == 0) {
                        let item = THIS.add.sprite(-100, -100, itemSprite)
                        item.setScale(0.6,0.6),
                        item.setDepth(1),
                        item.x = this.x - 2,
                        item.y = this.y - 1;

                        if(itemSprite == 'cross') {
                            MAP[this.i][this.j] = 2;
                        } else {
                            MAP[this.i][this.j] = 1;
                        }

                        console.log("Hello block x = " + this.x + " y = " + this.y);
                        console.log("Hello block i = " + this.i + " j = " + this.j);
                    } else {
                        this.setTint(0x2a67b8);
                        console.log("Этот квадрат занят!")
                    }
                    console.log(MAP);
                })
            block.i = i;
            block.j = j;
        }
    }
}