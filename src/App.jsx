import { useState } from 'react'
import articles from "../data/articles"



function App() {
  const [newItem, setNewItem] = useState("")

  const handleChange = event => {
    setNewItem(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log('cliccato');

    const updatedArticles = [...articles, newItem];
    setNewItem(updatedArticles)
  }

  return (
    <>
      <h1>panetteria stock</h1>
      <ul>
        {articles.map((article) => <li key={article.id}>{article.title}</li>)}
      </ul>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newItem} />
        <p>{newItem}</p>
        <button>add new articles</button>
      </form>

    </>
  )
}

export default App
