import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="/js/tagcanvas.min.js" type="text/javascript"></script>
        <script src="/js/tagcanvas-run.js" type="text/javascript"></script>
      </Head>

      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to our demo blog!</h1>
        <p>
          You can find more articles on the{' '}
          <Link href='/blog'>
          <a>blog articles page</a>
          </Link>
        </p>
        <h1>TagCanvas example page</h1>
    <div id="myCanvasContainer">
      <canvas width="600" height="600" id="myCanvas">
        <p>Anything in here will be replaced on browsers that support the canvas element</p>
      </canvas>
    </div>
    <div id="tags">
      <ul>
        <li><a href="http://www.google.com" target="_blank">jQuery</a></li>
        <li><a href="/fish">JavaScript</a></li>
        <li><a href="/chips">NextJS</a></li>
        <li><a href="/salt">ReactJS</a></li>
        <li><a href="/vinegar">SASS</a></li>
        <li><a href="/vinegar">HTML</a></li>
        <li><a href="/vinegar">Git</a></li>
        <li><a href="/vinegar">WordPress</a></li>
        <li><a href="/vinegar">PHP</a></li>
        <li><a href="/vinegar">Photoshop</a></li>
        <li><a href="/vinegar">Illustrator</a></li>
      </ul>
    </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
