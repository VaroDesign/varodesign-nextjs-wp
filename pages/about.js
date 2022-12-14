import Head from 'next/head'
import Navbar from '../components/Navbar';
import Script from 'next/script'

export default function About() {
  return (
    <div  className="VaroBoy__About">
      <Head>
        <title>Jakub Varinsky | Web Developer & Photographer</title>
        <script src="/js/jquery.min.js"></script>
        <script type="text/javascript" src="/js/tagcanvas.min.js"></script>
        <script type="text/javascript" src="/js/tagcanvas-run.js"></script>
        <link rel="stylesheet" href="/css/simple-line-icons.css"></link>
        <link rel="stylesheet" href="/css/owl.carousel.min.css"></link>
        <link rel="stylesheet" href="/css/timeline.css"></link>
      </Head>
      <Navbar/>
      <main>
        <div className="VaroBoy__container">
            <div className="VaroBoy__container-inner">
                <div className="VaroBoy__headline">
                    <h1>About Me</h1>
                    <p>Check out my timeline story, skills, and technology that I use.</p>
                </div>
                <div className="VaroBoy__container--content">
                    <div className="VaroBoy__container--content-inner">
                        <div className="section-body">
                            <div className="quick-timeline" data-source="json" data-items="5" data-style="3"
                            data-loop="false">
                            </div>
                        </div>
                    </div>
                    <div className="VaroBoy__container--content-inner">
                        <canvas width="700" height="600" id="VaroBoy__Tags">
                            <p>Anything in here will be replaced on browsers that support the canvas element</p>
                        </canvas>
                    </div>
                    <div id="tags">
                        <ul>
                            <li><a href="http://www.google.com" target="_blank">jQuery</a></li>
                            <li><a href="/fish">JavaScript</a></li>
                            <li><a href="/chips"><img  width={100} height={100} src="https://res.cloudinary.com/dwa1jtluu/image/upload/v1653464815/kenjimmy.me/html_sx3o4c.png" alt="html"/></a></li>
                            <li><a href="/salt">ReactJS</a></li>
                            <li><a href="/vinegar"><img width={100} height={100} src="https://res.cloudinary.com/dwa1jtluu/image/upload/v1653464815/kenjimmy.me/javascript_wpr45g.png" alt="javascript"/></a></li>
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
    <Script src="/js/timeline.js"/>
    <Script src="/js/owl.carousel.min.js"/>
    </div>
  )
}
