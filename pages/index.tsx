import type {NextPage} from 'next';
import Link from 'next/link';
import Head from 'next/head';

import {BlogPosts} from '../data/blog-metadata';
import Layout from '../components/layout';


const Index: NextPage = () => {
  return <Layout>
    <>
    <Head>
      <title>kienankb</title>
      <meta property="og:title" content="kienankb" key="title" />
      <meta name="description" content="He's just zis guy, you know" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>posts!</div>
    {BlogPosts.sort((a, b) => {
      return a.publishDate < b.publishDate ? 1 : -1;
    }).map((post) => {
      return <div key={post.slug}>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </div>;
    })}
    </>
  </Layout>;
}

export default Index;