import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import matter from 'gray-matter';
import { CustomBreadcrumbs } from '@/components/custom-breadcrumbs';
import { Metadata } from 'next';
import { openGraph } from '@/utils/shared-metadata';
import { blogPath, contentDir } from '@/lib/constants';

interface ManualPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ManualPageProps): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(contentDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(content);

  const title = data.title || slug;
  const description = data.description || 'A blog post by Carles Andres';

  const meta = {
    title,
    description,
    alternates: {
      canonical: `/${blogPath}/${slug}`,
    },
    openGraph: {
      ...openGraph,
      title,
      description,
      url: `/${blogPath}/${slug}`,
    },
  };

  return meta;
}

export default async function ManualPage({ params }: ManualPageProps) {
  const { slug } = await params;
  const filePath = path.join(contentDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  const { data, content: realContent } = matter(content);
  const htmlContent = marked(realContent, {
    gfm: true,
    breaks: true,
  });

  return (
    <div className="container">
      <CustomBreadcrumbs
        parentHref={`/${blogPath}`}
        parentTitle="Blog"
        title={data.title || slug}
      />
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
