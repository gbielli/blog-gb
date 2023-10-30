import { getPosts } from "../services";
 
const URL = "https://guillaumebielli.fr";
 
export default async function sitemap() {

   const posts =  await getPosts() || [];

   const post = posts.map((post) => ({
    url: `${URL}/blog/${post.node.slug}`,
  }));
    
//   const post = posts.map(({ slug, date }) => ({
//     url: `${URL}/blog/${id}`,
//     lastModified: date,
//   }));
 
  const routes = ["", "/contact", "/blog"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return [...routes, ...post];
}

