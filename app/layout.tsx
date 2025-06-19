import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import "./globals.css";
import Navigation from './components/Navigation';

export const metadata: Metadata = {
  title: "Emmanuelle Nguyen | Software & AI Engineer",
  description: "Portfolio of Emmanuelle Ngan Ha NGUYEN - Apprentice Software and AI Engineer. Showcasing technical projects, blog posts, and creative work.",
  keywords: ["Software Engineer", "AI Engineer", "Next.js", "React", "Portfolio", "Emmanuelle Nguyen"],
  authors: [{ name: "Emmanuelle Ngan Ha NGUYEN" }],
  creator: "Emmanuelle Ngan Ha NGUYEN",
  openGraph: {
    title: "Emmanuelle Nguyen | Software & AI Engineer",
    description: "Portfolio of Emmanuelle Ngan Ha NGUYEN - Apprentice Software and AI Engineer",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuelle Nguyen | Software & AI Engineer",
    description: "Portfolio of Emmanuelle Ngan Ha NGUYEN - Apprentice Software and AI Engineer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-paper-light bg-paper-texture antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navigation />
          <main className="relative">
            {children}
          </main>
          {/* Footer */}
          <footer className="mt-20 border-t-2 border-dotted border-ink-faded bg-paper-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center space-y-4">
                {/* Travel Footer Design */}
                <div className="flex justify-center items-center space-x-4 mb-4">
                  <div className="w-16 h-px bg-vintage-brass"></div>
                  <div className="travel-stamp bg-vintage-burgundy text-xs font-bold px-3 py-1 transform -rotate-1">
                    PORTFOLIO
                  </div>
                  <div className="w-16 h-px bg-vintage-brass"></div>
                </div>
                
                <p className="font-typewriter text-sm text-ink-black">
                  © 2025 Kid - Emmanuelle. All rights reserved.
                </p>
                <p className="font-typewriter text-xs text-ink-faded">
                  Crafted with passion • Designed like a vintage travel journal
                </p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
