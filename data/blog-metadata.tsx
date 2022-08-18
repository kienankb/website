import * as PostContents from '../blog-content';


export interface BlogMetadata {
  slug: string;
  title: string;
  publishDate: Date;
  content: JSX.Element;
  tags: string[];
}

export const BlogPosts: BlogMetadata[] = [
  {
    slug: 'minimalist-lighting',
    title: 'Minimalist Lighting',
    publishDate: new Date(2016, 3, 26),
    content: <PostContents.MinimalistLighting />,
    tags: ['old', 'fiction'],
  },
  {
    slug: 'the-end-of-days',
    title: 'The End of Days',
    publishDate: new Date(2016, 5, 5),
    content: <PostContents.TheEndOfDays />,
    tags: ['old', 'fiction'],
  },
  {
    slug: 'nature-preserve',
    title: 'Nature Preserve',
    publishDate: new Date(2016, 9, 12),
    content: <PostContents.NaturePreserve />,
    tags: ['old', 'fiction'],
  },
  {
    slug: 'dark-sand',
    title: 'Dark Sand',
    publishDate: new Date(2021, 0, 31),
    content: <PostContents.DarkSand />,
    tags: ['reflective'],
  },
];
