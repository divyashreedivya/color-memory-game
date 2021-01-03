import React from "react";

const Scoreboard = (props)=>{
    const {score, bestScore} = props;
    return(
        <div className="scoreboard">
            <h3 className="currentscore">Current Score : {score}</h3>
            <h3 className="bestscore">Best Score : {bestScore}</h3>
        </div>
    )
}

export default Scoreboard;