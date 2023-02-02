import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter,setCounter] = useState(0);
  const [counter2,setCounter2] = useState(0);

  useEffect(() =>{
    // console.log("use effect has run");
    document.title= `You clicked ${counter} times`;
  }, [counter2]);

  function handleClick(){
    setCounter(counter+1);
    if(counter %2 == 0)
        setCounter2(counter);
  }
  return (
   <div className="App">
    <p>Your counter value is : {counter}</p>
    <button 
    onClick={() => {
      setCounter(counter +1);
    }}> 
    Counter</button>
   </div>
  );
}

export default App;
