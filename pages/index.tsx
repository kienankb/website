import type {NextPage} from 'next';
import Head from 'next/head';

import {BlogPosts} from '../data/blog-metadata';
import {Tags} from '../data/tags';
import BlogCard from '../components/blogcard';
import Layout from '../components/layout';
import { useState } from 'react';

import styles from '../components/styles/BlogCard.module.css';


const Index: NextPage = () => {
  const [selectedTag, setSelectedTag] = useState<null | string>(null);

  return <Layout>
    <>
    <Head>
      <title>kienankb</title>
      <meta property="og:title" content="kienankb" key="title" />
      <meta name="description" content="He's just zis guy, you know" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.tagSelector}>by tag: <span key='all' className={styles.tagSelectorChoice} onClick={() => setSelectedTag(null)}>all</span>{Tags.map(tag => <span key={tag.name} className={styles.tagSelectorChoice} onClick={() => setSelectedTag(tag.name)}>{tag.name}</span>)}</div>
    {BlogPosts.filter((post) => {
      return selectedTag === null || post.tagNames.includes(selectedTag);
    }).sort((a, b) => {
      return a.publishDate < b.publishDate ? 1 : -1;
    }).map((post) => <BlogCard key={post.slug} post={post} />)}
    </>
  </Layout>;
}

export default Index;
