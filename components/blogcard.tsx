import Link from 'next/link';

import {BlogMetadata} from '../data/blog-metadata';
import {Tags} from '../data/tags';

import styles from './styles/BlogCard.module.css';


type BlogCardTagPanelProps = {
  tagNames: string[],
};

const BlogCardTagPanel = ({tagNames}: BlogCardTagPanelProps) => {
  return <span className={styles.tagGroup}>
    [{tagNames.join(', ')}]
  </span>;
}

type BlogCardProps = {
  post: BlogMetadata,
};

const BlogCard = ({post}: BlogCardProps) => {
  return <Link passHref href={`/blog/${post.slug}/`}>
    <div className={styles.card}>
      <span className={styles.metadata}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.date}>{post.publishDate.toLocaleDateString('en-us', {month: 'short', day: 'numeric', year: 'numeric'})}</div>
        <BlogCardTagPanel tagNames={post.tagNames} />
      </span>
    </div>
  </Link>;
}

export default BlogCard;
