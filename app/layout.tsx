import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next r3F template',
  description: 'A template for Next.js and r3F',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
