import {GridSquareComponent} from "../GridSquare/GridSquareComponent";
import {useSelector} from 'react-redux';
import {shapes} from "../../utils";


export const  NextBlockComponent = () => {
    const nextShape = useSelector((state) => state.game.nextShape)
    const block = shapes[nextShape][0]
    const grid = block.map((rowArray, row) => {
        return rowArray.map((square, col) => {
            return <GridSquareComponent key={`${row}${col}`} color={square === 0 ? 0 : nextShape} />
        })
    })
    return (
        <div className="next-block">
            {grid}
        </div>
    )
}