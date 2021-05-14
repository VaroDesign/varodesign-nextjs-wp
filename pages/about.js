import Link from "next/link";
import Head from "next/head";

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="/static/tagcanvas.min.js"></script>
        <script type="text/javascript" src="/static/tagcanvas-run.js"></script>
      </Head>

      <main className="about">
        <h2>About Me</h2>
        <p>Check out my timeline story, skills, and technology that I use.</p>
        <div className="container-l">
          <div className="content-middle">sds</div>
        </div>
        <div className="container-r">
          <div className="content-middle">
            <div id="myCanvasContainer">
              <canvas width="700" height="700" id="myCanvas">
                <p>
                  Anything in here will be replaced on browsers that support the
                  canvas element
                </p>
              </canvas>
            </div>
            <div id="tags">
              <ul>
                <li>
                  <a href="http://www.google.com" target="_blank">
                    jQuery
                  </a>
                </li>
                <li>
                  <a href="/fish">JavaScript</a>
                </li>
                <li>
                  <a href="/chips">NextJS</a>
                </li>
                <li>
                  <a href="/salt">ReactJS</a>
                </li>
                <li>
                  <a href="/vinegar">NunJucks</a>
                </li>
                <li>
                  <a href="/vinegar">SASS</a>
                </li>
                <li>
                  <a href="/vinegar">HTML</a>
                </li>
                <li>
                  <a href="/vinegar">Git</a>
                </li>
                <li>
                  <a href="/vinegar">WordPress</a>
                </li>
                <li>
                  <a href="/vinegar">PHP</a>
                </li>
                <li>
                  <a href="/vinegar">Photoshop</a>
                </li>
                <li>
                  <a href="/vinegar">Illustrator</a>
                </li>
                <li>
                  <a href="/vinegar">Canon 80d</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
