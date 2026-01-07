import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
export const ZohoQuantumShiftButton = () => {
  const [open, setOpen] = useState(false);
  return <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Join The Quantum Shift Community</DialogTitle>
        </DialogHeader>
        <div className="w-full">
          <iframe aria-label="The Quantum Shift Community" frameBorder="0" style={{
          height: '500px',
          width: '100%',
          border: 'none'
        }} src="https://forms.zohopublic.com/chris283/form/AISummitNYCSpeakerApplication/formperma/DQawSHCOtGijHmMSPYzupvjYhhttuEEV6oqFKX6TA6k" />
        </div>
      </DialogContent>
    </Dialog>;
};