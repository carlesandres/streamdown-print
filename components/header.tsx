import Link from 'next/link';
import { Button } from './ui/button';
import { Code2, GitBranch } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-md dark:border-gray-800/50 dark:bg-gray-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center space-x-2 transition-opacity hover:opacity-80"
        >
          <div className="rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 p-1.5">
            <Code2 className="h-5 w-5 text-white" />
          </div>
          <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-lg font-bold text-transparent dark:from-gray-100 dark:to-gray-300">
            Carles Andres&apos;s Project Template
          </span>
        </Link>

        <nav className="flex items-center space-x-1">
          <Button asChild variant="ghost" size="sm">
            <Link href="/blog">Documentation</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link
              href="https://github.com/carlesandres/project-template"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBranch className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};
