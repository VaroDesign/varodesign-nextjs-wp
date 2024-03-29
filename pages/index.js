import Head from 'next/head';
import Navbar from '../components/Navbar';
import VaroLogo from "../public/img/VaroBoy-Logo-alt.svg";

export default function Home() {
  return (
    <div className="VaroBoy__Home">
      <Head>
        <title>Jakub Varinsky | Web Developer & Photographer</title>
      </Head>
      <Navbar/>
      <main>
        <div className="VaroBoy__container">
            <div className="VaroBoy__container-inner">
              <div className="VaroBoy__logo">
                <VaroLogo/>
              </div>
              <div className="VaroBoy__welcome-text">
                    <h1>
                      Welcome! I'm Jakub Varinsky, web-developer & photographer based in Sydney. <br/>
                      I love to help you with your next project.
                    </h1>
              </div>
            </div>
            <div className="VaroBoy__container-inner">
                <div className="VaroBoy__bg-img"></div>
            </div>
        </div>
      </main>
    </div>
  )
}