import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  onst [message, setMessage] = useState("");
  useEffect(() => {
    fetch("https://https://orange-tree-06961b703.5.azurestaticapps.net/api/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  return (
    <>
      <div>
        <h1>Message: {message}</h1>
      </div>
    </>
  )
}

export default App
