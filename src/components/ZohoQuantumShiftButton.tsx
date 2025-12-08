import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export const ZohoQuantumShiftButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button 
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg transition-colors shadow-lg shadow-emerald-500/20 cursor-pointer"
        >
          <span>FREE Community</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Join The Quantum Shift Community</DialogTitle>
        </DialogHeader>
        <div className="w-full">
          <iframe 
            aria-label="The Quantum Shift Community" 
            frameBorder="0" 
            style={{ height: '500px', width: '100%', border: 'none' }} 
            src="https://forms.zohopublic.com/chris283/form/AISummitNYCSpeakerApplication/formperma/DQawSHCOtGijHmMSPYzupvjYhhttuEEV6oqFKX6TA6k"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
