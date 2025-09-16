import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProductFeatures from '@/components/ProductFeatures';
import InstallmentForm from '@/components/InstallmentForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductFeatures />
      <InstallmentForm />
      <Footer />
    </div>
  );
};

export default Index;
