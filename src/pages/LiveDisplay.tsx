import { useEffect, useState } from "react";
import { Activity, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const LiveDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Mock data - In real app, this would come from real-time updates
  const currentConsultation = {
    token: "T002",
    name: "Priya Sharma",
    doctor: "Dr. Sharma"
  };

  const nextInLine = {
    token: "T003",
    name: "Amit Patel",
    estimatedWait: "5 min"
  };

  const upcomingQueue = [
    { token: "T004", name: "Sneha Reddy" },
    { token: "T005", name: "Vikram Singh" },
    { token: "T006", name: "Anjali Gupta" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Activity className="h-16 w-16 text-primary-foreground" />
          <div>
            <h1 className="text-5xl font-bold text-primary-foreground">PulseX</h1>
            <p className="text-2xl text-primary-foreground/80">City Hospital</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl text-primary-foreground/80">
            {currentTime.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="text-5xl font-bold text-primary-foreground font-mono">
            {currentTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>

      {/* Main Display */}
      <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
        {/* Now Consulting - Large Display */}
        <Card className="bg-primary text-primary-foreground p-12 border-4 border-primary-foreground/20 shadow-2xl">
          <div className="text-center space-y-6">
            <div className="inline-block px-8 py-3 bg-primary-foreground/20 rounded-full">
              <p className="text-3xl font-bold tracking-wider">NOW CONSULTING</p>
            </div>
            <div className="space-y-4">
              <p className="text-8xl font-bold tracking-wider">{currentConsultation.token}</p>
              <p className="text-5xl font-semibold">{currentConsultation.name}</p>
              <p className="text-3xl text-primary-foreground/80">{currentConsultation.doctor}</p>
            </div>
          </div>
        </Card>

        {/* Next Patient */}
        <Card className="bg-warning text-warning-foreground p-10 border-4 border-warning-foreground/20 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="space-y-3">
              <p className="text-3xl font-bold">NEXT IN LINE</p>
              <div className="flex items-baseline gap-6">
                <p className="text-7xl font-bold">{nextInLine.token}</p>
                <p className="text-4xl font-semibold">{nextInLine.name}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-3 text-3xl">
                <Clock className="h-12 w-12" />
                <span className="font-bold">{nextInLine.estimatedWait}</span>
              </div>
              <p className="text-xl text-warning-foreground/80 mt-2">Estimated Wait</p>
            </div>
          </div>
        </Card>

        {/* Upcoming Queue */}
        <Card className="bg-card p-10 border-4 border-border shadow-2xl">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-center mb-8">UPCOMING QUEUE</h2>
            <div className="grid grid-cols-3 gap-6">
              {upcomingQueue.map((patient, idx) => (
                <div
                  key={patient.token}
                  className="p-6 bg-muted rounded-xl border-2 border-border hover:border-primary transition-all"
                >
                  <p className="text-4xl font-bold text-primary mb-2">{patient.token}</p>
                  <p className="text-2xl font-semibold text-foreground">{patient.name}</p>
                  <p className="text-lg text-muted-foreground mt-2">Position: {idx + 4}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Status Banner */}
        <div className="bg-success text-success-foreground p-6 rounded-xl text-center shadow-lg">
          <p className="text-2xl font-semibold">
            ✓ All systems operational • Please wait for your token to be called
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveDisplay;
