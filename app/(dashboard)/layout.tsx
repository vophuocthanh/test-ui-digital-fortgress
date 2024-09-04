import Sidebar from '@/layouts/side-bar';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid lg:grid-cols-[auto,1fr] h-screen'>
      <Sidebar />
      <main className='py-2 ml-4 overflow-y-auto'>{children}</main>
    </div>
  );
}
