import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Zap,
  Palette,
  FileText,
  Code2,
  Sparkles,
  Shield,
  Gauge,
  Layers,
  Moon,
  Sun,
  Smartphone,
  GitBranch,
  Database,
  Search,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Carles Andres's Project Template",
  description:
    'A comprehensive Next.js template with TypeScript, Tailwind CSS, shadcn/ui, markdown blog, dark mode, and more. Perfect for rapid application development.',
  alternates: {
    canonical: `/`,
  },
  openGraph: {
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    title: 'Next.js Project Template - Modern Full-Stack Development',
    description:
      'A comprehensive Next.js template with TypeScript, Tailwind CSS, shadcn/ui, markdown blog, dark mode, and more.',
  },
};

const features = [
  {
    icon: Zap,
    title: 'Next.js 15 + React 19',
    description:
      'Latest Next.js with App Router and React 19 features for optimal performance',
    category: 'Core',
  },
  {
    icon: Code2,
    title: 'TypeScript Ready',
    description:
      'Strict TypeScript configuration with path aliases for better development experience',
    category: 'Core',
  },
  {
    icon: Palette,
    title: 'Tailwind CSS v4',
    description: 'Modern utility-first CSS framework with custom design system',
    category: 'Styling',
  },
  {
    icon: Layers,
    title: 'shadcn/ui Components',
    description: '30+ accessible, customizable components built on Radix UI',
    category: 'UI',
  },
  {
    icon: Moon,
    title: 'Dark Mode Support',
    description: 'System preference detection with smooth theme transitions',
    category: 'UI',
  },
  {
    icon: FileText,
    title: 'Markdown Blog',
    description:
      'Built-in blog system with frontmatter, dynamic routing, and publication control',
    category: 'Content',
  },
  {
    icon: Shield,
    title: 'Form Validation',
    description:
      'React Hook Form with Zod schema validation for type-safe forms',
    category: 'Forms',
  },
  {
    icon: Sparkles,
    title: 'Code Quality',
    description:
      'ESLint, Prettier, and Husky pre-commit hooks for consistent code',
    category: 'DevTools',
  },
  {
    icon: Gauge,
    title: 'Performance Monitoring',
    description: 'Vercel Speed Insights for real-time performance tracking',
    category: 'Analytics',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description:
      'Responsive design with mobile-first approach and touch-friendly interactions',
    category: 'Design',
  },
  {
    icon: GitBranch,
    title: 'Git Hooks',
    description: 'Automated linting and formatting on commit with Husky',
    category: 'DevTools',
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description: 'Built-in metadata management and OpenGraph support',
    category: 'SEO',
  },
];

const categories = [
  'All',
  'Core',
  'UI',
  'Styling',
  'Content',
  'Forms',
  'DevTools',
  'Analytics',
  'Design',
  'SEO',
];

export default function Home() {
  return (
    <main className="relative">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-3xl dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10" />
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-gradient-to-tr from-green-400/20 via-blue-400/20 to-purple-400/20 blur-3xl dark:from-green-500/10 dark:via-blue-500/10 dark:to-purple-500/10" />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center sm:py-24">
        <div className="relative">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent dark:from-gray-100 dark:via-gray-200 dark:to-gray-100">
              {`Carles Andres's`}
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              Project Template
            </span>
          </h1>

          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg sm:text-xl">
            A comprehensive, batteries-included template for rapid full-stack
            development.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
            >
              <Code2 className="mr-2 h-4 w-4" />
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-gray-200 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
            >
              <Link href="/blog">
                <FileText className="mr-2 h-4 w-4" />
                View Documentation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            A carefully curated set of modern tools and frameworks to accelerate
            your development workflow
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-gray-200/50 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/20 dark:border-gray-800/50 dark:bg-gray-950/50 dark:hover:shadow-gray-900/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:to-gray-900/50" />

                <CardHeader className="relative">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 p-2 transition-colors duration-300 group-hover:from-blue-100 group-hover:to-purple-100 dark:from-blue-950/50 dark:to-purple-950/50 dark:group-hover:from-blue-900/50 dark:group-hover:to-purple-900/50">
                      <Icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {feature.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Installation Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20" />

          <div className="relative p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Ready to Start Building?
            </h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
              Get up and running in minutes with our comprehensive template. No
              configuration needed - just clone and start coding.
            </p>

            <div className="mx-auto mb-6 max-w-2xl rounded-lg bg-gray-900 p-4 dark:bg-gray-800">
              <code className="font-mono text-sm text-green-400 sm:text-base">
                npx create-next-app@latest -e
                https://github.com/carlesandres/project-template
              </code>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700"
              >
                <GitBranch className="mr-2 h-4 w-4" />
                Clone Template
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link
                  href="https://github.com/carlesandres/project-template"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Future Features Teaser */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight">
            More Features Coming Soon
          </h2>
          <p className="text-muted-foreground mb-6">
            This template is actively maintained and regularly updated with new
            features, components, and improvements based on modern development
            practices.
          </p>
          <Badge
            variant="secondary"
            className="border-yellow-200/50 bg-gradient-to-r from-yellow-50 to-orange-50 dark:border-yellow-800/50 dark:from-yellow-950/50 dark:to-orange-950/50"
          >
            <Sparkles className="mr-1 h-3 w-3" />
            Stay tuned for updates
          </Badge>
        </div>
      </section>
    </main>
  );
}
