import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState("");
  function fetchMessage(){
    console.log(import.meta.env.VITE_BACKEND_URL);
    console.log(import.meta.env.BACKEND_URL);
    
    console.log(process.env.BACKEND_URL);
    console.log(process.env.VITE_BACKEND_URL);

    fetch(process.env.BACKEND_URL + "/api/hello")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Error fetching data", error));
  }
  return (
    <>
      <div>
        <button onClick={fetchMessage}>
          Fetch Message
       </button>
       <h1>Message: {message}</h1>
      </div>
    </>
  )
}

export default App
