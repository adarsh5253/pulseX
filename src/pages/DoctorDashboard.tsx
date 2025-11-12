import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Calendar, Clock, DollarSign, User, LogOut, Settings, CheckCircle, XCircle } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { NotificationSystem } from "@/components/NotificationSystem";

// Mock data
const mockQueue = [
  { id: 1, token: "T001", name: "Rajesh Kumar", status: "waiting", time: "10:00 AM", paid: true },
  { id: 2, token: "T002", name: "Priya Sharma", status: "in-consultation", time: "10:15 AM", paid: true },
  { id: 3, token: "T003", name: "Amit Patel", status: "waiting", time: "10:30 AM", paid: false },
  { id: 4, token: "T004", name: "Sneha Reddy", status: "waiting", time: "10:45 AM", paid: true },
  { id: 5, token: "T005", name: "Vikram Singh", status: "completed", time: "09:45 AM", paid: true },
];

const DoctorDashboard = () => {
  const [queue, setQueue] = useState(mockQueue);

  const updateStatus = (id: number, newStatus: string) => {
    setQueue(queue.map(patient => 
      patient.id === id ? { ...patient, status: newStatus } : patient
    ));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "waiting":
        return <Badge variant="outline" className="bg-warning/10 text-warning border-warning">Waiting</Badge>;
      case "in-consultation":
        return <Badge className="bg-primary">In Consultation</Badge>;
      case "completed":
        return <Badge className="bg-success">Completed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Activity className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold">Dr. Sharma's Dashboard</h1>
              <p className="text-sm text-muted-foreground">Cardiologist</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <NotificationSystem />
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Today's Queue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">8</div>
              <p className="text-xs text-muted-foreground mt-1">Total patients</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-warning">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Waiting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-warning">3</div>
              <p className="text-xs text-muted-foreground mt-1">In queue</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-success">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">4</div>
              <p className="text-xs text-muted-foreground mt-1">Consultations done</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">₹4,000</div>
              <p className="text-xs text-muted-foreground mt-1">Today's earnings</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="queue" className="space-y-6">
          <TabsList>
            <TabsTrigger value="queue">Patient Queue</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
          </TabsList>

          <TabsContent value="queue" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Today's Patient Queue</CardTitle>
                <CardDescription>Manage patient consultations and update status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {queue.filter(p => p.status !== "completed").map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary transition-colors">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {patient.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="font-semibold">{patient.name}</h3>
                            {getStatusBadge(patient.status)}
                            {patient.paid ? (
                              <CheckCircle className="h-4 w-4 text-success" />
                            ) : (
                              <XCircle className="h-4 w-4 text-destructive" />
                            )}
                          </div>
                          <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                            <span className="font-mono font-bold text-primary">{patient.token}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {patient.time}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {patient.status === "waiting" && (
                          <Button 
                            size="sm" 
                            variant="default"
                            onClick={() => updateStatus(patient.id, "in-consultation")}
                          >
                            Start Consultation
                          </Button>
                        )}
                        {patient.status === "in-consultation" && (
                          <Button 
                            size="sm" 
                            variant="success"
                            onClick={() => updateStatus(patient.id, "completed")}
                          >
                            Complete
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Completed Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {queue.filter(p => p.status === "completed").map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-success/10 text-success">
                            {patient.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{patient.name}</p>
                          <p className="text-sm text-muted-foreground">{patient.token} • {patient.time}</p>
                        </div>
                      </div>
                      {getStatusBadge(patient.status)}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Schedule</CardTitle>
                <CardDescription>Manage your working hours and availability</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Schedule management coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle>Payment Overview</CardTitle>
                <CardDescription>Track received and pending payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                    <p className="text-sm text-muted-foreground mb-1">Received Today</p>
                    <p className="text-2xl font-bold text-success">₹4,000</p>
                  </div>
                  <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
                    <p className="text-sm text-muted-foreground mb-1">Pending</p>
                    <p className="text-2xl font-bold text-warning">₹500</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DoctorDashboard;
