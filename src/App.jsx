import { useState } from 'react';
import './App.css'
import Cards from './Components/Cards';


import aamir from "/src/assets/images/aamir.jpg";
import akshay from "/src/assets/images/akshay.jpg";
import bahubali from "/src/assets/images/bahubali.jpg";
import bobby from "/src/assets/images/bobby.jpg";
import kalki from "/src/assets/images/kalki.jpg";
import krrish from "/src/assets/images/krrish.jpg";
import pushpa from "/src/assets/images/pushpa.jpg";
import ranbir from "/src/assets/images/ranbir.jpg";
import ranveer from "/src/assets/images/ranveer.jpg";
import rocky from "/src/assets/images/rocky.jpg";
import salman from "/src/assets/images/salman.jpg";
import sharukh from "/src/assets/images/sharukh.jpg";

const initialCards = [
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

function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState(new Set());
  const [cards,setCards] = useState(initialCards);

  function shuffleCards(){
    const shuffled = [...cards].sort(() => Math.random() - 0.5);    
    setCards(shuffled);
  }

  function handleCardClick(id){
    if (clickedCards.has(id)){
      setBestScore((prev) => Math.max(prev, score));
      setScore(0);
      setClickedCards(new Set());
    }else{
      setScore((prev) => prev + 1);
      setClickedCards(prev => new Set(prev).add(id));
      shuffleCards();
    }
  }
  
  return(
  <div className='app'>
    <h1>Memory Card Game</h1>

    <p>Score: {score} | Best Score: {bestScore}</p>
    {score === 12 && <h2>You won</h2>}
    <Cards cards = {cards} onClick = {handleCardClick}/>

  </div>
  )
}

export default App
