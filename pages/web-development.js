import { WebPortfolio } from '../lib/web-development';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Head from 'next/head';

export default function WebDevelopment() {
  return (
    <div className="VaroDesign">
      <Head>
        <title>Jakub Varinsky | Web Developer & Photographer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main>
        <div className="varo-web__container">
          <div className="varo-web__outer-container">
            {WebPortfolio.map((item) => {
                return (
                    <div key={item.title} className="varo-web__inner-container">
                      <div className="varo-web__client-logo"> 
                        <img src={item.imgUrl} className="entry-title entry-title-portfolio" />    
                      </div>
                      <div className="varo-web__client-name">  
                        {item.title}
                      </div>
                    </div>
                )
            })}
          </div>
        </div>
      </main>
      </div>
  )
}
