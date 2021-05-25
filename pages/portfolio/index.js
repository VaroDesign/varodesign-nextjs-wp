import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function Portfolio() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <div className="portfolio">
      <Head>
      <title>Jakub Varinsky | Portfolio</title>
      </Head> 
      <div className="container">
        <Navbar/>
        <Link href='/photography'>
        <div className="split left">
          <div className={hovered ? 'background-image active' : 'background-image'} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
          <div className="centered">
            <h2>PHOTOGRAPHY</h2>
            <p>Some text.</p>
          </div>
          </div>
        </div>
        </Link>
        <div className="split right">
          <div className="centered">
            <h2>WEB DEVELOPMENT</h2>
            <p>Some text here too.</p>
          </div>
        </div>
      </div>
    </div>
  )
}