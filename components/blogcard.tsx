import Link from 'next/link';

import {BlogMetadata} from '../data/blog-metadata';

import styles from './styles/BlogCard.module.css';

type BlogCardProps = {
  post: BlogMetadata,
};

const BlogCard = ({post}: BlogCardProps) => {
  return <Link href={`/blog/${post.slug}/`}>
    <div className={styles.card}>
      <div className={styles.title}>{post.title}</div>
      <div className={styles.date}>{post.publishDate.toLocaleDateString('en-us', {month: 'short', day: 'numeric', year: 'numeric'})}</div>
    </div>
  </Link>;
}

export default BlogCard;