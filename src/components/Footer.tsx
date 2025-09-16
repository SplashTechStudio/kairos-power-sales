import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-energy-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Kairos Energy Nigeria</h3>
              <p className="text-gray-300 max-w-md">
                Leading provider of renewable energy solutions in Nigeria. 
                Powering homes and businesses with sustainable energy systems.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-energy-green/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-energy-green" />
                </div>
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-gray-300">+234 (0) 933 838 340</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-energy-blue/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-energy-blue" />
                </div>
                <div>
                  <p className="font-medium">Email Support</p>
                  <p className="text-gray-300">emmyjaff22@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-energy-orange/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-energy-orange" />
                </div>
                <div>
                  <p className="font-medium">Service Areas</p>
                  <p className="text-gray-300">Lagos, Abuja, Port Harcourt & More</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-energy-green/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-energy-green" />
                </div>
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-gray-300">Mon - Sat: 8AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div>
            <Card className="bg-gradient-to-br from-energy-green/10 to-energy-blue/10 border-energy-green/20">
              <CardContent className="p-8 text-center space-y-6">
                <h4 className="text-2xl font-bold text-energy-dark">
                  Ready to Go Solar?
                </h4>
                <p className="text-muted-foreground">
                  Join thousands of satisfied customers who have made the switch to clean, 
                  reliable energy with Kairos Energy solutions.
                </p>
                
                <div className="space-y-4">
                  <Button variant="cta" size="lg" className="w-full">
                    Get Your Power Station Today
                  </Button>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="energy-outline" size="sm">
                      Call Now
                    </Button>
                    <Button variant="energy-outline" size="sm">
                      Request Quote
                    </Button>
                  </div>
                </div>

                <div className="pt-4 border-t border-energy-green/20">
                  <p className="text-sm text-muted-foreground">
                    ⭐⭐⭐⭐⭐ Rated 4.9/5 by 500+ customers
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Kairos Energy Nigeria. All rights reserved. | 
            <span className="ml-2">Sustainable Energy Solutions Since 2020</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;