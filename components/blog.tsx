import ErrorPage from 'next/error';
import Head from 'next/head';

import {BlogPosts, BlogMetadata} from "../data/blog-metadata";
import Layout from './layout';


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
    <Layout>
      <>
        <h1>{postMetadata?.title}</h1>
        {postMetadata?.content}
      </>
    </Layout>
  </>);
}

export default BlogPost;