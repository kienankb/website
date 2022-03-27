import BlogPost from '../../components/blog';

import {useRouter} from 'next/router';
import type {NextPage} from 'next';

const BlogPage: NextPage = () => {
  const router = useRouter();
  let {slug} = router.query;
  // avoid the slug being an array
  slug = Array.isArray(slug) ? undefined : slug;
  return <BlogPost slug={slug} />;
}

export default BlogPage;