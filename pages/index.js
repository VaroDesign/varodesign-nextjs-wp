import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/Navbar';

import Video from '../components/homepage/video';

export default function Home() {
  return (
    <div className="VaroDesign">
      <Head>
        <title>Jakub Varinsky | Web Developer & Photographer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main>
        <div className="varo__container">
            <div className="varo__inner-container">
                <div className="varo__logo-video">
                    <Video/>
                    <div className="varo__welcome-text">
                      <h1>
                        Welcome! I'm Jakub Varinsky, web-developer & photographer based in Sydney. <br/>
                        I love to help you with your next project.
                      </h1>
                    </div>
                </div>
            </div>
            <div className="varo__inner-container">
                <div className="varo__bg-img"></div>
            </div>
        </div>
        <div className="varo__bg-img"></div>
      </main>
      </div>
  )
}
