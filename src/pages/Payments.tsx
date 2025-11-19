import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, CreditCard, Smartphone, DollarSign, ArrowLeft, Shield, Zap, CheckCircle } from "lucide-react";
import { PaymentIntegration } from "@/components/PaymentIntegration";

const Payments = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">PulseX</span>
          </Link>
          <Link to="/">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Secure Payment Processing
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Seamless Payment</span> Integration
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Accept payments through multiple channels with industry-leading security and instant confirmation
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <Card className="border-2 hover:border-primary transition-all">
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 text-primary mb-4 mx-auto" />
              <CardTitle>Secure & Encrypted</CardTitle>
              <CardDescription>
                PCI-DSS compliant payment processing with end-to-end encryption
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary transition-all">
            <CardHeader className="text-center">
              <Zap className="h-12 w-12 text-warning mb-4 mx-auto" />
              <CardTitle>Instant Confirmation</CardTitle>
              <CardDescription>
                Real-time payment status updates and automatic receipt generation
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary transition-all">
            <CardHeader className="text-center">
              <CheckCircle className="h-12 w-12 text-success mb-4 mx-auto" />
              <CardTitle>Multiple Options</CardTitle>
              <CardDescription>
                Support for cards, UPI, net banking, and international payments
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Supported Payment Methods</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 hover:shadow-lg transition-all">
              <CardHeader className="text-center">
                <div className="p-4 bg-primary/10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <CreditCard className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>Razorpay</CardTitle>
                <CardDescription>
                  Credit/Debit Cards, UPI, Net Banking, Wallets
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all">
              <CardHeader className="text-center">
                <div className="p-4 bg-secondary/10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Smartphone className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle>UPI Direct</CardTitle>
                <CardDescription>
                  Google Pay, PhonePe, Paytm, BHIM
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all">
              <CardHeader className="text-center">
                <div className="p-4 bg-accent/10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <DollarSign className="h-10 w-10 text-accent" />
                </div>
                <CardTitle>Stripe</CardTitle>
                <CardDescription>
                  International Cards, Apple Pay, Google Pay
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Demo Payment */}
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Try Demo Payment</CardTitle>
              <CardDescription className="text-center">
                Experience our seamless payment flow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PaymentIntegration 
                amount={500}
                doctorName="Sample Doctor"
                appointmentId="DEMO-001"
                onSuccess={() => console.log("Demo payment successful")}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Accept Payments?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Start accepting payments from your patients with zero setup hassle
          </p>
          <Link to="/auth">
            <Button size="lg" className="bg-background text-primary hover:bg-background/90">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Payments;
