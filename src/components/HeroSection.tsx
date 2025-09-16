import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Battery, Sun, Smartphone, Lightbulb, Shield, Gauge } from "lucide-react";
import powerStationImage from "@/assets/power-station-hero.jpg";

const HeroSection = () => {
  const handlePaystackPayment = () => {
    const handler = (window as any).PaystackPop.setup({
      key: 'pk_test_your_paystack_public_key_here', // Replace with actual key
      email: 'customer@example.com',
      amount: 86400000, // Amount in kobo (₦864,000)
      currency: 'NGN',
      callback: function(response: any) {
        console.log('Payment successful:', response);
        alert('Payment successful! Transaction ref: ' + response.reference);
      },
      onClose: function() {
        console.log('Payment window closed');
      }
    });
    handler.openIframe();
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-energy-light via-white to-energy-blue/10" />
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, hsl(var(--energy-green) / 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, hsl(var(--energy-blue) / 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, hsl(var(--energy-orange) / 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
        >
          {/* Left column - Content */}
          <div className="space-y-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge variant="secondary" className="glass bg-energy-light/20 text-energy-green px-6 py-3 text-sm font-medium hover-glow">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="w-4 h-4 mr-2" />
                  </motion.div>
                  Portable Power Solution
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-4xl lg:text-7xl font-bold leading-tight text-energy-dark"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.05, color: "hsl(var(--energy-green))" }}
                  transition={{ duration: 0.3 }}
                >
                  1000W Power Station
                </motion.span>
                <motion.span 
                  className="block text-2xl lg:text-4xl bg-gradient-to-r from-energy-green to-energy-blue bg-clip-text text-transparent mt-4 animate-gradient"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Perfect for Emergency Backup
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-muted-foreground max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Reliable portable power with 2KWh Lithium Battery and 450W solar panel. 
                Ideal for small devices, emergency backup, and outdoor adventures.
              </motion.p>
            </motion.div>

            {/* Enhanced Key Features */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: Battery, label: "2KWh Battery", color: "energy-green" },
                { icon: Sun, label: "450W Solar Panel", color: "energy-blue" },
                { icon: Smartphone, label: "USB Charging", color: "energy-orange" },
                { icon: Lightbulb, label: "LED Lighting", color: "energy-green" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 glass-card p-4 rounded-xl hover-lift"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                >
                  <motion.div 
                    className={`w-12 h-12 bg-${feature.color}/10 rounded-xl flex items-center justify-center animate-glow`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                  </motion.div>
                  <span className="text-sm font-semibold">{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Pricing & Payment Options */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div 
                className="flex items-baseline space-x-4"
                whileHover={{ scale: 1.02 }}
              >
                <motion.span 
                  className="text-5xl font-bold bg-gradient-to-r from-energy-green to-energy-blue bg-clip-text text-transparent animate-gradient"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ₦864,000
                </motion.span>
                <span className="text-lg text-muted-foreground line-through">₦950,000</span>
                <motion.div
                  className="bg-energy-orange text-white px-3 py-1 rounded-full text-sm font-bold"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Save ₦86,000!
                </motion.div>
              </motion.div>

              <div className="grid gap-6 sm:grid-cols-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="energy-border"
                >
                  <Button 
                    variant="cta" 
                    size="lg" 
                    className="w-full text-base py-8 font-bold hover-glow relative overflow-hidden"
                    onClick={handlePaystackPayment}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: [-100, 300] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />
                    <div className="relative z-10">
                      Pay Full Amount
                      <span className="block text-sm opacity-90">Secure Paystack Payment</span>
                    </div>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant="energy-outline" 
                    size="lg" 
                    className="w-full text-base py-8 glass hover-lift"
                  >
                    Installment Plan
                    <span className="block text-sm opacity-75">Credit Corp & Fidelity Bank</span>
                  </Button>
                </motion.div>
              </div>

              <motion.div
                className="text-center space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                  <motion.div 
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Shield className="w-4 h-4 text-energy-green" />
                    <span>Secure Payment</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Gauge className="w-4 h-4 text-energy-blue" />
                    <span>2-Year Warranty</span>
                  </motion.div>
                </div>
                <p className="text-sm text-energy-green font-medium">
                  ✈️ Free delivery within Lagos
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right column - Enhanced Product Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div 
              className="relative glass-card p-8 rounded-3xl hover-lift animate-float"
              whileHover={{ scale: 1.02 }}
            >
              <motion.img 
                src={powerStationImage} 
                alt="1000W Portable Power Station" 
                className="w-full h-auto rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Enhanced floating badges */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-gradient-to-r from-energy-orange to-energy-green text-white px-6 py-3 rounded-full text-lg font-bold shadow-premium animate-bounce-gentle"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                1000W
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-energy-green to-energy-blue text-white px-6 py-3 rounded-full text-sm font-medium shadow-premium animate-pulse-slow"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                ⚡ Ready to Ship
              </motion.div>
            </motion.div>

            {/* Floating energy particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-energy-green rounded-full opacity-60"
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Add Paystack script */}
      <script src="https://js.paystack.co/v1/inline.js"></script>
    </section>
  );
};

export default HeroSection;