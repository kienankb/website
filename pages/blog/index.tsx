import type {NextPage} from 'next';
import Link from 'next/link';

import {BlogPosts} from '../../data/blog-metadata';


const BlogIndex: NextPage = () => {
  return <>
    <div>posts!</div>
    {BlogPosts.sort((a, b) => {
      return a.publishDate < b.publishDate ? 1 : -1;
    }).map((post) => {
      return <div key={post.slug}>
        <Link href={`blog/${post.slug}`}>{post.title}</Link>
      </div>;
    })}
  </>;
}

export default BlogIndex;