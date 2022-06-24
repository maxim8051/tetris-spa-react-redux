import {useSelector} from "react-redux";

export const MessageComponent = () => {
    const isRun = useSelector((state) => state.game.isRun)
    const gameOver = useSelector((state) => state.game.gameOver)

    let  message = ''
    let isHidden = 'hidden'

    if (gameOver) {
        message = 'GAME OVER !!!'
        isHidden = ''
    } else if (!isRun) {
        message = 'PAUSE'
        isHidden = ''
    }
    return <div className={`message-status ${isHidden}`}>
        <h1>{message}</h1>
    </div>
}