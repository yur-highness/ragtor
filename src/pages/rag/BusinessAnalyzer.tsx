import { ChatInterface } from "@/components/ChatInterface";
import { Navigation } from "@/components/Navigation";
import { Building2 } from "lucide-react";

const BusinessAnalyzer = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ChatInterface
        title="Business Document Analyzer"
        description="Analyze contracts, financial reports, business proposals, and strategic documents to extract key insights and actionable information."
        placeholder="Upload business documents or ask me to analyze contracts, reports, financial statements..."
        icon={<Building2 className="h-6 w-6 text-white" />}
      />
    </div>
  );
};

export default BusinessAnalyzer;