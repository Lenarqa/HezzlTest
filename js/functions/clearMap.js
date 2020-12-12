function clearMap() {
    for (let i = 0; i < MAP.length; i++) {
        for (let j = 0; j < MAP.length; j++) {
            MAP[i][j] = 0
        }
    }
}