import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingActions from './FloatingActions';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Header />
      <main className="flex-grow pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Layout;
