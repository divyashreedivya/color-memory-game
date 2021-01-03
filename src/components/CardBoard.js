import React, { useEffect } from "react";
import Card from "./Card";

const CardBoard = (props)=>{
    const {cards, selectCard, reset} = props;
    
    const shuffle = ()=>{
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        }

    useEffect(() => {
        shuffle();
    })

    return(
        <div className="card-grid">
            {cards.map((card) => {
                return <Card 
                card={card} 
                key={card.id}
                reset = {reset}
                selectCard = {selectCard}
                >
                </Card>
            })}
        </div>
    )
}

export default CardBoard;