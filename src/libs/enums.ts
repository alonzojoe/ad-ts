

enum Movement {
    Up = "UP",
    Left = "Left",
    Right = "Right",
    Down = "Down",
}

const movePlayer = (key: string) => {
    switch (key) {
        case Movement.Up:
            console.log(`Player is moving ${Movement.Up}ward`);
            break;
        case Movement.Left:
            console.log(`Player is moving ${Movement.Left}ward`);
            break;
        case Movement.Right:
            console.log(`Player is moving ${Movement.Right}ward`);
            break;
        case Movement.Down:
            console.log(`Player is moving ${Movement.Down}ward`);
            break;
        default:
            console.log('No movement')
            break;
    }
}

movePlayer(Movement.Down)