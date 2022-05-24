import React, { useState, useEffect } from 'react'

function Card() {
  const [advice, setAdvice] = useState("")
  const [addArray, setAdviceArray] = useState([])

  useEffect(() => {
    getAdvice()
  }, [])

  const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice').then(res => res.json()).then((data) => {
      setAdvice( data.slip)})
  }


    return (
      <div className="h-screen flex justify-center items-center bg-blue-900">
        <div className="bg-blue-600 text-center p-12 text-white">
            <h1 className="text-inherit tracking-widest"> Advice {advice.id}  </h1>
            <p className="text-inherit text-xl mt-4">{advice.advice}</p>
            <button onClick={getAdvice} className="px-4 py-2 bg-green-600 rounded mt-4 font-bold uppercase">Click Me</button>
        </div>
      </div>
    );
  }
  
  export default Card;
  