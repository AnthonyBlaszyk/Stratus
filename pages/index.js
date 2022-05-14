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
            <h2>Une identité visuelle à votre image</h2>
          </div>
        </a>

        <div id='categories' >

          <div className="categorie realisation">
            <p className="categoryTitle">Nos réalisations</p>
            <div className="categoryText">
              <span className="trait"></span>
              <p >Retrouvez ici toutes nos réalisations afin d'avoir un aperçu de nos compétences</p>
            </div>
          </div>

          <div className="categorie equipe">
            <p className="categoryTitle">L'équipe</p>
            <div className="categoryText">
              <span className="trait"></span>
              <p >Retrouvez ici toutes nos réalisations afin d'avoir un aperçu de nos compétences</p>
            </div>
          </div>

          <div className="categorie competences">
            <p className="categoryTitle">Notre façon de faire</p>
            <div className="categoryText">
              <span className="trait"></span>
              <p >Retrouvez ici toutes nos réalisations afin d'avoir un aperçu de nos compétences</p>
            </div>
          </div>

          <div className="categorie tarif">
            <p className="categoryTitle">Tarif pack abonnement</p>
            <div className="categoryText">
              <span className="trait"></span>
              <p >Retrouvez ici toutes nos réalisations afin d'avoir un aperçu de nos compétences</p>
            </div>

          </div>
          <div className="categorie contact">
            <p className="categoryTitle">Contact</p>
            <div className="categoryText">
              <span className="trait"></span>
              <p >Retrouvez ici toutes nos réalisations afin d'avoir un aperçu de nos compétences</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
