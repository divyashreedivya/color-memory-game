import React, { useEffect, useState } from "react";
import Scoreboard from "./Scoreboard";
import CardBoard from "./CardBoard";
import ColorCards from "./Colors";

const CardGame = ()=>{
    const [score, setScore] = useState(0);
    const [bestscore, setBestscore] = useState(0);
    const [cards, setCards] = useState(ColorCards);
    const [win, setWin] = useState("none");
    
    const selectCard = (name)=>{
        let updatedCards = cards.map((card) => {
            if(card.colorName === name){
                return {...card, selected: !card.selected};
            }
            return card;
        })
        setCards(updatedCards);
        setScore(score+1);
    }
    
    const reset = ()=>{
        setScore(0);
        let initialCards = cards.map((card)=>{
            return {...card,selected: false}
        });
        setCards(initialCards);
        setWin("none");
    }
    const winmsg = ()=>{
        setWin("block");
    }

    useEffect(()=>{
    if(bestscore < score){
        setBestscore(score);
    }
    if(score === 20){
       winmsg();
       setScore(0);
    }
    },[score,bestscore]);
    
    const winstyle ={
        display : `${win}`
    };

    return(
        <div>
            <Scoreboard score={score} bestScore={bestscore}></Scoreboard>
            <hr></hr>
            <h1 className="win" style={winstyle}>Congratulations!!</h1>
            <p className="again" style={winstyle} onClick={reset}>Play again!</p>
            <CardBoard 
            cards={cards}
            selectCard={selectCard}
            reset = {reset}
            ></CardBoard>
        </div>
    )
}

export default CardGame;