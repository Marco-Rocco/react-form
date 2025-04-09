import { useState } from 'react'
import articles from "../data/articles"



function App() {

  return (
    <>
      <ul>
        {articles.map((article) => <li>{article}</li>)}
      </ul>
    </>
  )
}

export default App
