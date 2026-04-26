import { useState } from 'react';
import './App.css'
import Cards from './Components/Cards';

function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState(new Set());

  function handleCardClick(id){
    if (clickedCards.has(id)){
      setBestScore(score);
      setScore(0);
      setClickedCards(new Set());
    }else{
      setScore((prev) => prev + 1);
      setClickedCards(prev => new Set(prev).add(id));
    }
  }


  return(
  <div className='app'>
    <h1>Memory Card Game</h1>
    <p>Score: {score} | Best Score: {bestScore}</p>
    <Cards onClick = {handleCardClick}/>
  </div>
  )
}

export default App
