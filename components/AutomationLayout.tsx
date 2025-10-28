"use client";

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface AutomationLayoutProps {
  children: React.ReactNode;
}

const AutomationLayout: React.FC<AutomationLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AutomationLayout;
