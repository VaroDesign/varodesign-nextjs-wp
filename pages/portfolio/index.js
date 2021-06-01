import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function Portfolio() {
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const toggleHoverLeft = () => setHoveredLeft(!hoveredLeft);
  const [hoveredRight, setHoveredRight] = useState(false);
  const toggleHoverRight = () => setHoveredRight(!hoveredRight);

  return (
    <div className="portfolio">
      <Head>
      <title>Jakub Varinsky | Portfolio</title>
      </Head> 
      <div className="container">
        <Navbar/>
        <Link href='/photography'>
        <div className="split left">
          <div className={hoveredLeft ? 'background-image active' : 'background-image'} onMouseEnter={toggleHoverLeft} onMouseLeave={toggleHoverLeft}>
            <div className="centered">
              <h2>PHOTOGRAPHY</h2>
              <p>Some text.</p>
            </div>
          </div>
        </div>
        </Link>
        <Link href='/web-development'>
        <div className="split right">
          <div className={hoveredRight ? 'background-image active' : 'background-image'} onMouseEnter={toggleHoverRight} onMouseLeave={toggleHoverRight}>
            <div className="centered">
              <h2>WEB DEVELOPMENT</h2>
              <p>Some text here too.</p>
            </div>
          </div>
        </div>
        </Link>
      </div>
    </div>
  )
}