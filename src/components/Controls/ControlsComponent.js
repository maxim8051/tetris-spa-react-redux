import {useSelector, useDispatch} from 'react-redux';
import {moveLeft, moveRight, rotate, moveDown} from "../../actions";
import {useCallback, useEffect} from "react";
import React from "react";

export const ControlsComponent = () => {
    const dispatch = useDispatch()
    const isRun = useSelector((state) => state.game.isRun)
    const gameOver = useSelector((state) => state.game.gameOver)

    const handleKeyPress = useCallback((event) => {
        if (event.code === 'KeyA')  { dispatch(moveLeft()) }
        if (event.code === 'KeyD')  { dispatch(moveRight()) }
        if (event.code === 'KeyS')  { dispatch(moveDown()) }
        if (event.code === 'KeyW')  { dispatch(rotate()) }
    }, [dispatch]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)

        if (!isRun) {
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, [handleKeyPress, isRun]);



    return <div className='controls-board'>
        <button
            id='left'
            disabled={!isRun || gameOver}
            className='control-button'
            onClick={() => {
                dispatch(moveLeft())
            }
        }>←</button>

        <button
            disabled={!isRun || gameOver}
            className='control-button'
            onClick={() => {
                dispatch(moveRight())
            }
        }>→</button>

        <button
            disabled={!isRun || gameOver}
            className='control-button'
            onClick={() => {
                dispatch(rotate())
            }
        }>↻</button>

        <button
            disabled={!isRun || gameOver}
            className='control-button'
            onClick={() => {
                dispatch(moveDown())
            }
        }>↓</button>

    </div>
}

