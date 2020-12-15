function drawOldMap(THIS) {
    let x = 36;
    let y = 34;
    for (let i = 0; i < 8; i++) {
        x = 36;
        y += 64;
        for (let j = 0; j < 8; j++) {
            x += 64;
            if(MAP[i][j] == 1) {
                // let item = THIS.add.sprite(x, y, 'zero')
                console.log("ADD ZERO");
                let item = THIS.add.sprite(100 + (j * 64), 98 + (i * 64), 'zero')
                item.setScale(0.6,0.6),
                item.setDepth(1); 
            } else if(MAP[i][j] == 2) {
                console.log("ADD CROSS");
                let item = THIS.add.sprite(100 + (j * 64), 98 + (i * 64), 'cross')
                item.setScale(0.6,0.6),
                item.setDepth(1);
            } 
        }    
    }
}