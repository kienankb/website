import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Link from 'next/link';

import {BlogMapping, getBlogPostDataFromSlug} from '../../util/blog-mapping';

const BlogPage: NextPage = () => {
  const router = useRouter();
  const {slug} = router.query;
  const postData: BlogMapping | undefined = getBlogPostDataFromSlug(slug);
  return <div>
    <Link href="/"><a>home</a></Link>
    <div>{postData?.content}</div>
  </div>;
}

export default BlogPage;