import React from "react";
import Card from "./Card";
import data from "../../public/data";

export default function MainContent(){
    const cards = data.map(item => {
        return (
            <div>
                <Card
                    key={item.id}
                    item={item}
                    
                />
                <hr className="divider"/>
            </div>
                
        )
    })   
    // console.log(cards)
    return(
        <section className="main">
            {/* <Card /> */}
            {cards}
        </section>
    )
}