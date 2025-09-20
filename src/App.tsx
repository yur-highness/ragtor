import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermsSummarizer from "./pages/rag/TermsSummarizer";
import BusinessAnalyzer from "./pages/rag/BusinessAnalyzer";
import EmailGenerator from "./pages/rag/EmailGenerator";
import MeetingProcessor from "./pages/rag/MeetingProcessor";
import ContractReviewer from "./pages/rag/ContractReviewer";
import ResearchSummarizer from "./pages/rag/ResearchSummarizer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>

      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rag/terms-summarizer" element={<TermsSummarizer />} />
          <Route path="/rag/business-analyzer" element={<BusinessAnalyzer />} />
          <Route path="/rag/email-generator" element={<EmailGenerator />} />
          <Route path="/rag/meeting-processor" element={<MeetingProcessor />} />
          <Route path="/rag/contract-reviewer" element={<ContractReviewer />} />
          <Route path="/rag/research-summarizer" element={<ResearchSummarizer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;