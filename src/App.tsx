
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ContactFormProvider } from '@/contexts/ContactFormContext';
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Maintenance from "./pages/services/Maintenance";
import Transmission from "./pages/services/Transmission";
import Engine from "./pages/services/Engine";
import Tuning from "./pages/services/Tuning";
import TireService from "./pages/services/TireService";
import ServiceDetail from "./pages/services/ServiceDetail";
import MaintenanceAService from "./pages/services/maintenance/MaintenanceAService";
import MaintenanceBService from "./pages/services/maintenance/MaintenanceBService";
import BrakeService from "./pages/services/maintenance/BrakeService";
import SuspensionService from "./pages/services/maintenance/SuspensionService";
import SevenGTronicService from "./pages/services/transmission/SevenGTronicService";
import OilChangeService from "./pages/services/transmission/OilChangeService";
import HydraulicBlockService from "./pages/services/transmission/HydraulicBlockService";
import CleaningService from "./pages/services/engine/CleaningService";
import EcoDeleteService from "./pages/services/engine/EcoDeleteService";
import MajorOverhaulService from "./pages/services/engine/MajorOverhaulService";
import TimingChainService from "./pages/services/engine/TimingChainService";
import InteriorService from "./pages/services/tuning/InteriorService";
import AerodynamicsService from "./pages/services/tuning/AerodynamicsService";
import SoundIsolationService from "./pages/services/tuning/SoundIsolationService";
import WheelsService from "./pages/services/tuning/WheelsService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ContactFormProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/maintenance" element={<Maintenance />} />
          <Route path="/services/transmission" element={<Transmission />} />
          <Route path="/services/engine" element={<Engine />} />
          <Route path="/services/tuning" element={<Tuning />} />
          <Route path="/services/tire-service" element={<TireService />} />
          
          {/* Maintenance services */}
          <Route path="/services/maintenance/maintenance-a-service" element={<MaintenanceAService />} />
          <Route path="/services/maintenance/maintenance-b-service" element={<MaintenanceBService />} />
          <Route path="/services/maintenance/brake-service" element={<BrakeService />} />
          <Route path="/services/maintenance/suspension-service" element={<SuspensionService />} />
          
          {/* Transmission services */}
          <Route path="/services/transmission/7g-tronic" element={<SevenGTronicService />} />
          <Route path="/services/transmission/oil-change" element={<OilChangeService />} />
          <Route path="/services/transmission/hydraulic-block" element={<HydraulicBlockService />} />
          
          {/* Engine services */}
          <Route path="/services/engine/cleaning" element={<CleaningService />} />
          <Route path="/services/engine/eco-delete" element={<EcoDeleteService />} />
          <Route path="/services/engine/major-overhaul" element={<MajorOverhaulService />} />
          <Route path="/services/engine/timing-chain" element={<TimingChainService />} />
          
          {/* Tuning services */}
          <Route path="/services/tuning/interior" element={<InteriorService />} />
          <Route path="/services/tuning/aerodynamics" element={<AerodynamicsService />} />
          <Route path="/services/tuning/sound-isolation" element={<SoundIsolationService />} />
          <Route path="/services/tuning/wheels" element={<WheelsService />} />
          
          <Route path="/services/:category/:service" element={<ServiceDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </ContactFormProvider>
  </QueryClientProvider>
);

export default App;
