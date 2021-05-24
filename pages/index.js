import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import dynamic from 'next/dynamic';

import Video from '../components/homepage/video';


export default function Home() {
  return (
    <div className="container">
      <Navbar/>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home">
      <main className={styles.main}>
      <div className="welcome-container">
        <Video/>
      </div>
      <div className="neck-image"></div>
        <div className="name">
          <h2>Jakub</h2>
          <h2>Varinsky</h2>
        </div>
      </main>

      <footer>
      </footer>
      </div>
    </div>
  )
}
