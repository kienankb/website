import {BlogPosts, BlogMapping} from "../data/blog-metadata";

export const getBlogPostDataFromSlug = (slug: string | string[] | undefined): BlogMapping | undefined => {
  return BlogPosts.find((postData: BlogMapping) => postData.slug === slug);
}