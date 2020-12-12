class Finder {
    winOrLose(THIS, playerSprite, tempId) {
        if(playerSprite == 'zero' && tempId == 1){
            THIS.scene.start('winScene');
        }else if(playerSprite == 'zero' && tempId == 2) {
            THIS.scene.start('loseScene');
        }else if(playerSprite == 'cross' && tempId == 2) {
            THIS.scene.start('winScene');
        }else if(playerSprite == 'cross' && tempId == 1){
            THIS.scene.start('loseScene');
        }
    }

    findFive(THIS, playerSprite){
        // ищем 5 по горизонтали для карты 5 на 5
        let tempId;
        let counter = 0;
        for (let i = 0; i < 5; i++) {
            counter = 0;
            if(MAP[i][0] != 0) {
                tempId = MAP[i][0];
                for (let j = 0; j < 5; j++) {
                    if(MAP[i][j] == tempId){
                        counter += 1;
                    }
                    if(counter == 5){
                        this.winOrLose(THIS,playerSprite, tempId);
                    }
                }
            }
        }


    }
}

var finder = new Finder();

