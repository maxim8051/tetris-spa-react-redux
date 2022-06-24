import {useDispatch, useSelector} from "react-redux";
import {pause, resume, restart} from "../../actions";

export const InfoBoardComponent = () => {
    const dispatch = useDispatch()
    const game = useSelector((state) => state.game)
    const {score, isRun, gameOver} = game

    return (
        <div className='info-board'>
            <h3>SCORE: {score}</h3>
            <button className='info-board-button' onClick={(e) => {
                if (gameOver) {return}
                if (isRun) {
                    dispatch(pause())
                } else {
                    dispatch(resume())
                }
            }}>{isRun ? 'Пауза' : 'Играть'}</button>
            <button className='info-board-button' onClick={(e) => {
                dispatch(restart())
            }}>Начать заново</button>
        </div>
    )
}