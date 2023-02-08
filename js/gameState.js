function initState() {
    let startX = Math.floor(Math.random() * 500);
    let startY = Math.floor(Math.random() * 500);

    const state = {
        player: 'Gandalf',
        gameOver: false,
        score: 0,
        scoreRate: 1,
        killScore: 1000,
        wizard: {
            width: 82,
            height: 100,
            posX: startX,
            posY: startY,
            speed: 10,
        },
        bugStats: {
            width: 80,
            height: 80,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 1000,
            speed: 8,
        },
        fireball: {
            width: 35,
            height: 35,
            speed: 15,
            nextSpawnTimestamp: 0,
            fireRate: 300,
        },
        keys: {
            KeyA: false,
            KeyS: false,
            KeyD: false,
            KeyW: false,
            Space: false,
        }
    }

    return state;
}