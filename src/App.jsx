import { useState } from 'react'
import articles from "../data/articles"



function App() {
  const [newItem, setNewItem] = useState("")

  const handleChange = (event) => {
    setNewItem(event.target.value);
  }
  return (
    <>
      <h1>panetteria stock</h1>
      <ul>
        {articles.map((article, index) => <li key={index}>{article}</li>)}
      </ul>

      <form action="">
        <input type="text" onChange={handleChange} value={newItem} />
        <p>{newItem}</p>
        <button>add new articles</button>
      </form>

    </>
  )
}

export default App
