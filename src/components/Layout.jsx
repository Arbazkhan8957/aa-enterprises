import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import ScrollNavigation from './ScrollNavigation';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfd] text-gray-900 font-sans selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
      <ScrollNavigation />
    </div>
  );
}
