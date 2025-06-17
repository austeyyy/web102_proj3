import React from 'react'
import { useState } from 'react'

const Card = ({question, answer, difficulty, flipped, setFlipped}) => {
    

    const handleFlip = () => {

        if (flipped == false) {
            setFlipped(true)
        }else{
            setFlipped(false)
        }

    }


  return (
    <>
    <div className='card' style={{backgroundColor: `${difficulty}`}}onClick={handleFlip}>
        {/* if flipped, display answer, else display question */}
        <h4 className='card-text'>{flipped ? answer : question}</h4>  
    </div>
    
   </>
  )
}

export default Card