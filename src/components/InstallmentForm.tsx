import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Building2, Shield } from "lucide-react";

const InstallmentForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    system: '1000W Power Station',
    systemPrice: '₦864,000',
    payment: '',
    workplace: '',
    placeOfWork: '',
    salaryRange: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nigerianStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta',
    'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi',
    'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto',
    'Taraba', 'Yobe', 'Zamfara'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://stroom-interest-form.onrender.com/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Application Submitted Successfully! 🎉",
          description: "Our team will contact you within 24 hours to process your installment plan.",
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          state: '',
          system: '1000W Power Station',
          systemPrice: '₦864,000',
          payment: '',
          workplace: '',
          placeOfWork: '',
          salaryRange: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact our support team.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-energy-light/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="bg-energy-blue/10 text-energy-blue px-4 py-2 text-sm font-medium mb-4">
            <CreditCard className="w-4 h-4 mr-2" />
            Flexible Payment Options
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-energy-dark mb-4">
            Apply for Installment Payment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your power station today with flexible payment plans through Credit Corp and Fidelity Bank.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payment Options Info */}
            <div className="space-y-6">
              <Card className="border-energy-green/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-energy-green">
                    <Building2 className="w-5 h-5" />
                    <span>Credit Corp</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">3 Months</span>
                    <span className="font-medium">₦288,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">6 Months</span>
                    <span className="font-medium">₦150,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">12 Months</span>
                    <span className="font-medium">₦80,000/month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-energy-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-energy-blue">
                    <Building2 className="w-5 h-5" />
                    <span>Fidelity Bank</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">6 Months</span>
                    <span className="font-medium">₦148,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">12 Months</span>
                    <span className="font-medium">₦78,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">24 Months</span>
                    <span className="font-medium">₦42,000/month</span>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-energy-green" />
                <span>Secure processing with bank-grade encryption</span>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Installment Application Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State *</Label>
                        <Select value={formData.state} onValueChange={(value) => setFormData({ ...formData, state: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your state" />
                          </SelectTrigger>
                          <SelectContent>
                            {nigerianStates.map((state) => (
                              <SelectItem key={state} value={state}>
                                {state}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label>Payment Duration *</Label>
                      <RadioGroup
                        value={formData.payment}
                        onValueChange={(value) => setFormData({ ...formData, payment: value })}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="3 months" id="3months" />
                          <Label htmlFor="3months">3 months</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="6 months" id="6months" />
                          <Label htmlFor="6months">6 months</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="12 months" id="12months" />
                          <Label htmlFor="12months">12 months</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="24 months" id="24months" />
                          <Label htmlFor="24months">24 months</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-4">
                      <Label>Workplace Type *</Label>
                      <RadioGroup
                        value={formData.workplace}
                        onValueChange={(value) => setFormData({ ...formData, workplace: value })}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Private" id="private" />
                          <Label htmlFor="private">Private</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Government" id="government" />
                          <Label htmlFor="government">Government</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Self-employed" id="self-employed" />
                          <Label htmlFor="self-employed">Self-employed</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="placeOfWork">Place of Work *</Label>
                      <Input
                        id="placeOfWork"
                        value={formData.placeOfWork}
                        onChange={(e) => setFormData({ ...formData, placeOfWork: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="salaryRange">Monthly Salary Range *</Label>
                      <Select value={formData.salaryRange} onValueChange={(value) => setFormData({ ...formData, salaryRange: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select salary range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="₦50,000 - ₦100,000">₦50,000 - ₦100,000</SelectItem>
                          <SelectItem value="₦100,000 - ₦200,000">₦100,000 - ₦200,000</SelectItem>
                          <SelectItem value="₦200,000 - ₦300,000">₦200,000 - ₦300,000</SelectItem>
                          <SelectItem value="₦300,000 - ₦500,000">₦300,000 - ₦500,000</SelectItem>
                          <SelectItem value="₦500,000+">₦500,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button 
                      type="submit" 
                      variant="energy" 
                      size="lg" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallmentForm;