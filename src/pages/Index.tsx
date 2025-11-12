import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Calendar, Clock, Shield, Users, Zap, Stethoscope, Heart, Baby } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Activity className="h-10 w-10 text-primary" />
            <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">PulseX</span>
          </Link>
          <nav className="hidden md:flex space-x-8 text-lg">
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">Features</a>
            <a href="#for-you" className="text-foreground hover:text-primary transition-colors font-medium">For You</a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">How It Works</a>
          </nav>
          <div className="flex space-x-4">
            <Link to="/auth">
              <Button variant="ghost" size="lg" className="text-base">Login</Button>
            </Link>
            <Link to="/auth">
              <Button variant="hero" size="lg" className="text-base">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-40">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-lg font-semibold mb-6 animate-fade-in">
            🏥 Modern Healthcare Queue Management
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
            Healthcare Made <span className="bg-gradient-hero bg-clip-text text-transparent">Simple & Efficient</span>
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Skip the wait, book appointments online, and get real-time updates. Perfect for everyone - from children to seniors.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link to="/auth">
              <Button variant="hero" size="lg" className="w-full sm:w-auto text-lg px-8 py-7 shadow-glow">
                <Calendar className="mr-3 h-6 w-6" />
                Book Appointment Now
              </Button>
            </Link>
            <Link to="/live-display">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-7">
                <Activity className="mr-3 h-6 w-6" />
                View Live Queue
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* For You Section */}
      <section id="for-you" className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Made For Everyone</h2>
            <p className="text-2xl text-muted-foreground">Simple, accessible healthcare for all ages</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/patient">
              <Card className="border-3 hover:border-primary transition-all hover:shadow-2xl hover:scale-105 cursor-pointer h-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
                <CardHeader className="text-center space-y-4 pb-8">
                  <Baby className="h-20 w-20 text-primary mx-auto" />
                  <CardTitle className="text-3xl">Children</CardTitle>
                  <CardDescription className="text-lg leading-relaxed">
                    🎨 Fun and colorful interface. Easy booking for parents with kid-friendly updates.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/patient">
              <Card className="border-3 hover:border-secondary transition-all hover:shadow-2xl hover:scale-105 cursor-pointer h-full bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
                <CardHeader className="text-center space-y-4 pb-8">
                  <Heart className="h-20 w-20 text-secondary mx-auto" />
                  <CardTitle className="text-3xl">Patients</CardTitle>
                  <CardDescription className="text-lg leading-relaxed">
                    📱 Book appointments instantly. Track your queue position in real-time.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/doctor">
              <Card className="border-3 hover:border-accent transition-all hover:shadow-2xl hover:scale-105 cursor-pointer h-full bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
                <CardHeader className="text-center space-y-4 pb-8">
                  <Stethoscope className="h-20 w-20 text-accent mx-auto" />
                  <CardTitle className="text-3xl">Doctors</CardTitle>
                  <CardDescription className="text-lg leading-relaxed">
                    💼 Manage your practice efficiently. View queues and update patient status.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/patient">
              <Card className="border-3 hover:border-warning transition-all hover:shadow-2xl hover:scale-105 cursor-pointer h-full bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
                <CardHeader className="text-center space-y-4 pb-8">
                  <Users className="h-20 w-20 text-warning mx-auto" />
                  <CardTitle className="text-3xl">Seniors</CardTitle>
                  <CardDescription className="text-lg leading-relaxed">
                    👴 Large text, simple steps. Easy-to-use interface designed for comfort.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Powerful Features</h2>
            <p className="text-2xl text-muted-foreground">Everything you need in one place</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Link to="/doctor">
              <Card className="border-3 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-2 cursor-pointer h-full">
                <CardHeader className="space-y-4">
                  <Users className="h-16 w-16 text-primary" />
                  <CardTitle className="text-2xl">Doctor Portal</CardTitle>
                  <CardDescription className="text-lg leading-relaxed">
                    Complete dashboard to manage schedule, view patient queues, update consultation status, and track payments.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/patient">
              <Card className="border-3 hover:border-secondary transition-all hover:shadow-xl hover:-translate-y-2 cursor-pointer h-full">
                <CardHeader className="space-y-4">
                  <Calendar className="h-16 w-16 text-secondary" />
                  <CardTitle className="text-2xl">Patient Booking</CardTitle>
                  <CardDescription className="text-lg leading-relaxed">
                    Quick appointment booking with instant token generation, live queue updates, and accurate wait times.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/admin">
              <Card className="border-3 hover:border-accent transition-all hover:shadow-xl hover:-translate-y-2 cursor-pointer h-full">
                <CardHeader className="space-y-4">
                  <Shield className="h-16 w-16 text-accent" />
                  <CardTitle className="text-2xl">Admin Dashboard</CardTitle>
                  <CardDescription className="text-lg leading-relaxed">
                    Full control over tokens, schedules, time slots, and multi-doctor queue management system.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/live-display">
              <Card className="border-3 hover:border-success transition-all hover:shadow-xl hover:-translate-y-2 cursor-pointer h-full">
                <CardHeader className="space-y-4">
                  <Clock className="h-16 w-16 text-success" />
                  <CardTitle className="text-2xl">Live Queue Display</CardTitle>
                  <CardDescription className="text-lg leading-relaxed">
                    Large waiting room screens showing current consultations and upcoming patients in real-time.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Card className="border-3 hover:border-warning transition-all hover:shadow-xl hover:-translate-y-2 h-full">
              <CardHeader className="space-y-4">
                <Zap className="h-16 w-16 text-warning" />
                <CardTitle className="text-2xl">Smart Notifications</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Automated SMS and email alerts for appointment reminders, queue updates, and schedule changes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-3 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-2 h-full">
              <CardHeader className="space-y-4">
                <Activity className="h-16 w-16 text-primary" />
                <CardTitle className="text-2xl">Payment Integration</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Secure payment processing with Razorpay/UPI/Stripe and automatic digital receipt generation.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">How PulseX Works</h2>
            <p className="text-2xl text-muted-foreground">Just 3 simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center space-y-6 bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-primary-foreground text-4xl font-bold mx-auto shadow-glow">1</div>
              <h3 className="text-3xl font-bold">Book Online</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">Register and book your appointment in seconds. Get your unique token number instantly.</p>
            </div>
            <div className="text-center space-y-6 bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center text-secondary-foreground text-4xl font-bold mx-auto shadow-glow">2</div>
              <h3 className="text-3xl font-bold">Track Live</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">Watch your queue position update in real-time. Get notified when it's almost your turn.</p>
            </div>
            <div className="text-center space-y-6 bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center text-accent-foreground text-4xl font-bold mx-auto shadow-glow">3</div>
              <h3 className="text-3xl font-bold">Visit Doctor</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">Walk in at the right time. Complete your consultation and pay securely online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-hero py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-8 leading-tight">
            Ready to Experience Better Healthcare?
          </h2>
          <p className="text-2xl md:text-3xl text-primary-foreground/95 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of patients and hundreds of doctors who trust PulseX for hassle-free appointments.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/auth">
              <Button size="lg" className="bg-background text-primary hover:bg-background/90 shadow-2xl text-xl px-10 py-8 w-full sm:w-auto">
                Get Started Free
              </Button>
            </Link>
            <Link to="/live-display">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-background text-background hover:bg-background/10 text-xl px-10 py-8 w-full sm:w-auto">
                View Live Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <Activity className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">PulseX</span>
              </Link>
              <p className="text-lg text-muted-foreground leading-relaxed">Modern healthcare queue management made simple for everyone.</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">Quick Links</h4>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li><Link to="/patient" className="hover:text-primary transition-colors">Patient Portal</Link></li>
                <li><Link to="/doctor" className="hover:text-primary transition-colors">Doctor Portal</Link></li>
                <li><Link to="/admin" className="hover:text-primary transition-colors">Admin Dashboard</Link></li>
                <li><Link to="/live-display" className="hover:text-primary transition-colors">Live Display</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">Features</h4>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Online Booking</a></li>
                <li><a href="#features" className="hover:text-primary transition-colors">Live Queue</a></li>
                <li><a href="#features" className="hover:text-primary transition-colors">Smart Alerts</a></li>
                <li><a href="#features" className="hover:text-primary transition-colors">Payments</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">Support</h4>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-border text-center">
            <p className="text-lg text-muted-foreground">&copy; 2024 PulseX. Making healthcare accessible for all ages.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
