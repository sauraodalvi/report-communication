
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Archives from "./pages/Archives";
import PatientView from "./pages/PatientView";
import Reports from "./pages/Reports";

// Layouts
import { MainLayout } from "./layouts/MainLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Routes with Main Layout */}
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/patient/:id" element={<PatientView />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/waiting-list" element={<Dashboard />} />
            <Route path="/operation" element={<Dashboard />} />
            <Route path="/test-status" element={<Dashboard />} />
            <Route path="/report-prints" element={<Dashboard />} />
            <Route path="/inventory" element={<Dashboard />} />
            <Route path="/analytics" element={<Dashboard />} />
            <Route path="/quality" element={<Dashboard />} />
            <Route path="/drug-master" element={<Dashboard />} />
            <Route path="/instrument" element={<Dashboard />} />
            <Route path="/advanced-search" element={<Dashboard />} />
            <Route path="/updates" element={<Dashboard />} />
            <Route path="/tutorial" element={<Dashboard />} />
            <Route path="/support" element={<Dashboard />} />
            <Route path="/language" element={<Dashboard />} />
          </Route>
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
