import { useState } from 'react'
import initialStock from "../data/initialStock"



function App() {
  const [newItem, setNewItem] = useState("")
  const [articles, setArticles] = useState(initialStock)

  const handleChange = event => {
    setNewItem(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log('cliccato');

    const updatedArticles = [...articles, {
      id: articles.length + 1, title: newItem
    }];
    setArticles(updatedArticles)

    console.log(updatedArticles);
    setNewItem("")
  }

  const removeItem = (articleToDelete) => {
    const updatedArticles = articles.filter((article) => {
      return articleToDelete !== article.id
    });
    setArticles(updatedArticles)
  }

  return (
    <>
      <h1>panetteria stock</h1>
      <ul>
        {articles.map((article) =>
          <li key={article.id}>
            {article.title}
            <button onClick={() => removeItem(article.id)}>eliminate item</button>
          </li>)}
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
