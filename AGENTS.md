# AGENTS.md - Project Template Documentation

This is a comprehensive Next.js project template designed for rapid full-stack application development with modern tooling and best practices.

## Project Overview

A batteries-included Next.js template with TypeScript, featuring a markdown-based blog system and comprehensive UI component library. Built with industry-standard technologies that are well-supported by AI tools for efficient development.

## Key Features

### Core Framework & Language

- **Next.js 15.3.5** with App Router structure
- **TypeScript** with strict configuration
- **React 19** with latest features

### Styling & UI

- **Tailwind CSS v4** for utility-first styling
- **shadcn/ui** component library (New York style) with 30+ pre-built components
- **Lucide React** icons
- **Dark mode support** via next-themes with system preference detection
- **Geist font** for modern typography

### Blog System

- **Markdown-based blog** with gray-matter frontmatter parsing
- **Dynamic routing** for blog posts (`/blog/[slug]`)
- **Publication control** (published/draft states)
- **Date-based sorting** and filtering
- **Content directory**: `/content/` for markdown files

### Development Tools

- **ESLint** with Next.js and Prettier configurations
- **Prettier** with Tailwind CSS plugin for code formatting
- **Husky** git hooks for pre-commit linting and commit message validation
- **Commitlint** with conventional commits enforcement
- **TypeScript strict mode** with path aliases (`@/*`)

### Testing

- **Jest** testing framework configured for Next.js
- **React Testing Library** for component integration testing
- **@testing-library/jest-dom** for enhanced DOM matchers
- **@testing-library/user-event** for user interaction simulation

### Form Handling & Validation

- **React Hook Form** for form management
- **Zod** for schema validation
- **@hookform/resolvers** for Zod integration

### Performance & Analytics

- **Vercel Speed Insights** for performance monitoring
- **Optimized builds** with Next.js

### UI Component Library

Complete set of accessible components from Radix UI:

- Navigation (menus, breadcrumbs, tabs)
- Forms (inputs, selects, checkboxes, radio groups)
- Feedback (alerts, toasts, progress bars)
- Overlays (dialogs, popovers, tooltips)
- Data display (tables, cards, charts via Recharts)
- Layout (resizable panels, sidebars, carousels)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run TypeScript check and ESLint with auto-fix
- `npm run prettify` - Format code with Prettier
- `npm run test` - Run Jest tests
- `npm run test:watch` - Run Jest tests in watch mode
- `npm run test:coverage` - Run Jest tests with coverage report

## Project Structure

```
app/                    # Next.js App Router pages
├── api/               # API routes
├── blog/              # Blog pages and layout
├── layout.tsx         # Root layout
└── page.tsx           # Home page

components/            # React components
├── ui/               # shadcn/ui components (30+ components)
├── theme-provider.tsx # Dark mode provider
├── header.tsx        # Site header
└── Footer.tsx        # Site footer

content/              # Markdown blog posts
hooks/                # Custom React hooks
lib/                  # Utility libraries and constants
utils/                # Utility functions (blog parsing, metadata)
styles/               # Global CSS styles
public/               # Static assets
__tests__/            # Jest integration tests
```

## Configuration Files

- `components.json` - shadcn/ui configuration
- `tsconfig.json` - TypeScript configuration with path aliases
- `eslint.config.mjs` - ESLint configuration
- `.prettierrc` - Prettier formatting rules
- `postcss.config.js` - PostCSS configuration
- `commitlint.config.js` - Conventional commits configuration
- `.husky/pre-commit` - Git pre-commit hooks
- `.husky/commit-msg` - Git commit message validation
- `jest.config.js` - Jest testing configuration
- `jest.setup.js` - Jest setup file for testing-library matchers

## Installation

```bash
npx create-next-app@latest -e https://github.com/carlesandres/project-template
```

## Development Notes

- Uses bun as package manager with workspace configuration
- Strict TypeScript configuration for better code quality
- Pre-commit hooks ensure code quality before commits
- Conventional commits enforced via commitlint and husky hooks
- Commit messages must follow format: `type(scope): description`
- Supported commit types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
- Path aliases configured for clean imports (`@/components`, `@/lib`, etc.)
- Dark mode implemented with system preference detection
- Blog posts support frontmatter metadata (title, date, published status)
- Responsive design with mobile-first approach
- Integration testing setup following Kent C. Dodds' testing philosophy
