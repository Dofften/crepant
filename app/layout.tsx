import '@fontsource/mukta';
import './tailwind.css';

import Analytics from 'app/components/analytics/analytics';
import Footer from 'app/components/layouts/footer';
import Header from 'app/components/layouts/header';
import LenisProvider from 'app/components/providers/LenisProvider';
import ThemeProvider from 'app/components/providers/ThemeProvider';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('http://crepant.com'),
  title: 'Frank Omondi',
  description: 'My portfolio website',
  openGraph: {
    title: 'Frank Omondi',
    description: 'My portfolio website',
    images: '/opengraph-image.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dofften',
    title: 'Frank Omondi',
    description: 'My portfolio website',
    images: '/opengraph-image.png',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className="bg-white text-black antialiased dark:bg-black dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          themes={['dark', 'light']}
        >
          <Header />
          <LenisProvider>{children}</LenisProvider>
          <Footer />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  );
}
