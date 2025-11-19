import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Calendar, Clock, Shield, Users, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/80 backdrop-blur-xl sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-5 flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-gold rounded-xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <Activity className="h-10 w-10 text-primary relative z-10" strokeWidth={2.5} />
            </div>
            <span className="text-3xl font-heading font-bold bg-gradient-premium bg-clip-text text-transparent">PulseX</span>
          </Link>
          <nav className="hidden lg:flex space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-primary font-medium transition-all hover:scale-105">Features</a>
            <a href="#portals" className="text-foreground/80 hover:text-primary font-medium transition-all hover:scale-105">Portals</a>
            <Link to="/payments" className="text-foreground/80 hover:text-primary font-medium transition-all hover:scale-105">Payments</Link>
            <Link to="/notifications" className="text-foreground/80 hover:text-primary font-medium transition-all hover:scale-105">Notifications</Link>
            <Link to="/live-display" className="text-foreground/80 hover:text-primary font-medium transition-all hover:scale-105">Live Display</Link>
          </nav>
          <div className="flex space-x-3">
            <Link to="/auth">
              <Button variant="ghost" size="sm" className="sm:size-default font-medium hover:bg-primary/5">Login</Button>
            </Link>
            <Link to="/auth">
              <Button size="sm" className="sm:size-default bg-gradient-primary hover:shadow-glow transition-all font-semibold">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold rounded-full text-sm font-semibold mb-6 shadow-gold hover:scale-105 transition-transform cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Modern Healthcare Queue Management
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-[1.1] tracking-tight">
            Transform Your <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">Clinic Operations</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            Reduce wait times by <span className="text-primary font-bold">60%</span>, streamline appointments, and enhance patient experience with PulseX's intelligent queue management system
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
            <Link to="/auth">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-gradient-primary hover:shadow-glow transition-all font-semibold group">
                <Calendar className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
                Start Free Trial
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 border-2 hover:bg-muted/50 font-semibold group">
              <Activity className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-success/20 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-success"></div>
              </div>
              <span className="font-medium">No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
              </div>
              <span className="font-medium">500+ Clinics Trust Us</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-accent"></div>
              </div>
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <section id="portals" className="bg-muted/30 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Access Your Portal</h2>
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">Choose your role to get started</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
            <Link to="/doctor" className="group">
              <Card className="border-2 hover:border-primary transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer h-full bg-card/50 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader className="text-center relative z-10 pb-8">
                  <div className="relative mx-auto mb-6 w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform"></div>
                    <Users className="h-14 w-14 text-primary relative z-10 group-hover:scale-110 transition-transform" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl font-heading mb-3">Doctor Portal</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    View patient queues, manage consultations, track payments
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all font-semibold">
                    Access Portal →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/patient" className="group">
              <Card className="border-2 hover:border-secondary transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer h-full bg-card/50 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader className="text-center relative z-10 pb-8">
                  <div className="relative mx-auto mb-6 w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 bg-secondary/10 rounded-2xl group-hover:scale-110 transition-transform"></div>
                    <Calendar className="h-14 w-14 text-secondary relative z-10 group-hover:scale-110 transition-transform" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl font-heading mb-3">Patient Booking</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Book appointments, view queue status, make payments
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <Button className="w-full bg-gradient-secondary hover:shadow-lg transition-all font-semibold">
                    Book Now →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/admin" className="group sm:col-span-2 lg:col-span-1 max-w-md mx-auto w-full">
              <Card className="border-2 hover:border-accent transition-all duration-500 hover:shadow-gold hover:-translate-y-2 cursor-pointer h-full bg-card/50 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader className="text-center relative z-10 pb-8">
                  <div className="relative mx-auto mb-6 w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-gold rounded-2xl group-hover:scale-110 transition-transform"></div>
                    <Shield className="h-14 w-14 text-accent relative z-10 group-hover:scale-110 transition-transform" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl font-heading mb-3">Admin Dashboard</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Manage tokens, schedules, and queue operations
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <Button className="w-full bg-gradient-gold hover:shadow-gold transition-all font-semibold text-accent-foreground">
                    Admin Access →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Powerful Features</h2>
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">Everything you need for clinic management</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            <Link to="/live-display" className="block">
              <Card className="border-2 hover:border-success transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer h-full group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Clock className="h-9 w-9 text-success" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-heading mb-4">Live Queue Display</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Real-time display for waiting areas showing current consultations
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/notifications" className="block">
              <Card className="border-2 hover:border-warning transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer h-full group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-warning/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-warning/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="h-9 w-9 text-warning" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-heading mb-4">Smart Notifications</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Automated alerts for appointments, queue updates, and changes
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/payments" className="block">
              <Card className="border-2 hover:border-primary transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer h-full group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Activity className="h-9 w-9 text-primary" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-heading mb-4">Payment Integration</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Seamless payment processing with multiple payment options
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-muted/30 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">How PulseX Works</h2>
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">Simple, efficient, and effective</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 max-w-6xl mx-auto">
            <div className="text-center space-y-6 group">
              <div className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl shadow-glow group-hover:scale-110 transition-transform"></div>
                <span className="text-4xl sm:text-5xl font-heading font-extrabold text-primary-foreground relative z-10">1</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold">Patient Books</h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Register and book appointments online, receive unique token numbers instantly
              </p>
            </div>
            <div className="text-center space-y-6 group">
              <div className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-secondary rounded-3xl shadow-lg group-hover:scale-110 transition-transform"></div>
                <span className="text-4xl sm:text-5xl font-heading font-extrabold text-secondary-foreground relative z-10">2</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold">Real-Time Updates</h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Live queue tracking with estimated wait times and instant notifications
              </p>
            </div>
            <div className="text-center space-y-6 group sm:col-span-2 lg:col-span-1 max-w-md mx-auto">
              <div className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-gold rounded-3xl shadow-gold group-hover:scale-110 transition-transform"></div>
                <span className="text-4xl sm:text-5xl font-heading font-extrabold text-accent-foreground relative z-10">3</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold">Seamless Care</h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Efficient consultations with integrated payment and digital records
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6 sm:mb-8 px-4 drop-shadow-lg">
            Ready to Transform Your Clinic?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/95 mb-8 sm:mb-12 max-w-3xl mx-auto px-4 font-medium leading-relaxed drop-shadow">
            Join 500+ healthcare providers using PulseX to enhance patient experience and streamline operations
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center px-4">
            <Link to="/auth" className="w-full sm:w-auto">
              <Button size="lg" className="bg-card text-primary hover:bg-card/90 shadow-xl hover:shadow-2xl transition-all font-bold text-lg px-10 py-7 w-full sm:w-auto group">
                <span className="mr-2">Start Your Free Trial</span>
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Button>
            </Link>
            <Link to="/live-display" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm font-bold text-lg px-10 py-7 w-full sm:w-auto">
                View Live Display Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 sm:py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-gold rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  <Activity className="h-8 w-8 text-primary relative z-10" strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-heading font-bold bg-gradient-premium bg-clip-text text-transparent">PulseX</span>
              </Link>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Modern healthcare queue management for the digital age.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4 sm:mb-5 text-base sm:text-lg">Portals</h4>
              <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                <li><Link to="/doctor" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Doctor</Link></li>
                <li><Link to="/patient" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Patient</Link></li>
                <li><Link to="/admin" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Admin</Link></li>
                <li><Link to="/live-display" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Live Display</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4 sm:mb-5 text-base sm:text-lg">Product</h4>
              <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Features</a></li>
                <li><a href="#portals" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Portals</a></li>
                <li><Link to="/payments" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Payments</Link></li>
                <li><Link to="/notifications" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Notifications</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4 sm:mb-5 text-base sm:text-lg">Company</h4>
              <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-border/40 text-center">
            <p className="text-sm sm:text-base text-muted-foreground font-medium">
              &copy; 2024 <span className="text-primary font-semibold">PulseX</span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
