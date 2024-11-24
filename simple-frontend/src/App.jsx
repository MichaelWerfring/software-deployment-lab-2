import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("https://orange-tree-06961b703.5.azurestaticapps.net/api/hello")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  return (
    <>
      <div>
        <h1>Message:</h1>
        <h2>{message}</h2>
      </div>
    </>
  )
}

export default App
