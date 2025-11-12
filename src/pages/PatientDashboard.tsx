import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Activity, Calendar, Clock, User, LogOut, CreditCard, Bell, MapPin } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { NotificationSystem } from "@/components/NotificationSystem";
import { PaymentIntegration } from "@/components/PaymentIntegration";

const PatientDashboard = () => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Activity className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold">Patient Portal</h1>
              <p className="text-sm text-muted-foreground">Welcome, Rajesh Kumar</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <NotificationSystem />
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Current Appointment Status */}
        <Card className="mb-8 border-2 border-primary shadow-lg">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Your Current Appointment
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Your Token</p>
                <p className="text-4xl font-bold text-primary">T003</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Queue Position</p>
                <p className="text-4xl font-bold text-warning">2nd</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Estimated Wait</p>
                <p className="text-4xl font-bold text-secondary">15 min</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary/5 rounded-lg">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-primary text-primary-foreground">DS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold">Dr. Sharma</h3>
                  <p className="text-sm text-muted-foreground">Cardiologist</p>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      10:30 AM
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      City Hospital
                    </span>
                  </div>
                </div>
                <Badge className="bg-success">Paid</Badge>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button variant="outline" className="flex-1">
                Reschedule
              </Button>
              <Button variant="destructive" className="flex-1">
                Cancel Appointment
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Book New Appointment */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Book New Appointment</CardTitle>
              <CardDescription>Select doctor and preferred time slot</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Select Doctor</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dr-sharma">Dr. Sharma - Cardiologist (₹500)</SelectItem>
                    <SelectItem value="dr-patel">Dr. Patel - Dermatologist (₹400)</SelectItem>
                    <SelectItem value="dr-reddy">Dr. Reddy - General Physician (₹300)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Appointment Date</Label>
                <Input type="date" />
              </div>

              <div className="space-y-2">
                <Label>Preferred Time Slot</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (2:00 PM - 5:00 PM)</SelectItem>
                    <SelectItem value="evening">Evening (5:00 PM - 8:00 PM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Reason for Visit (Optional)</Label>
                <Input placeholder="Brief description of your concern" />
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium">Consultation Fee</span>
                  <span className="text-2xl font-bold text-primary">₹500</span>
                </div>
                <PaymentIntegration 
                  amount={500}
                  doctorName="Sharma"
                  appointmentId="APT001"
                />
              </div>
            </CardContent>
          </Card>

          {/* Live Queue Status */}
          <Card>
            <CardHeader>
              <CardTitle>Live Queue Status</CardTitle>
              <CardDescription>Real-time updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg border-2 border-primary">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-primary">NOW CONSULTING</span>
                  </div>
                  <p className="font-semibold">Token T002</p>
                  <p className="text-sm text-muted-foreground">Priya Sharma</p>
                </div>

                <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-warning">NEXT</span>
                  </div>
                  <p className="font-semibold">Token T003</p>
                  <p className="text-sm text-muted-foreground">You</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Waiting Queue</p>
                  {["T004", "T005", "T006"].map((token, idx) => (
                    <div key={token} className="p-2 bg-muted rounded">
                      <p className="text-sm font-medium">{token}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Appointment History */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Appointment History</CardTitle>
            <CardDescription>View your past consultations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { date: "Jan 15, 2024", doctor: "Dr. Sharma", type: "Follow-up", status: "Completed" },
                { date: "Dec 10, 2023", doctor: "Dr. Patel", type: "Consultation", status: "Completed" },
                { date: "Nov 5, 2023", doctor: "Dr. Sharma", type: "Check-up", status: "Completed" },
              ].map((appointment, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{appointment.doctor}</p>
                      <p className="text-sm text-muted-foreground">{appointment.date} • {appointment.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-success">{appointment.status}</Badge>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatientDashboard;
