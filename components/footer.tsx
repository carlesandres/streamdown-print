import React from 'react';
import Link from 'next/link';
import { GitBranch } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200/50 bg-white/80 pt-6 pb-24 text-sm backdrop-blur-md sm:pb-6 dark:border-gray-800/50 dark:bg-gray-950/80 print:hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-16">
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            Find us on
            <Link
              className="ml-1 flex items-center text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
              href="https://github.com/carlesandres/project-template"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBranch className="mr-1 h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
