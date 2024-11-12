import type { Metadata } from 'next';
import Head from 'next/head';

import '@/style/global.css';

export const metadata: Metadata = {
  title: 'The Report Viewer App',
  description: 'App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
