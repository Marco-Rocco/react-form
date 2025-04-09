import { useState } from 'react'
import initialStock from "../data/initialStock"



function App() {
  const [newItem, setNewItem] = useState("")
  const [articles, setArticle] = useState(initialStock)

  const handleChange = event => {
    setNewItem(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log('cliccato');

    const updatedArticles = [...articles, {
      id: articles.length + 1, title: newItem
    }];
    setArticle(updatedArticles)

    console.log(updatedArticles);
    setNewItem("")
  }

  return (
    <>
      <h1>panetteria stock</h1>
      <ul>
        {articles.map((article) => <li key={article.id}>{article.title}</li>)}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newItem} />
        <p>{newItem}</p>
        <button>add new articles</button>
      </form>

    </>
  )
}

export default App
