import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

const cardContent = [
  {
    "question": "🧙‍♂️🧹⚡",
    "answer": "Harry Potter",
    "difficulty": "#46af3f85"
  },
  {
    "question": "🦁👑",
    "answer": "The Lion King",
    "difficulty": "#46af3f85"
  },
  {
    "question": "🐟🌊🔍",
    "answer": "Finding Nemo",
    "difficulty": "#46af3f85"
  },
  {
    "question": "🚢🧊❤️",
    "answer": "Titanic",
    "difficulty": "#e9cc5777"
  },
  {
    "question": "👽📞🏠",
    "answer": "E.T. the Extra-Terrestrial",
    "difficulty": "#e9cc5777"
  },
  {
    "question": "👸🐸💋",
    "answer": "The Princess and the Frog",
    "difficulty": "#e9cc5777"
  },
  {
    "question": "🐘🎪🤹‍♂️",
    "answer": "Dumbo",
    "difficulty": "#e9cc5777"
  },
  {
    "question": "🚗💨💥",
    "answer": "Fast & Furious",
    "difficulty": "#c03a3a"
  },
  {
    "question": "🦖🏝️🧬",
    "answer": "Jurassic Park",
    "difficulty": "#c03a3a"
  },
  {
    "question": "🧠💊🔵🔴",
    "answer": "The Matrix",
    "difficulty": "#c03a3a"
  }
]







function App() {
  const [count, setCount] = useState(0)
  const [flipped, setFlipped] = useState(false);
  const[guess, setGuess] = useState('')

  const handleNext = () => {
    setFlipped(false)
    if(count >= cardContent.length - 1){
      setCount(0)
    }else{
      setCount(count + 1)
    }

  }

  const handlePrev = () => {
    setFlipped(false)
    if(count <= 0){
      setCount(count + cardContent.length - 1)
    }else{
      setCount(count - 1)
    }
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    if (guess.toLowerCase() === cardContent[count].answer.toLowerCase()){
      alert("Correct! ✅")

    }else{
      alert("Incorrect. ❌")
    }

    setGuess('')
  }


  return (
    <div>
      <h1 style={{userSelect:'none'}}>🥸 Emoji Pictionary 🥸</h1>
      <h3 style={{userSelect:'none'}}>Guess the movie from emoji combos</h3>
      <h4 style={{userSelect:'none'}}> Card {count + 1}/10 </h4>

      <Card question={cardContent[count].question} answer={cardContent[count].answer} difficulty= {cardContent[count].difficulty} flipped={flipped} setFlipped={setFlipped} />

      <form onSubmit={handleSubmit} className='guess-container'>
        <label>
          Enter your guess:
          <input className="input-field" type="text" value = {guess} onChange= {(e) => {setGuess(e.target.value)}}/>
        </label>
        <button className='btn' type='submit'>Check Guess</button>
      </form>
      
      <div className='btn-container'>
        <button className='btn' onClick={handlePrev} style={{userSelect:'none'}}>←</button>
        <button className='btn' onClick={handleNext} style={{userSelect:'none'}}>→</button>
      </div>
      
      
    </div>
  )
}

export default App
