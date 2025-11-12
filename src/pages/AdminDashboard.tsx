import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Users, Clock, DollarSign, Settings, LogOut, Plus, Edit, Trash2, Pause, Play, ArrowUp, ArrowDown } from "lucide-react";
import { NotificationSystem } from "@/components/NotificationSystem";
import { AdminControls } from "@/components/AdminControls";

const AdminDashboard = () => {
  const [isPaused, setIsPaused] = useState(false);

  const mockDoctors = [
    { id: 1, name: "Dr. Sharma", specialty: "Cardiologist", patients: 8, revenue: "₹4,000" },
    { id: 2, name: "Dr. Patel", specialty: "Dermatologist", patients: 12, revenue: "₹4,800" },
    { id: 3, name: "Dr. Reddy", specialty: "General Physician", patients: 15, revenue: "₹4,500" },
  ];

  const mockQueue = [
    { id: 1, token: "T001", name: "Rajesh Kumar", doctor: "Dr. Sharma", time: "10:00 AM", status: "waiting", paid: true },
    { id: 2, token: "T002", name: "Priya Sharma", doctor: "Dr. Sharma", time: "10:15 AM", status: "in-consultation", paid: true },
    { id: 3, token: "T003", name: "Amit Patel", doctor: "Dr. Patel", time: "10:30 AM", status: "waiting", paid: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Activity className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">City Hospital</p>
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
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Doctors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">3</div>
              <p className="text-xs text-muted-foreground mt-1">Currently online</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-warning">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-warning">35</div>
              <p className="text-xs text-muted-foreground mt-1">Today</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-success">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">28</div>
              <p className="text-xs text-muted-foreground mt-1">Consultations</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">₹13,300</div>
              <p className="text-xs text-muted-foreground mt-1">Today's total</p>
            </CardContent>
          </Card>
        </div>

        {/* Admin Controls */}
        <div className="mb-8">
          <AdminControls />
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="queue" className="space-y-6">
          <TabsList>
            <TabsTrigger value="queue">Queue Management</TabsTrigger>
            <TabsTrigger value="doctors">Doctors</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          {/* Queue Management */}
          <TabsContent value="queue" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Token Queue Control</h2>
                <p className="text-muted-foreground">Manage all patient queues across doctors</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setIsPaused(!isPaused)}>
                  {isPaused ? <Play className="mr-2 h-4 w-4" /> : <Pause className="mr-2 h-4 w-4" />}
                  {isPaused ? "Resume" : "Pause"} System
                </Button>
                <Button variant="hero">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Token
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Active Queue</CardTitle>
                <CardDescription>Real-time patient queue across all doctors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockQueue.map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary transition-colors">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="text-center min-w-[80px]">
                          <p className="text-2xl font-bold text-primary">{patient.token}</p>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold">{patient.name}</p>
                          <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                            <span>{patient.doctor}</span>
                            <span>•</span>
                            <span>{patient.time}</span>
                            <span>•</span>
                            <Badge variant={patient.paid ? "default" : "destructive"} className="text-xs">
                              {patient.paid ? "Paid" : "Unpaid"}
                            </Badge>
                          </div>
                        </div>
                        <Badge className={
                          patient.status === "waiting" ? "bg-warning" :
                          patient.status === "in-consultation" ? "bg-primary" :
                          "bg-success"
                        }>
                          {patient.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button size="sm" variant="outline">
                          <ArrowUp className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <ArrowDown className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Doctor Management */}
          <TabsContent value="doctors" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Doctor Management</h2>
              <Button variant="hero">
                <Plus className="mr-2 h-4 w-4" />
                Add Doctor
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {mockDoctors.map((doctor) => (
                <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{doctor.name}</CardTitle>
                    <CardDescription>{doctor.specialty}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Patients Today</span>
                        <span className="font-bold">{doctor.patients}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Revenue</span>
                        <span className="font-bold text-success">{doctor.revenue}</span>
                      </div>
                      <div className="flex gap-2 pt-3">
                        <Button variant="outline" size="sm" className="flex-1">
                          View Queue
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Schedule Management */}
          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Time & Schedule Settings</CardTitle>
                <CardDescription>Configure clinic hours and slot durations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Clinic Start Time</Label>
                    <Input type="time" defaultValue="09:00" />
                  </div>
                  <div className="space-y-2">
                    <Label>Clinic End Time</Label>
                    <Input type="time" defaultValue="18:00" />
                  </div>
                  <div className="space-y-2">
                    <Label>Consultation Duration (minutes)</Label>
                    <Input type="number" defaultValue="15" />
                  </div>
                  <div className="space-y-2">
                    <Label>Break Time</Label>
                    <Select defaultValue="13:00-14:00">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="13:00-14:00">1:00 PM - 2:00 PM</SelectItem>
                        <SelectItem value="14:00-15:00">2:00 PM - 3:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="w-full" variant="hero">
                  Save Schedule Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports */}
          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Generate Reports</CardTitle>
                <CardDescription>Download daily and weekly analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button variant="outline" size="lg">
                    Download Today's Report (CSV)
                  </Button>
                  <Button variant="outline" size="lg">
                    Download Weekly Report (PDF)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
