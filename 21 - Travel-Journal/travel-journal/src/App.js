import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./components/data"

function App() {

  const cards = data.map(item =>{
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })


  return (
    <div className="grid h-screen place-items-center">
        <Header />
        {cards}
    </div>
    
  );
}

export default App;
