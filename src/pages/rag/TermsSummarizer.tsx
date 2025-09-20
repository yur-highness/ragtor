import { ChatInterface } from "@/components/ChatInterface";
import { Navigation } from "@/components/Navigation";
import { FileText } from "lucide-react";

const TermsSummarizer = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ChatInterface
        title="Terms & Conditions Summarizer"
        description="Upload legal documents, terms of service, or privacy policies to get clear, actionable summaries with risk assessments."
        placeholder="Ask me to analyze terms of service, privacy policies, or upload documents for review..."
        icon={<FileText className="h-6 w-6 text-white" />}
      />
    </div>
  );
};

export default TermsSummarizer;