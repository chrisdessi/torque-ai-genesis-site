
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Platform from "./pages/Platform";
import Dashboard from "./pages/Dashboard";
import Websites from "./pages/products/Websites";
import Contact from "./pages/Contact";
import Quiz from "./pages/Quiz";
import EnterpriseAccelerator from "./pages/EnterpriseAccelerator";
import Momento from "./pages/Momento";
import BrandIdentity from "./pages/BrandIdentity";
import CreatorLaunch from "./pages/CreatorLaunch";
import Events from "./pages/Events";
import MomentoCouncil from "./pages/MomentoCouncil";
import Torque from "./pages/Torque";
import MementoHub from "./pages/MementoHub";
import MementoLanding from "./pages/MementoLanding";
import QuantumShift from "./pages/QuantumShift";
import QuantumCoachBooking from "./pages/QuantumCoachBooking";
import Blog from "./pages/Blog";
import BlogPost from "./pages/blog/BlogPost";
import TorqueAIGuide from "./pages/TorqueAIGuide";
import ExecutiveCoaching from "./pages/ExecutiveCoaching";
import QuantumCoach from "./pages/QuantumCoach";
import Assessment from "./pages/Assessment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/torque" element={<Torque />} />
          <Route path="/torque-ai-guide" element={<TorqueAIGuide />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products/websites" element={<Websites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/centered-heading-with-contact-form" element={<Navigate to="/contact" replace />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/enterprise-accelerator" element={<EnterpriseAccelerator />} />
          <Route path="/momento" element={<Momento />} />
          <Route path="/memento-hub" element={<MementoHub />} />
          <Route path="/memento-landing" element={<MementoLanding />} />
          <Route path="/momento-council" element={<MomentoCouncil />} />
          <Route path="/quantum-shift" element={<QuantumShift />} />
          <Route path="/quantum-shift/coach" element={<QuantumCoachBooking />} />
          <Route path="/brand" element={<BrandIdentity />} />
          <Route path="/creator-launch" element={<CreatorLaunch />} />
          <Route path="/events" element={<Events />} />
          <Route path="/executive-coaching" element={<ExecutiveCoaching />} />
          <Route path="/quantum-coach" element={<QuantumCoach />} />
          <Route path="/assessment" element={<Assessment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
