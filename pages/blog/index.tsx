import type {NextPage} from 'next';
import Link from 'next/link';
import Head from 'next/head';

import {BlogPosts} from '../../data/blog-metadata';
import Layout from '../../components/layout';


const BlogIndex: NextPage = () => {
  return <Layout>
    <>
    <Head>
      <title>Blog</title>
    </Head>
    <div>posts!</div>
    {BlogPosts.sort((a, b) => {
      return a.publishDate < b.publishDate ? 1 : -1;
    }).map((post) => {
      return <div key={post.slug}>
        <Link href={`blog/${post.slug}`}>{post.title}</Link>
      </div>;
    })}
    </>
  </Layout>;
}

export default BlogIndex;