import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NeighbourhoodProject from "./pages/NeighbourhoodProject";
import NapRoomProject from "./pages/NapRoomProject";
import LibraryProject from "./pages/LibraryProject";
import GetInvolved from "./pages/GetInvolved";
import DesignContest from "./pages/DesignContest";
import Conference from "./pages/Conference";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/neighbourhood" element={<NeighbourhoodProject />} />
            <Route path="/projects/nap-room" element={<NapRoomProject />} />
            <Route path="/projects/library" element={<LibraryProject />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/design-contest" element={<DesignContest />} />
            <Route path="/conference" element={<Conference />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
