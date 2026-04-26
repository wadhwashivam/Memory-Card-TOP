import aamir from "../assets/images/aamir.jpg";
import akshay from "../assets/images/akshay.jpg";
import bahubali from "../assets/images/bahubali.jpg";
import bobby from "../assets/images/bobby.jpg";
import kalki from "../assets/images/kalki.jpg";
import krrish from "../assets/images/krrish.jpg";
import pushpa from "../assets/images/pushpa.jpg";
import ranbir from "../assets/images/ranbir.jpg";
import ranveer from "../assets/images/ranveer.jpg";
import rocky from "../assets/images/rocky.jpg";
import salman from "../assets/images/salman.jpg";
import sharukh from "../assets/images/sharukh.jpg";


import "./cards.css";


const cards = [
    {id: 1, img: aamir, name: "aamir"},
    {id: 2, img: akshay, name: "akshay"},
    {id: 3, img: bahubali, name: "bahubali"},
    {id: 4, img: bobby, name: "bobby"},
    {id: 5, img: kalki, name: "kalki"},
    {id: 6, img: krrish, name: "krrish"},
    {id: 7, img: pushpa, name: "pushpa"},
    {id: 8, img: ranbir, name: "ranbir"},
    {id: 9, img: ranveer, name: "ranveer"},
    {id: 10, img: rocky, name: "rocky"},
    {id: 11, img: salman, name: "salman"},
    {id: 12, img: sharukh, name: "sharukh"}
]

export default function Cards(){
    return (
        <div className = "grid">
        {cards.map((card)=> (
            <div key = {cards.id} className = "card">
                <img src={card.img} alt={card.name} />
                {/* <h1>{cards.name}</h1>  */}
                {/* fix the above line of code as well not showing name on DOM  */}
            </div>
        ))}
        </div>
    );
} 

