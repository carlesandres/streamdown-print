import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export function getPosts(dir: string, all = false) {
  const filenames = fs.readdirSync(dir);

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.(md|mdx)$/, '');
    const filePath = path.join(dir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      data,
      title: data.title || slug,
      filename,
    };
  });

  let filtered = posts;

  // If 'all' is false, filter out posts that are not published
  if (!all) {
    filtered = posts.filter((post) => {
      const date = new Date(post.data.date);
      return post.data.published !== false && date <= new Date();
    });
  }

  posts.sort((a, b) => {
    const dateA = new Date(a.data.published || a.data.date);
    const dateB = new Date(b.data.date || b.data.published);
    return dateB.getTime() - dateA.getTime();
  });

  return posts;
}
