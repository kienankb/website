import Link from 'next/link';

import {BlogMetadata} from '../data/blog-metadata';

type BlogCardProps = {
  post: BlogMetadata,
};

const BlogCard = ({post}: BlogCardProps) => {
  return <p><Link href={`/blog/${post.slug}/`}>{post.title}</Link></p>;
}

export default BlogCard;