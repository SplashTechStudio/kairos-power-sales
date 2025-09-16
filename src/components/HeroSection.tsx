import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Battery, Sun, Smartphone, Lightbulb } from "lucide-react";
import powerStationImage from "@/assets/power-station-hero.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-energy-light via-white to-energy-blue/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-energy-green/5 to-energy-blue/5" />
      
      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-energy-light text-energy-green px-4 py-2 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Portable Power Solution
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-energy-dark">
                1000W Power Station
                <span className="block text-2xl lg:text-3xl text-energy-green mt-2">
                  Perfect for Emergency Backup
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Reliable portable power with 2KWh Lithium Battery and 450W solar panel. 
                Ideal for small devices, emergency backup, and outdoor adventures.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-energy-green/10 rounded-lg flex items-center justify-center">
                  <Battery className="w-5 h-5 text-energy-green" />
                </div>
                <span className="text-sm font-medium">2KWh Battery</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-energy-blue/10 rounded-lg flex items-center justify-center">
                  <Sun className="w-5 h-5 text-energy-blue" />
                </div>
                <span className="text-sm font-medium">450W Solar Panel</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-energy-orange/10 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-energy-orange" />
                </div>
                <span className="text-sm font-medium">USB Charging</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-energy-green/10 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-energy-green" />
                </div>
                <span className="text-sm font-medium">LED Lighting</span>
              </div>
            </div>

            {/* Pricing & Payment Options */}
            <div className="space-y-6">
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-bold text-energy-dark">₦864,000</span>
                <span className="text-sm text-muted-foreground line-through">₦950,000</span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Button variant="cta" size="lg" className="w-full text-base py-6">
                  Pay Full Amount
                  <span className="block text-sm opacity-90">via Paystack</span>
                </Button>
                
                <Button variant="energy-outline" size="lg" className="w-full text-base py-6">
                  Installment Plan
                  <span className="block text-sm opacity-75">Credit Corp & Fidelity Bank</span>
                </Button>
              </div>

              <p className="text-sm text-center text-muted-foreground">
                🔒 Secure payment • 2-year warranty • Free delivery within Lagos
              </p>
            </div>
          </div>

          {/* Right column - Product Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white to-energy-light rounded-2xl p-8 shadow-2xl">
              <img 
                src={powerStationImage} 
                alt="1000W Portable Power Station" 
                className="w-full h-auto rounded-lg"
              />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-energy-orange text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                1000W
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-energy-green text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                ⚡ Ready to Ship
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;