import {useRouter} from 'next/router';
import type {NextPage} from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../layout/layout';

import {BlogPosts, BlogMapping} from '../../data/blog-metadata';
import {getBlogPostDataFromSlug} from '../../util/blog-mapping';

const BlogPage: NextPage = () => {
  const router = useRouter();
  const {slug} = router.query;
  const postData: BlogMapping | undefined = getBlogPostDataFromSlug(slug);
  return <div>
    <Head>
      <title>{postData?.title}</title>
    </Head>
    <Layout><div>{postData?.content}</div></Layout>
  </div>;
}

export default BlogPage;