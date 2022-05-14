import Head from 'next/head'
import React from "react";

function UseReloadOnResize() {
  React.useEffect(() => {
    function handleResize() {
      location.reload()
    }
    window.addEventListener('resize', handleResize)
  })
}

export default function Home() {
  UseReloadOnResize()

  return (
    <div >
      <Head>
        <title>Stratus</title>
        <meta name="description" content="Stratus website (to be determined)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="backgroud"></div>

        <a href="#categories">
          <div className='homePage'>
            <h1>Stratus</h1>
            <h2>website still in progress, please come back later</h2>
          </div>
        </a>

        <div id='categories' >
          <div className="categorie">
            <p>Categorie 1</p>
          </div>
          <div className="categorie">
            <p>Categorie 2</p>
          </div>
          <div className="categorie">
            <p>Categorie 3</p>
          </div>
          <div className="categorie">
            <p>Categorie 4</p>
          </div>
          <div className="categorie">
            <p>Categorie 5</p>
          </div>

        </div>
      </main>
    </div>
  )
}
