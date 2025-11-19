import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Calendar, Clock, Shield, Users, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">PulseX</span>
          </Link>
          <nav className="hidden lg:flex space-x-6">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#portals" className="text-foreground hover:text-primary transition-colors">Portals</a>
            <Link to="/payments" className="text-foreground hover:text-primary transition-colors">Payments</Link>
            <Link to="/notifications" className="text-foreground hover:text-primary transition-colors">Notifications</Link>
            <Link to="/live-display" className="text-foreground hover:text-primary transition-colors">Live Display</Link>
          </nav>
          <div className="flex space-x-2 sm:space-x-3">
            <Link to="/auth">
              <Button variant="ghost" size="sm" className="sm:size-default">Login</Button>
            </Link>
            <Link to="/auth">
              <Button variant="hero" size="sm" className="sm:size-default">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Modern Healthcare Queue Management
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transform Your <span className="bg-gradient-hero bg-clip-text text-transparent">Clinic Operations</span> with Smart Queue Management
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reduce wait times, streamline appointments, and enhance patient experience with PulseX's intelligent queue management system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/auth">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                <Calendar className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Activity className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <section id="portals" className="bg-muted/30 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Access Your Portal</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">Choose your role to get started</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <Link to="/doctor" className="group">
              <Card className="border-2 hover:border-primary transition-all hover:shadow-xl cursor-pointer h-full">
                <CardHeader className="text-center">
                  <Users className="h-16 w-16 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl sm:text-2xl">Doctor Portal</CardTitle>
                  <CardDescription className="text-base">
                    View patient queues, manage consultations, track payments
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Access Portal →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/patient" className="group">
              <Card className="border-2 hover:border-secondary transition-all hover:shadow-xl cursor-pointer h-full">
                <CardHeader className="text-center">
                  <Calendar className="h-16 w-16 text-secondary mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl sm:text-2xl">Patient Booking</CardTitle>
                  <CardDescription className="text-base">
                    Book appointments, view queue status, make payments
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                    Book Now →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/admin" className="group sm:col-span-2 lg:col-span-1 max-w-md mx-auto w-full">
              <Card className="border-2 hover:border-accent transition-all hover:shadow-xl cursor-pointer h-full">
                <CardHeader className="text-center">
                  <Shield className="h-16 w-16 text-accent mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl sm:text-2xl">Admin Dashboard</CardTitle>
                  <CardDescription className="text-base">
                    Manage tokens, schedules, and queue operations
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    Admin Access →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">Everything you need for clinic management</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Link to="/live-display" className="block">
              <Card className="border-2 hover:border-primary transition-all hover:shadow-lg cursor-pointer h-full">
                <CardHeader>
                  <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-success mb-4" />
                  <CardTitle className="text-lg sm:text-xl">Live Queue Display</CardTitle>
                  <CardDescription>
                    Real-time display for waiting areas showing current consultations
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/notifications" className="block">
              <Card className="border-2 hover:border-primary transition-all hover:shadow-lg cursor-pointer h-full">
                <CardHeader>
                  <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-warning mb-4" />
                  <CardTitle className="text-lg sm:text-xl">Smart Notifications</CardTitle>
                  <CardDescription>
                    Automated alerts for appointments, queue updates, and changes
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/payments" className="block">
              <Card className="border-2 hover:border-primary transition-all hover:shadow-lg cursor-pointer h-full">
                <CardHeader>
                  <Activity className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4" />
                  <CardTitle className="text-lg sm:text-xl">Payment Integration</CardTitle>
                  <CardDescription>
                    Seamless payment processing with multiple payment options
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-muted/30 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How PulseX Works</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">Simple, efficient, and effective</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl sm:text-3xl font-bold mx-auto shadow-lg">1</div>
              <h3 className="text-lg sm:text-xl font-semibold">Patient Books</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Register and book appointments online, receive unique token numbers instantly</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-2xl sm:text-3xl font-bold mx-auto shadow-lg">2</div>
              <h3 className="text-lg sm:text-xl font-semibold">Real-Time Updates</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Live queue tracking with estimated wait times and instant notifications</p>
            </div>
            <div className="text-center space-y-4 sm:col-span-2 lg:col-span-1 max-w-md mx-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-2xl sm:text-3xl font-bold mx-auto shadow-lg">3</div>
              <h3 className="text-lg sm:text-xl font-semibold">Seamless Care</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Efficient consultations with integrated payment and digital records</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-hero py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6 px-4">
            Ready to Transform Your Clinic?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join healthcare providers using PulseX to enhance patient experience and streamline operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Link to="/auth" className="w-full sm:w-auto">
              <Button size="lg" className="bg-background text-primary hover:bg-background/90 shadow-glow w-full sm:w-auto">
                Start Your Free Trial
              </Button>
            </Link>
            <Link to="/live-display" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                View Live Display Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <Activity className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">PulseX</span>
              </Link>
              <p className="text-sm sm:text-base text-muted-foreground">Modern healthcare queue management for the digital age.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Portals</h4>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li><Link to="/doctor" className="hover:text-primary transition-colors">Doctor</Link></li>
                <li><Link to="/patient" className="hover:text-primary transition-colors">Patient</Link></li>
                <li><Link to="/admin" className="hover:text-primary transition-colors">Admin</Link></li>
                <li><Link to="/live-display" className="hover:text-primary transition-colors">Live Display</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#portals" className="hover:text-primary transition-colors">Portals</a></li>
                <li><Link to="/payments" className="hover:text-primary transition-colors">Payments</Link></li>
                <li><Link to="/notifications" className="hover:text-primary transition-colors">Notifications</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border text-center text-xs sm:text-sm text-muted-foreground">
            <p>&copy; 2024 PulseX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
