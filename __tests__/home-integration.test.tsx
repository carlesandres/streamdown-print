import { render, screen } from '@testing-library/react';
import { describe, it, expect, jest } from '@jest/globals';
import Home from '@/app/page';

// Mock next-themes to avoid issues in tests
jest.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light', setTheme: jest.fn() }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock Next.js Link component
jest.mock('next/link', () => {
  return function MockLink({ children, href, ...props }: any) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

describe('Home Page Integration Tests', () => {
  it('renders the complete landing page structure', async () => {
    render(<Home />);

    // Check main structural elements exist
    const main = screen.getByRole('main');
    expect(main).toBeTruthy();

    // Check hero section
    const mainHeading = screen.getByRole('heading', { level: 1 });
    expect(mainHeading.textContent).toMatch(/project template/i);

    // Check buttons
    const getStartedButton = screen.getByRole('button', {
      name: /get started/i,
    });
    expect(getStartedButton).toBeTruthy();

    // Check navigation link
    const docLink = screen.getByRole('link', { name: /view documentation/i });
    expect(docLink.getAttribute('href')).toBe('/blog');
  });

  it('displays key features and technologies', () => {
    render(<Home />);

    // Check that key technologies are mentioned
    expect(screen.getByText(/next\.js 15 \+ react 19/i)).toBeTruthy();
    expect(screen.getByText(/typescript ready/i)).toBeTruthy();
    expect(screen.getByText(/tailwind css/i)).toBeTruthy();
    expect(screen.getByText(/markdown blog/i)).toBeTruthy();
    expect(screen.getByText(/dark mode support/i)).toBeTruthy();
  });

  it('shows installation command and GitHub link', () => {
    render(<Home />);

    // Check installation section
    const installCommand = screen.getByText(/npx create-next-app@latest/i);
    expect(installCommand).toBeTruthy();

    // Check GitHub link
    const githubLink = screen.getByRole('link', { name: /view on github/i });
    expect(githubLink.getAttribute('href')).toMatch(/github\.com/);
    expect(githubLink.getAttribute('target')).toBe('_blank');
  });

  it('has proper semantic structure and accessibility', () => {
    render(<Home />);

    // Check heading hierarchy
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeTruthy();

    const h2Elements = screen.getAllByRole('heading', { level: 2 });
    expect(h2Elements.length).toBeGreaterThan(1);

    // Check that there are interactive elements
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);

    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('renders feature cards with proper structure', () => {
    render(<Home />);

    // Check that we have all the expected h2 headings
    const h2Elements = screen.getAllByRole('heading', { level: 2 });
    expect(h2Elements.length).toBeGreaterThan(2); // At least 3 main sections

    // Check that features have categories (badges)
    const coreFeatures = screen.getAllByText(/Core/i);
    expect(coreFeatures.length).toBeGreaterThan(0);
  });

  it('includes coming soon section with teaser content', () => {
    render(<Home />);

    const comingSoonHeading = screen.getByText(/more features coming soon/i);
    expect(comingSoonHeading).toBeTruthy();

    const stayTunedText = screen.getByText(/stay tuned for updates/i);
    expect(stayTunedText).toBeTruthy();
  });
});
