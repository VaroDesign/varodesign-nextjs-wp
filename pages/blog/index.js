import Head from 'next/head';
import Link from 'next/link';

import styles from '../../styles/Home.module.css';
import blogStyles from '../../styles/Blog.module.css';
import Navbar from '../../components/Navbar';

import { getAllPosts } from '../../lib/api';

const Blog = ({ allPosts: { edges } }) => (
    <div className={styles.container}>
      <Head>
        <title>Blog articles page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <h1 className={styles.title}>Latest blog articles</h1>
        <hr />
        <section>
          {edges.map(({ node }) => (
            <div className={blogStyles.listitem} key={node.id}>
              <div className={blogStyles.listitem__thumbnail}>
                <figure>
                  <img
                    height={150}
                    src={node.extraPostInfo.thumbImage.mediaItemUrl}
                    alt={node.title}
                  />
                </figure>
              </div>
              <div className={blogStyles.listitem__content}>
                <h2>{node.title}</h2>
                <p>{node.extraPostInfo.authorExcerpt}</p>
                <Link href={`/blog/${node.slug}`}>
                  <a>Read more</a>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
  
export default Blog

export async function getServerSideProps() {
    const allPosts = await getAllPosts();
    return {
      props: {
        allPosts
      }
    };
  }