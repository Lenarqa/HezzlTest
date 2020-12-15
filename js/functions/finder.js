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

        // ищем 5 по веритикали для карты 5 на 5
        let tempIdVertical;
        let counterVertical = 0;
        for (let i = 0; i < 5; i++) {
            counterVertical = 0;
            if(MAP[0][i] != 0) {
                tempIdVertical = MAP[0][i];
                for (let j = 0; j < 5; j++) {
                    if(MAP[j][i] == tempIdVertical){
                        counterVertical += 1;
                    }
                    if(counterVertical == 5){
                        this.winOrLose(THIS,playerSprite, tempIdVertical);
                    }
                }
            }
        }

        // ищем 5 правая диагональ для карты 5 на 5
        let tempIdRigthToDown;
        let counterRigthToDown = 0;
        if(MAP[0][0] != 0) {
            tempIdRigthToDown = MAP[0][0];
            for (let j = 0; j < 5; j++) {
                if(MAP[j][j] == tempIdRigthToDown){
                    counterRigthToDown += 1;
                }
                if(counterRigthToDown == 5){
                    this.winOrLose(THIS,playerSprite, tempIdRigthToDown);
                }  
            }
        }
        

        // ищем 5 левая диагональ для карты 5 на 5
        let tempIdLeftToDown;
        let counterLeftToDown = 0;
        counterLeftToDown = 0;
        if(MAP[0][4] != 0) {
            tempIdLeftToDown = MAP[0][4];
            for (let j = 0; j < 5; ++j) {
                if(MAP[j][5-j-1] == tempIdLeftToDown){
                    counterLeftToDown += 1;
                }
                if(counterLeftToDown == 5){
                    this.winOrLose(THIS,playerSprite, tempIdLeftToDown);
                }  
            }
        }
        
    }

    findFiveSixty(THIS, playerSprite) {
        // ищем 5 по горизонтали для карты 8 на 8
        let tempId;
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 4; j++) {
                if(MAP[i][j] != 0) {
                    tempId = MAP[i][j]
                }
                if((tempId == MAP[i][j+1]) && 
                    (tempId == MAP[i][j+2]) &&
                    (tempId == MAP[i][j+3]) &&
                    (tempId == MAP[i][j+4])
                ){
                    this.winOrLose(THIS, playerSprite, tempId);
                }
            }
        }

        // ищем 5 по веритикали для карты 5 на 5
        let tempIdVertical;
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 4; j++) {
                if(MAP[j][i] != 0) {
                    tempIdVertical = MAP[j][i]
                }
                if((tempIdVertical == MAP[j+1][i]) && 
                    (tempIdVertical == MAP[j+2][i]) &&
                    (tempIdVertical == MAP[j+3][i]) &&
                    (tempIdVertical == MAP[j+4][i])
                ){
                    this.winOrLose(THIS, playerSprite, tempIdVertical);
                }
            }
        }

        /*

        // ищем 5 по веритикали для карты 5 на 5
        let tempIdVertical;
        let counterVertical = 0;
        for (let i = 0; i < 5; i++) {
            counterVertical = 0;
            if(MAP[0][i] != 0) {
                tempIdVertical = MAP[0][i];
                for (let j = 0; j < 5; j++) {
                    if(MAP[j][i] == tempIdVertical){
                        counterVertical += 1;
                    }
                    if(counterVertical == 5){
                        this.winOrLose(THIS,playerSprite, tempIdVertical);
                    }
                }
            }
        }

        // ищем 5 правая диагональ для карты 5 на 5
        let tempIdRigthToDown;
        let counterRigthToDown = 0;
        if(MAP[0][0] != 0) {
            tempIdRigthToDown = MAP[0][0];
            for (let j = 0; j < 5; j++) {
                if(MAP[j][j] == tempIdRigthToDown){
                    counterRigthToDown += 1;
                }
                if(counterRigthToDown == 5){
                    this.winOrLose(THIS,playerSprite, tempIdRigthToDown);
                }  
            }
        }
        

        // ищем 5 левая диагональ для карты 5 на 5
        let tempIdLeftToDown;
        let counterLeftToDown = 0;
        counterLeftToDown = 0;
        if(MAP[0][4] != 0) {
            tempIdLeftToDown = MAP[0][4];
            for (let j = 0; j < 5; ++j) {
                if(MAP[j][5-j-1] == tempIdLeftToDown){
                    counterLeftToDown += 1;
                }
                if(counterLeftToDown == 5){
                    this.winOrLose(THIS,playerSprite, tempIdLeftToDown);
                }  
            }
        }
        */
    }
}

var finder = new Finder();

