import React, {useEffect, useState} from "react"

function App() {

  const [backendData,setbackendData] = useState([{}])
  const [counter,setCounter] = useState(0)
  const [number,setNumber] = useState(0)

  useEffect(()=>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setbackendData(data)
      }
    )
    console.log("refreshing counter")
  },[])

  return (
    <div>
      {(!backendData.users) ? (
        <p>Loading...</p>
      ): (backendData.users.map((user,i)=>(
        <p key={i}>{user}</p>
      ))
      )}

      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <button onClick={() => setNumber(number + 1)}>{number}</button>

    </div>
  )
}

export default App

 