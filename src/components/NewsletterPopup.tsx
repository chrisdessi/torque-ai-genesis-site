import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { ZohoTorqueAIForm } from "./ZohoTorqueAIForm";

interface NewsletterPopupProps {
  trigger?: React.ReactNode;
}

const NewsletterPopup = ({ trigger }: NewsletterPopupProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="lg">
            <Mail className="mr-2 h-5 w-5" />
            Subscribe to Newsletter
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Join Torque AI's Newsletter</DialogTitle>
          <DialogDescription>
            Get exclusive AI insights, strategies, and innovation updates delivered directly to your inbox
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex justify-center">
          <ZohoTorqueAIForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterPopup;
