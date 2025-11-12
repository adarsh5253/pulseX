import { useEffect, useState } from "react";
import { Bell, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  timestamp: Date;
  read: boolean;
}

export const NotificationSystem = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    // Simulate smart notifications
    const interval = setInterval(() => {
      // Mock notification logic
      const mockNotifications: Notification[] = [
        {
          id: Date.now().toString(),
          title: "Queue Update",
          message: "Your turn is coming in 5 minutes",
          type: "info",
          timestamp: new Date(),
          read: false,
        },
      ];
      
      // Add random notification
      if (Math.random() > 0.7) {
        const newNotif = mockNotifications[0];
        setNotifications(prev => [newNotif, ...prev.slice(0, 9)]);
        toast({
          title: newNotif.title,
          description: newNotif.message,
        });
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        onClick={() => setShowPanel(!showPanel)}
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive text-destructive-foreground text-xs flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </Button>

      {showPanel && (
        <Card className="absolute right-0 top-12 w-80 max-h-96 overflow-y-auto shadow-2xl z-50">
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Notifications</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowPanel(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="divide-y divide-border">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-muted-foreground">
                No notifications
              </div>
            ) : (
              notifications.map(notif => (
                <div
                  key={notif.id}
                  className={`p-4 hover:bg-muted cursor-pointer ${
                    !notif.read ? "bg-primary/5" : ""
                  }`}
                  onClick={() => markAsRead(notif.id)}
                >
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-sm">{notif.title}</h4>
                    <span className="text-xs text-muted-foreground">
                      {notif.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{notif.message}</p>
                </div>
              ))
            )}
          </div>
        </Card>
      )}
    </div>
  );
};
