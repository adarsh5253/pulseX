import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Pause, Play, SkipForward, CalendarClock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const AdminControls = () => {
  const [queuePaused, setQueuePaused] = useState(false);
  const [slotDuration, setSlotDuration] = useState("15");

  const handlePauseQueue = () => {
    setQueuePaused(!queuePaused);
    toast({
      title: queuePaused ? "Queue Resumed" : "Queue Paused",
      description: queuePaused 
        ? "Token system is now active" 
        : "New tokens will not be processed",
    });
  };

  const handleTimeAdjustment = () => {
    toast({
      title: "Time Settings Updated",
      description: `Slot duration set to ${slotDuration} minutes`,
      className: "bg-success text-success-foreground",
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Queue Control
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={handlePauseQueue}
            variant={queuePaused ? "default" : "destructive"}
            className="w-full"
          >
            {queuePaused ? (
              <>
                <Play className="mr-2 h-4 w-4" />
                Resume Queue
              </>
            ) : (
              <>
                <Pause className="mr-2 h-4 w-4" />
                Pause Queue
              </>
            )}
          </Button>

          <Button variant="outline" className="w-full">
            <SkipForward className="mr-2 h-4 w-4" />
            Skip Current Token
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarClock className="h-5 w-5" />
            Time Management
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Slot Duration (minutes)</Label>
            <Select value={slotDuration} onValueChange={setSlotDuration}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10 minutes</SelectItem>
                <SelectItem value="15">15 minutes</SelectItem>
                <SelectItem value="20">20 minutes</SelectItem>
                <SelectItem value="30">30 minutes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label>Clinic Start</Label>
              <Input type="time" defaultValue="09:00" />
            </div>
            <div className="space-y-2">
              <Label>Clinic End</Label>
              <Input type="time" defaultValue="17:00" />
            </div>
          </div>

          <Button onClick={handleTimeAdjustment} className="w-full">
            Update Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
