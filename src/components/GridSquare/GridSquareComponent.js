import React from "react";

export const GridSquareComponent = (props) => {
    const classes = `grid-square color-${props.color}`
    return <div className={classes}/>
}