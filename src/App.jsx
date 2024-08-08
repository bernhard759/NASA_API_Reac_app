import React, { useState, useEffect } from "react"
import HttpClient from "./HttpClient"

const App = () => {
  const [apod, setApod] = useState({})

  useEffect(() => {
    // Make request
    HttpClient.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, [])

  // Markup
  return (
    <div style={{ maxWidth: 1000, padding: 30, margin: "0 auto" }}>
      <h1>NASA API</h1>
      {/*Picture of the day*/}
      <h2>Astronomy Picture of the Day</h2>
      {apod && (
        <article>
          <header>
            {apod.title} - <i>{apod.date}</i>
          </header>
          <img src={apod.url} alt="APOD" width="800" height="auto" />
          <p>{apod.explanation}</p>
          <pre
            style={{
              overflowX: "auto",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          >
            <hr />
            {JSON.stringify(apod, null, 2)}
          </pre>
        </article>
      )}
    </div>
  )
}

export default App
