


import "./cards.css";




export default function Cards( {cards, onClick} ){
    return (
        <div className = "grid">
        {cards.map((card)=> (
            <div key = {cards.id} className = "card" onClick={() => onClick(card.id)}>
                <img src={card.img} alt={card.name} />
                {/* <h1>{cards.name}</h1>  */}
                {/* fix the above line of code as well not showing name on DOM  */}
            </div>
        ))}
        </div>
    );
} 

