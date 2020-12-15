class Robot {
    move(THIS, playerSprite) {
        let robotSprite;
        if(playerSprite == "zero") {
            robotSprite = 'cross';
        }else {
            robotSprite = 'zero';
        }

        let move = false;
        let isFreeSpace = false;
        while(move == false){
            let x = Phaser.Math.Between(0, 4);
            let y = Phaser.Math.Between(0, 4);
            console.log("robot x = " + (x) + " robot  y = " + (y));
            
            // Проверяем есть ли пустое место на карте для хода!
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    if(MAP[i][j] == 0) {
                        isFreeSpace = true;
                        move = false; // чтобы выйти из цикла без постановки крестика или нолика
                        break;
                    }  
                }
            }

            if(isFreeSpace == true) {
                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 5; j++) {
                        if((MAP[i][j] == 0) && (i == x) && (j == y)) {
                            let item = THIS.add.sprite((100 + (y * 64)), (98 + (x * 64)) , robotSprite);
                            item.setScale(0.6,0.6),
                            item.setDepth(1);
                            
                            if(robotSprite == 'zero') {
                                MAP[x][y] = 1;
                            }else {
                                MAP[x][y] = 2;
                            }
    
                            move = true;
                        }else {
                            console.log("Меняем x y");
                        }
                    }
                }
            }else {
                console.log("Нет ходов для ИИ");
                return true;
            }
        }//end while(move == false ) 
        return true;
    }

    moveSixty(THIS, playerSprite) {
        let robotSprite;
        if(playerSprite == "zero") {
            robotSprite = 'cross';
        }else {
            robotSprite = 'zero';
        }

        let move = false;
        let isFreeSpace = false;
        while(move == false){
            let x = Phaser.Math.Between(0, 7);
            let y = Phaser.Math.Between(0, 7);
            console.log("robot x = " + (x) + " robot  y = " + (y));
            
            // Проверяем есть ли пустое место на карте для хода!
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    if(MAP[i][j] == 0) {
                        isFreeSpace = true;
                        move = false; // чтобы выйти из цикла без постановки крестика или нолика
                        break;
                    }  
                }
            }

            if(isFreeSpace == true) {
                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 8; j++) {
                        if((MAP[i][j] == 0) && (i == x) && (j == y)) {
                            let item = THIS.add.sprite((100 + (y * 64)), (98 + (x * 64)) , robotSprite);
                            item.setScale(0.6,0.6),
                            item.setDepth(1);
                            
                            if(robotSprite == 'zero') {
                                MAP[x][y] = 1;
                            }else {
                                MAP[x][y] = 2;
                            }
    
                            move = true;
                        }else {
                            console.log("Меняем x y");
                        }
                    }
                }
            }else {
                console.log("Нет ходов для ИИ");
                return true;
            }
        }//end while(move == false ) 
        return true;
    }

}

var robot = new Robot();