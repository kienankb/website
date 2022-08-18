import Link from 'next/link';

import {BlogMetadata} from '../data/blog-metadata';
import {Tags} from '../data/tags';

import styles from './styles/BlogCard.module.css';


type BlogCardTagPanelProps = {
  tags: string[],
};

const BlogCardTagPanel = ({tags}: BlogCardTagPanelProps) => {
  return <span className={styles.tagIcons}>
    {tags.map((tag) => <span key={tag} className={styles.tagIcon}>{Tags.find((tagEntry) => tagEntry.name === tag)?.icon}</span>)}
  </span>;
}

type BlogCardProps = {
  post: BlogMetadata,
};

const BlogCard = ({post}: BlogCardProps) => {
  return <Link href={`/blog/${post.slug}/`}>
    <div className={styles.card}>
      <span className={styles.metadata}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.date}>{post.publishDate.toLocaleDateString('en-us', {month: 'short', day: 'numeric', year: 'numeric'})}</div>
      </span>
      <BlogCardTagPanel tags={post.tags} />
    </div>
  </Link>;
}

export default BlogCard;
