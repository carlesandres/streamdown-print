import 'styles/globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Footer from 'components/footer';
import { Header } from 'components/header';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '@/components/theme-provider';

const description =
  'A comprehensive Next.js template with TypeScript, Tailwind CSS, shadcn/ui, markdown blog, dark mode, and more. Perfect for rapid application development.';

export const metadata = {
  title: {
    template: '%s | Next.js Template',
    default: 'Next.js Project Template - Modern Full-Stack Development',
  },
  description,
  keywords: [
    'next.js',
    'template',
    'tailwindcss',
    'shadcn/ui',
    'typescript',
    'react',
    'markdown',
    'blog',
    'dark mode',
  ],
  authors: [{ name: 'Carles Andrés', url: 'https://carlesandres.com' }],
  robots: 'index, follow',
};

async function MyApp({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4a4a4a" />
      </head>
      <body className="bg-background">
        <ThemeProvider>
          <Header />
          <div className="min-h-screen">{children}</div>
          <Footer />
          <SpeedInsights />
          <div id="modal-root" />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default MyApp;
