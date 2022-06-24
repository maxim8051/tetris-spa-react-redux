import {GridSquareComponent} from "../GridSquare/GridSquareComponent";
import React, { useEffect, useRef } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {shapes} from "../../utils";
import {moveDown} from "../../actions";


export const GridBoardComponent = () => {
    const requestRef = useRef()
    const lastUpdateTimeRef = useRef(0)
    const progressTimeRef = useRef(0)
    const dispatch = useDispatch()
    const game = useSelector((state) => state.game)
    const { grid, shape, rotation, x, y, isRun, speed } = game
    const block = shapes[shape][rotation]
    const blockColor = shape


    const update = (time) => {
        requestRef.current = requestAnimationFrame(update)
        if (!isRun) {
            return
        }
        if (!lastUpdateTimeRef.current) {
            lastUpdateTimeRef.current = time
        }
        const deltaTime = time - lastUpdateTimeRef.current
        progressTimeRef.current += deltaTime
        if (progressTimeRef.current > speed) {
            dispatch(moveDown())
            progressTimeRef.current = 0
        }
        lastUpdateTimeRef.current = time

    }

    useEffect(() => {
        requestRef.current = requestAnimationFrame(update)
        return () => cancelAnimationFrame(requestRef.current)
    }, [isRun, speed]);

    const gridSquares = grid.map((rowArray, row) => {
        return rowArray.map((square, col) => {
            const blockX = col - x
            const blockY = row - y
            let color = square

            if (blockX >= 0 && blockX < block.length && blockY >= 0 && blockY < block.length) {
                color = block[blockY][blockX] === 0 ? color : blockColor
            }
            const k = row * grid[0].length + col;
            return <GridSquareComponent
                key={k}
                color={color} />
        })
    });

    return (
        <div className='grid-board'>
            {gridSquares}
        </div>
    )
}