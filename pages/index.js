import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';


export default function Home() {
  return (
    <div className="container">
      <Navbar/>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="/static/scramble.js"></script>
      </Head>
      <div className="home">
      <main className={styles.main}>
      <div className="welcome-container">
        <video autoPlay loop src="/video/logo-efect.mp4"/>
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
