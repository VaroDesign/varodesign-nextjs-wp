import Head from 'next/head';
import Navbar from '../../components/Navbar';

import { getAllPosts, getPhotographyPosts } from '../../lib/api';

const Blog = ({ allPosts, photoPosts }) => (
  <div className="VaroBoy__Blog">
    <Head>
    <title>Jakub Varinsky | Blog</title>
    </Head> 
    <Navbar/>
    <main>
    <div className="VaroBoy__container">
      <div className="VaroBoy__container-inner">
        <div className="VaroBoy__headline">
            <h1>Blog</h1>
            <p>I like to blog about the stuff I'm interested in. Hopefully you'll find some of it interesting too.</p>
        </div>
        <div className="VaroBoy__Blog-categories">
          <div className="VaroBoy__Blog-categories-box">
            <h2>👩‍💻 Tech</h2>
            <ul>
              {allPosts.map(({ node }) => (
                <li key={node.id}>
                  <a href={`/blog/${node.slug}`}><h3>{node.title}</h3></a>
                </li>
              ))}
              <li><a href="/blog/tech"><b>All Tech articles <span>{`>`}</span></b></a></li>
            </ul>
          </div>
          <div className="VaroBoy__Blog-categories-box">
            <h2>💻 Web-Development</h2>
            <ul>
              {photoPosts.map(({ node }) => (
                <li key={node.id}>
                  <a href={`/blog/${node.slug}`}><h3>{node.title}</h3></a>
                </li>
              ))}
              <li><a href="/blog/web-development"><b>All Web-Development articles <span>{`>`}</span></b></a></li>
            </ul>
          </div>
          <div className="VaroBoy__Blog-categories-box">
            <h2>💸 Hustle</h2>
            <ul>
              {allPosts.map(({ node }) => (
                <li key={node.id}>
                  <a href={`/blog/${node.slug}`}><h3>{node.title}</h3></a>
                </li>
              ))}
              <li><a href="/blog/web-development"><b>All Hustle articles <span>{`>`}</span></b></a></li>
            </ul>
          </div>
          <div className="VaroBoy__Blog-categories-box">
            <h2>📰 Other</h2>
            <ul>
              {allPosts.map(({ node }) => (
                <li key={node.id}>
                  <a href={`/blog/${node.slug}`}><h3>{node.title}</h3></a>
                </li>
              ))}
              <li><a href="/blog/web-development"><b>All Other articles <span>{`>`}</span></b></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </main>
  </div>
);
export default Blog

export async function getServerSideProps() {
    const allPosts = await getAllPosts();
    const photographyPosts = await getPhotographyPosts();
    return {
      props: {
        allPosts: allPosts.edges,
        photoPosts: photographyPosts.edges
      }
    };
  }