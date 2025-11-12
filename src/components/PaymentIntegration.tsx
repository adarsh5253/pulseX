import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CreditCard, Smartphone, DollarSign } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface PaymentIntegrationProps {
  amount: number;
  doctorName: string;
  appointmentId: string;
  onSuccess?: () => void;
}

export const PaymentIntegration = ({ 
  amount, 
  doctorName, 
  appointmentId,
  onSuccess 
}: PaymentIntegrationProps) => {
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [processing, setProcessing] = useState(false);

  const handlePayment = async (method: string) => {
    setProcessing(true);
    setSelectedMethod(method);

    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful",
        description: `Paid ₹${amount} via ${method}`,
        className: "bg-success text-success-foreground",
      });
      setProcessing(false);
      onSuccess?.();
    }, 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" size="lg">
          <CreditCard className="mr-2 h-5 w-5" />
          Proceed to Payment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Payment</DialogTitle>
          <DialogDescription>
            Choose your preferred payment method
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Consultation Fee</span>
              <span className="text-2xl font-bold text-primary">₹{amount}</span>
            </div>
            <p className="text-sm text-muted-foreground">Dr. {doctorName}</p>
          </div>

          <div className="space-y-3">
            <Card 
              className="cursor-pointer hover:border-primary transition-colors"
              onClick={() => handlePayment("Razorpay")}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Razorpay</h4>
                    <p className="text-xs text-muted-foreground">Card, UPI, Netbanking</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer hover:border-primary transition-colors"
              onClick={() => handlePayment("UPI")}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Smartphone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">UPI</h4>
                    <p className="text-xs text-muted-foreground">Google Pay, PhonePe, Paytm</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer hover:border-primary transition-colors"
              onClick={() => handlePayment("Stripe")}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <DollarSign className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Stripe</h4>
                    <p className="text-xs text-muted-foreground">International Cards</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {processing && (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="text-sm text-muted-foreground mt-2">Processing payment...</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
