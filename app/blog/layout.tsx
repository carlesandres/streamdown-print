interface BlogTemplateProps {
  children: React.ReactNode;
}

const BlogTemplate = (props: BlogTemplateProps) => {
  return (
    <main className="prose dark:prose-invert prose-code:before:content-none prose-code:after:content-none mx-auto">
      {props.children}
    </main>
  );
};

export default BlogTemplate;
