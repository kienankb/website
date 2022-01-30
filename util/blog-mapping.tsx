import EndOfDays from '../blog-content/the-end-of-days.mdx';

export interface BlogMapping{
    slug: string;
    title: string;
    publishDate: Date;
    content: JSX.Element;
}

export const BlogPosts: [BlogMapping] = [
    {
        slug: 'the-end-of-days',
        title: 'The End of Days',
        publishDate: new Date(),
        content: <EndOfDays />,
    }
];

export const getBlogPostDataFromSlug = (slug: string | string[] | undefined): BlogMapping | undefined => {
    return BlogPosts.find((postData: BlogMapping) => postData.slug === slug);
}