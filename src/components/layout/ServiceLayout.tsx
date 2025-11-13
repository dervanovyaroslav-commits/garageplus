
import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface ServiceLayoutProps {
  children: ReactNode;
}

export const ServiceLayout = ({ children }: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#e6dfd6] text-black">
      <Header />
      <main className="pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};
