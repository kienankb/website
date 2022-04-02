import {useRouter} from 'next/router';
import type {NextPage} from 'next';

import BlogPost from '../../components/blog';
import Layout from '../../components/layout';


const BlogPage: NextPage = () => {
  const router = useRouter();
  let {slug} = router.query;
  // avoid the slug being an array
  slug = Array.isArray(slug) ? undefined : slug;
  return <Layout>
    <BlogPost slug={slug} />
  </Layout>;
}

export default BlogPage;