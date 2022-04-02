import ErrorPage from 'next/error';
import Head from 'next/head';

import {BlogPosts, BlogMetadata} from '../data/blog-metadata';

import styles from './styles/BlogPost.module.css';


const getBlogPostDataFromSlug = (slug: string | undefined): BlogMetadata | undefined => {
  return BlogPosts.find((postData: BlogMetadata) => postData.slug === slug);
}

type BlogPostProps = {
  slug: string | undefined,
};

const BlogPost = ({slug}: BlogPostProps) => {
  const postMetadata = getBlogPostDataFromSlug(slug);
  if (slug === undefined || postMetadata === undefined) {
    return <ErrorPage statusCode={404} />
  }
  return (<>
    <Head>
      <title>{postMetadata?.title}</title>
    </Head>
    <div className={styles.content}>
      <h1>{postMetadata?.title}</h1>
      {postMetadata?.content}
    </div>
  </>);
}

export default BlogPost;