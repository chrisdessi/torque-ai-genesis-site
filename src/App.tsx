
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products/websites" element={<Websites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/enterprise-accelerator" element={<EnterpriseAccelerator />} />
          <Route path="/momento" element={<Momento />} />
          <Route path="/brand" element={<BrandIdentity />} />
          <Route path="/creator-launch" element={<CreatorLaunch />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
