import React from "react";

const Card = (props)=>{
    const {card, selectCard, reset} = props;
    const cardstyle = {
        backgroundColor : `${card.color}`
    };

    const clickCard = ()=>{
        if(card.selected){
            reset();
        }
        else{
            selectCard(card.colorName);
        }
    }
    return(
        <div className="card" onClick={clickCard} style={cardstyle}>
            <p>{card.colorName}</p>
        </div>
    )
}

export default Card;