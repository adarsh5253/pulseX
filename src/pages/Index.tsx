import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Calendar, Clock, Shield, Users, Zap, Home, Bell, CreditCard, Menu } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Mobile-First Header */}
      <header className="bg-card/95 backdrop-blur-xl sticky top-0 z-50 shadow-lg border-b border-border/20">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-gold rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <Activity className="h-8 w-8 text-primary relative z-10" strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-heading font-bold bg-gradient-premium bg-clip-text text-transparent">PulseX</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <Link to="/auth">
                <Button size="sm" className="rounded-full bg-gradient-primary px-6 font-semibold shadow-lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Mobile App Style */}
      <section className="px-4 py-8 md:py-12">
        <div className="max-w-lg mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-gold rounded-full text-xs font-bold shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Smart Queue Management
          </div>
          
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold leading-tight">
            Transform Your<br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">Clinic Experience</span>
          </h1>
          
          <p className="text-base text-muted-foreground leading-relaxed">
            Reduce wait times by <span className="text-primary font-bold">60%</span> with intelligent queue management
          </p>

          {/* App-Style Stats Cards */}
          <div className="grid grid-cols-3 gap-3 pt-4">
            <Card className="p-4 border-2 border-success/20 bg-success/5 rounded-2xl">
              <div className="text-2xl font-bold text-success">500+</div>
              <div className="text-xs text-muted-foreground mt-1">Clinics</div>
            </Card>
            <Card className="p-4 border-2 border-primary/20 bg-primary/5 rounded-2xl">
              <div className="text-2xl font-bold text-primary">60%</div>
              <div className="text-xs text-muted-foreground mt-1">Faster</div>
            </Card>
            <Card className="p-4 border-2 border-accent/20 bg-accent/5 rounded-2xl">
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-xs text-muted-foreground mt-1">Support</div>
            </Card>
          </div>

          {/* CTA */}
          <div className="space-y-3 pt-4">
            <Link to="/auth" className="block">
              <Button size="lg" className="w-full rounded-2xl bg-gradient-primary h-14 text-lg font-bold shadow-xl">
                Start Free Trial
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full rounded-2xl h-14 border-2 font-semibold">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Portals Section - Mobile Cards */}
      <section id="portals" className="px-4 py-8">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Choose Your Portal</h2>
            <p className="text-sm text-muted-foreground">Select your role to continue</p>
          </div>
          
          <div className="space-y-4">
            <Link to="/doctor" className="block">
              <Card className="border-2 border-primary/20 hover:border-primary rounded-3xl p-6 hover:shadow-2xl transition-all active:scale-98 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-8 w-8 text-primary" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-bold mb-1">Doctor Portal</h3>
                    <p className="text-sm text-muted-foreground">Manage consultations & patients</p>
                  </div>
                  <div className="text-primary">→</div>
                </div>
              </Card>
            </Link>

            <Link to="/patient" className="block">
              <Card className="border-2 border-secondary/20 hover:border-secondary rounded-3xl p-6 hover:shadow-2xl transition-all active:scale-98 bg-gradient-to-br from-secondary/5 to-transparent">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-8 w-8 text-secondary" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-bold mb-1">Patient Booking</h3>
                    <p className="text-sm text-muted-foreground">Book appointments & track queue</p>
                  </div>
                  <div className="text-secondary">→</div>
                </div>
              </Card>
            </Link>

            <Link to="/admin" className="block">
              <Card className="border-2 border-accent/20 hover:border-accent rounded-3xl p-6 hover:shadow-2xl transition-all active:scale-98 bg-gradient-to-br from-accent/5 to-transparent">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <Shield className="h-8 w-8 text-accent-foreground" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-bold mb-1">Admin Dashboard</h3>
                    <p className="text-sm text-muted-foreground">Manage operations & schedules</p>
                  </div>
                  <div className="text-accent">→</div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Compact Cards */}
      <section id="features" className="px-4 py-8 bg-muted/20">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Key Features</h2>
            <p className="text-sm text-muted-foreground">Everything you need in one place</p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <Link to="/live-display" className="block">
              <Card className="rounded-3xl p-5 hover:shadow-xl transition-all active:scale-98 border-2 bg-gradient-to-br from-success/5 to-transparent border-success/20">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-7 w-7 text-success" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-heading font-bold mb-1">Live Queue Display</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Real-time updates for waiting areas</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/notifications" className="block">
              <Card className="rounded-3xl p-5 hover:shadow-xl transition-all active:scale-98 border-2 bg-gradient-to-br from-warning/5 to-transparent border-warning/20">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-warning/10 flex items-center justify-center flex-shrink-0">
                    <Bell className="h-7 w-7 text-warning" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-heading font-bold mb-1">Smart Notifications</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Instant alerts for appointments</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/payments" className="block">
              <Card className="rounded-3xl p-5 hover:shadow-xl transition-all active:scale-98 border-2 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CreditCard className="h-7 w-7 text-primary" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-heading font-bold mb-1">Easy Payments</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Multiple payment options supported</p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Mobile Timeline */}
      <section id="how-it-works" className="px-4 py-8">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">How It Works</h2>
            <p className="text-sm text-muted-foreground">Three simple steps</p>
          </div>
          
          <div className="space-y-4">
            <Card className="rounded-3xl p-5 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-xl font-heading font-bold text-primary-foreground">1</span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-base font-heading font-bold mb-1">Patient Books</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Register online and receive a unique token instantly
                  </p>
                </div>
              </div>
            </Card>

            <Card className="rounded-3xl p-5 border-2 border-secondary/20 bg-gradient-to-r from-secondary/5 to-transparent">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-secondary flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-xl font-heading font-bold text-secondary-foreground">2</span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-base font-heading font-bold mb-1">Real-Time Updates</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Track your position with live notifications
                  </p>
                </div>
              </div>
            </Card>

            <Card className="rounded-3xl p-5 border-2 border-accent/20 bg-gradient-to-r from-accent/5 to-transparent">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-gold flex items-center justify-center flex-shrink-0 shadow-gold">
                  <span className="text-xl font-heading font-bold text-accent-foreground">3</span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-base font-heading font-bold mb-1">Seamless Care</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Fast consultation with integrated payments
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - App Style */}
      <section className="px-4 py-12 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="max-w-lg mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4 drop-shadow-lg">
            Ready to Get Started?
          </h2>
          <p className="text-base text-primary-foreground/90 mb-8 leading-relaxed drop-shadow">
            Join 500+ clinics transforming patient care
          </p>
          <Link to="/auth" className="block">
            <Button size="lg" className="w-full bg-card text-primary hover:bg-card/90 shadow-2xl h-14 text-lg font-bold rounded-2xl">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-xl border-t border-border/40 shadow-2xl z-50 md:hidden">
        <div className="flex items-center justify-around px-2 py-3">
          <a href="#" className="flex flex-col items-center gap-1 px-4 py-2 rounded-2xl hover:bg-muted/50 transition-colors group">
            <Home className="h-6 w-6 text-primary" strokeWidth={2.5} />
            <span className="text-xs font-semibold text-primary">Home</span>
          </a>
          <a href="#portals" className="flex flex-col items-center gap-1 px-4 py-2 rounded-2xl hover:bg-muted/50 transition-colors">
            <Users className="h-6 w-6 text-muted-foreground" strokeWidth={2} />
            <span className="text-xs text-muted-foreground">Portals</span>
          </a>
          <Link to="/notifications" className="flex flex-col items-center gap-1 px-4 py-2 rounded-2xl hover:bg-muted/50 transition-colors">
            <Bell className="h-6 w-6 text-muted-foreground" strokeWidth={2} />
            <span className="text-xs text-muted-foreground">Alerts</span>
          </Link>
          <Link to="/payments" className="flex flex-col items-center gap-1 px-4 py-2 rounded-2xl hover:bg-muted/50 transition-colors">
            <CreditCard className="h-6 w-6 text-muted-foreground" strokeWidth={2} />
            <span className="text-xs text-muted-foreground">Pay</span>
          </Link>
        </div>
      </nav>

      {/* Footer - Simplified for Mobile */}
      <footer className="border-t border-border/20 py-8 px-4 bg-muted/10 hidden md:block">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <Activity className="h-6 w-6 text-primary" strokeWidth={2.5} />
                <span className="text-xl font-heading font-bold bg-gradient-premium bg-clip-text text-transparent">PulseX</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Modern queue management for healthcare
              </p>
            </div>
            <div className="flex gap-12">
              <div>
                <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link to="/doctor" className="hover:text-primary transition-colors">Doctor</Link></li>
                  <li><Link to="/patient" className="hover:text-primary transition-colors">Patient</Link></li>
                  <li><Link to="/admin" className="hover:text-primary transition-colors">Admin</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-sm">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border/20 text-center">
            <p className="text-xs text-muted-foreground">
              &copy; 2024 <span className="text-primary font-semibold">PulseX</span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
