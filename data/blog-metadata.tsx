import * as PostContents from '../blog-content';

export interface BlogMapping {
  slug: string;
  title: string;
  publishDate: Date;
  content: JSX.Element;
}

export const BlogPosts: BlogMapping[] = [
  {
    slug: 'minimalist-lighting',
    title: 'Minimalist Lighting',
    publishDate: new Date(2016, 3, 26),
    content: <PostContents.MinimalistLighting />,
  },
  {
    slug: 'the-end-of-days',
    title: 'The End of Days',
    publishDate: new Date(2016, 5, 5),
    content: <PostContents.TheEndOfDays />,
  },
  {
    slug: 'nature-preserve',
    title: 'Nature Preserve',
    publishDate: new Date(2016, 9, 12),
    content: <PostContents.NaturePreserve />,
  },
  {
    slug: 'dark-sand',
    title: 'Dark Sand',
    publishDate: new Date(2021, 0, 31),
    content: <PostContents.DarkSand />,
  },
];