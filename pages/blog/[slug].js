import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from "react";
import { getAllPostsWithSlug, getPost } from '../../lib/api';
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
                        <div className="VaroBoy__side-bar">
                            <img src="/img/mocks/google-ad-mockup.png" alt="" />
                        </div>
                        <div className="VaroBoy__content">
                            <Link href="/blog">
                                <a className="VaroBoy__btn-back"><span>{`<`} </span>Back to articles</a>
                            </Link>
                            <article className="VaroBoy__content-container">
                                <h1>{postData.title}</h1>
                                <p className="VaroBoy__date">
                                    {formatDate(postData.date)}
                                </p>
                                <div
                                    dangerouslySetInnerHTML={{ __html: postData.content }}
                                />
                            </article>
                        </div>
                        <div className="VaroBoy__side-bar">
                            <div className="VaroBoy__side-bar-container">

                            </div>
                        </div>
                    </div>
                )}
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