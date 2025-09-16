import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Battery, Sun, Shield, Gauge, Plug } from "lucide-react";
import solarPanelImage from "@/assets/solar-panel.jpg";

const ProductFeatures = () => {
  const features = [
    {
      icon: <Battery className="w-8 h-8 text-energy-green" />,
      title: "2KWh Lithium Battery",
      description: "Long-lasting power storage with advanced battery management system",
      highlight: "5000+ cycles"
    },
    {
      icon: <Sun className="w-8 h-8 text-energy-blue" />,
      title: "450W Solar Panel",
      description: "High-efficiency solar charging for sustainable power generation",
      highlight: "22% efficiency"
    },
    {
      icon: <Zap className="w-8 h-8 text-energy-orange" />,
      title: "1000W Output",
      description: "Pure sine wave inverter for clean, stable power output",
      highlight: "Pure sine wave"
    },
    {
      icon: <Plug className="w-8 h-8 text-energy-green" />,
      title: "Multiple Outputs",
      description: "AC outlets, USB ports, and DC outputs for all your devices",
      highlight: "8 ports total"
    },
    {
      icon: <Shield className="w-8 h-8 text-energy-blue" />,
      title: "Safety Protection",
      description: "Built-in protection against overcharge, short circuit, and overheating",
      highlight: "10+ protections"
    },
    {
      icon: <Gauge className="w-8 h-8 text-energy-orange" />,
      title: "Smart Display",
      description: "LCD screen shows real-time power consumption and battery status",
      highlight: "Real-time data"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-energy-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-energy-light text-energy-green px-4 py-2 text-sm font-medium mb-4">
            Product Features
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-energy-dark mb-4">
            Everything You Need for Reliable Power
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Engineered with premium components and advanced technology for maximum efficiency and reliability.
          </p>
        </div>

        {/* What's Included Section */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-energy-green/5 to-energy-blue/5 border-energy-green/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-energy-dark">What's Included</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-energy-green rounded-full"></div>
                    <span className="text-lg">1× 1000W Power Station</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-energy-blue rounded-full"></div>
                    <span className="text-lg">1× 2KWh Lithium Battery (built-in)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-energy-orange rounded-full"></div>
                    <span className="text-lg">1× 450W Solar Panel</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-energy-green rounded-full"></div>
                    <span className="text-lg">Cables & User Manual</span>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={solarPanelImage}
                    alt="450W Solar Panel"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute top-4 right-4 bg-energy-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    450W Panel
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-energy-green">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-gradient-to-br from-energy-green/10 to-energy-blue/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.highlight}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;