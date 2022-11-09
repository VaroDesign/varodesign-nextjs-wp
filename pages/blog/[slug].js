import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from "react";

// data
import { getAllPostsWithSlug, getPost } from '../../lib/api';

// styles
import Navbar from '../../components/Navbar';

export default function Post({ postData }) {
    useEffect(function mount() {
        if (window.location.href.indexOf('blog') > -1) {
          document.getElementsByClassName('blog')[0].attributes[0].value="/icons/blog-active.svg";
      }
      });
    const router = useRouter();

    if (!router.isFallback && !postData?.slug){
        return <p>hmm... looks like and error</p>;
    }

    const formatDate = date => {
        const newDate = new Date(date);

        return `${newDate.getDate()}/${
            newDate.getMonth() + 1
        }/${newDate.getFullYear()}`;
    };

    return (
        <div className="VaroBoy__Article">
            <Head>
                <title>{postData.title}</title>
            </Head>
            <Navbar/>
            <main>
                {router.isFallback ? (
                    <h2>Loading...</h2>
                ) : (
                    <div className="VaroBoy__container">
                        <div className="VaroBoy__container-inner">
                            <div className="VaroBoy__container--content">
                                <div className="VaroBoy__container--content-outer">
                                    <div className="VaroBoy__container--content-inner">
                                        <article className="{blogStyles.article}">
                                            <div className="{blogStyles.postmeta}">
                                                <h1 className="{styles.title}">{postData.title}</h1>
                                                <p>{formatDate(postData.date)}</p>
                                            </div>
                                            <div 
                                                className='post-content content'
                                                dangerouslySetInnerHTML={{ __html: postData.content }}
                                            />
                                        </article>
                                    </div>
                                    <div className="VaroBoy__container--content-inner">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )}
                <p>
                    <Link href="/blog">
                        <a>back to articles</a>
                    </Link>
                </p>
            </main>
        </div>
    )
}

export async function getServerSidePaths() {
    const allPosts = await getAllPostsWithSlug();

    return {
        paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
        fallback: false
    };
}

export async function getServerSideProps({ params }) {
    const data = await getPost(params.slug);

    return {
      props: {
        postData: data.post
      }
    };
  }