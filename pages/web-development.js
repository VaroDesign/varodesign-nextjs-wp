import { WebPortfolio } from '../lib/web-development';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Head from 'next/head';

export default function WebDevelopment() {
  return (
    <div className="VaroDesign-WebDevelopment">
      <Head>
        <title>Jakub Varinsky | Web Developer & Photographer</title>
      </Head>
      <Navbar/>
      <main>
        <div className="varo__container">
          <div className="varo__container-outer">
            {WebPortfolio.map((item) => {
                return (
                  <Link className="varo__container-link" href="/kok">
                    <div key={item.title} className="varo__container-inner">
                      <div className="varo__client-logo"> 
                        <img src={item.imgUrl} alt={item.title} />    
                      </div>
                      <div className="varo__client-name">  
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                  </Link>
                )
            })}
          </div>
        </div>
      </main>
      </div>
  )
}
