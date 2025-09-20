import { ChatInterface } from "@/components/ChatInterface";
import { Navigation } from "@/components/Navigation";
import { BookOpen } from "lucide-react";

const ResearchSummarizer = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ChatInterface
        title="Research Paper Summarizer"
        description="Quickly understand academic papers, research documents, and technical publications with detailed summaries and key findings extraction."
        placeholder="Upload research papers or ask me to explain complex academic concepts and findings..."
        icon={<BookOpen className="h-6 w-6 text-white" />}
      />
    </div>
  );
};

export default ResearchSummarizer;