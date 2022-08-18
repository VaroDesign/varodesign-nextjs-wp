import Link from 'next/link';
import Head from 'next/head'
import Navbar from '../components/Navbar';

import Video from '../components/homepage/video';

export default function Contact() {
  return (
    <div className="test">
      <Head>
        <title>Jakub Varinsky | Web Developer & Photographer</title>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/owl.carousel.min.js"></script>
        <script src="/js/timeline.js"></script>
        <script type="text/javascript" src="/js/tagcanvas.min.js"></script>
        <script type="text/javascript" src="/js/tagcanvas-run.js"></script>
        <link rel="stylesheet" href="/css/simple-line-icons.css"></link>
        <link rel="stylesheet" href="/css/owl.carousel.min.css"></link>
        <link rel="stylesheet" href="/css/timeline.css"></link>
      </Head>
      <Navbar/>
      <main className="VaroBoy-About">
                <div className="VaroBoy__container">
                    <div className="VaroBoy__container-inner">
                        <div className="headline">
                            <h2>About Me</h2>
                            <p>Check out my timeline story, skills, and technology that I use.</p>
                        </div>
                        <div className="VaroBoy__container__content">
                            <div className="VaroBoy__container__content-inner">
                                <div className="section-body">
                                    <div className="quick-timeline" data-source="json" data-items="5" data-style="3"
                                    data-loop="false">
                                    </div>
                                </div>
                            </div>
                            <div className="VaroBoy__container__content-inner">
                                <canvas width="700" height="600" id="VaroBoy__Tags">
                                    <p>Anything in here will be replaced on browsers that support the canvas element</p>
                                </canvas>
                            </div>
                            <div id="tags">
                                <ul>
                                    <li><a href="http://www.google.com" target="_blank">jQuery</a></li>
                                    <li><a href="/fish">JavaScript</a></li>
                                    <li><a href="/chips">NextJS</a></li>
                                    <li><a href="/salt">ReactJS</a></li>
                                    <li><a href="/vinegar">NunJucks</a></li>
                                    <li><a href="/vinegar">SASS</a></li>
                                    <li><a href="/vinegar">HTML</a></li>
                                    <li><a href="/vinegar">Git</a></li>
                                    <li><a href="/vinegar">WordPress</a></li>
                                    <li><a href="/vinegar">PHP</a></li>
                                    <li><a href="/vinegar">Photoshop</a></li>
                                    <li><a href="/vinegar">Illustrator</a></li>
                                    <li><a href="/vinegar">Canon 80d</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    </div>
  )
}
