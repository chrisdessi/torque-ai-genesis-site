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
        <div className="mt-4">
          <iframe 
            src="https://embeds.beehiiv.com/0c0565a9-66ec-4225-a021-87a3562337b7" 
            data-test-id="beehiiv-embed" 
            width="100%" 
            height="320" 
            frameBorder="0" 
            scrolling="no"
            style={{ borderRadius: '4px', border: '2px solid #e5e7eb', margin: 0, backgroundColor: 'transparent' }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterPopup;
