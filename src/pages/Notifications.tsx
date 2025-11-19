import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Bell, Clock, MessageSquare, ArrowLeft, Zap, Smartphone, CheckCircle } from "lucide-react";
import { NotificationSystem } from "@/components/NotificationSystem";

const Notifications = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">PulseX</span>
          </Link>
          <div className="flex items-center gap-4">
            <NotificationSystem />
            <Link to="/">
              <Button variant="ghost">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Smart Alert System
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Never Miss</span> an Update
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with real-time notifications for appointments, queue updates, and important announcements
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <Card className="border-2 hover:border-primary transition-all">
            <CardHeader className="text-center">
              <Bell className="h-12 w-12 text-primary mb-4 mx-auto" />
              <CardTitle>Real-Time Alerts</CardTitle>
              <CardDescription>
                Instant notifications for appointments, queue updates, and schedule changes
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary transition-all">
            <CardHeader className="text-center">
              <Smartphone className="h-12 w-12 text-secondary mb-4 mx-auto" />
              <CardTitle>Multi-Channel</CardTitle>
              <CardDescription>
                Receive alerts via in-app notifications, SMS, and email
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary transition-all">
            <CardHeader className="text-center">
              <Zap className="h-12 w-12 text-warning mb-4 mx-auto" />
              <CardTitle>Smart Reminders</CardTitle>
              <CardDescription>
                Automated reminders for upcoming appointments and pending actions
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Notification Types */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Notification Types</h2>
          
          <div className="space-y-6">
            <Card className="border-2 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-2">Appointment Reminders</CardTitle>
                    <CardDescription>
                      Get notified 24 hours and 1 hour before your scheduled appointments. Never miss a consultation again.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <MessageSquare className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-2">Queue Updates</CardTitle>
                    <CardDescription>
                      Real-time updates on your position in the queue and estimated wait time. Arrive at the perfect time.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-2">Payment Confirmations</CardTitle>
                    <CardDescription>
                      Instant confirmation when payments are processed successfully. Get digital receipts immediately.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-warning/10 rounded-lg">
                    <Bell className="h-8 w-8 text-warning" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-2">Schedule Changes</CardTitle>
                    <CardDescription>
                      Be informed immediately if there are any changes to doctor availability or appointment timings.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Stay Connected, Stay Informed
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Enable smart notifications and never miss important updates
          </p>
          <Link to="/auth">
            <Button size="lg" className="bg-background text-primary hover:bg-background/90">
              Enable Notifications
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Notifications;
