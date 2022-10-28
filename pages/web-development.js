import { WebPortfolio } from '../lib/web-development'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function WebDevelopment() {
  return (
    <div className="VaroBoy__WebDevelopment">
      <Head>
        <title>Jakub Varinsky | Web Developer & Photographer</title>
      </Head>
      <Navbar/>
      <main>
        <div className="VaroBoy__container">
          <div className="VaroBoy__container-outer">
            {WebPortfolio.map((item) => {
                return (
                  <Link className="VaroBoy__container-link" href="/kok">
                    <div key={item.title} className="VaroBoy__container-inner">
                      <div className="VaroBoy__client-logo"> 
                        <Image width={100} height={100} layout="responsive" src={item.imgUrl} alt={item.title}/>    
                      </div>
                      <div className="VaroBoy__client-name">  
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
