import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState("");
  function fetchMessage(){
    fetch("https://orange-tree-06961b703.5.azurestaticapps.net/api/hello")
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
