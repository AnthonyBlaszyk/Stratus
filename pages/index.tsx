import Head from 'next/head'
import React from "react";
import {categories} from "../utilities/categories"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  return (
    <div >
      <Head>
        <title>Stratus</title>
        <meta name="description" content="Stratus, une identité visuelle à votre image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="backgroud">
          <div id="homePage">   
            <a href="#categories">
            <div className='homePage'>
              <h1>Stratus</h1>
              <h2>Une identité visuelle à votre image</h2>
            </div>
          </a>

          </div>
       

          <div id='categories'>
            {
              categories.map((category) => {
                return (
                  <div key={category.slug} className={`category bg-${category.color}-hover`}>
                    <h3>{category.name}</h3>
                      <div>
                        <span className='trait'></span>
                        <p className='category-txt'>{category.desc}</p>
                      </div>              
                  </div>
                )
              })
            }
          </div>
        </div>


      </main>
    </div>
  )
}
