import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Test UI - Digital Fortress',
  description: 'Test UI - Digital Fortress',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark bg-[#636161]'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
