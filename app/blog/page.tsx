import { getPosts } from '@/utils/blog-utils';
import { contentDir } from '@/lib/constants';
import Link from 'next/link';

export default async function Page() {
  const posts = getPosts(contentDir);

  if (!posts || posts.length === 0) {
    return (
      <div className="container mx-auto pt-6 sm:pt-12">
        No blog posts found.
      </div>
    );
  }

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.data.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
