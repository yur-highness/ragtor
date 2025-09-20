import { RagCard } from "./RagCard";
import { 
  FileText, 
  Building2, 
  Mail, 
  Users, 
  Shield, 
  BookOpen 
} from "lucide-react";

const ragAgents = [
  {
    title: "Terms & Conditions Summarizer",
    description: "Instantly understand complex legal documents and terms of service.",
    icon: <FileText className="h-6 w-6 text-white" />,
    path: "/rag/terms-summarizer",
    color: "primary" as const,
    features: [
      "Legal document analysis",
      "Key points extraction",
      "Risk assessment"
    ]
  },
  {
    title: "Business Document Analyzer",
    description: "Analyze contracts,reports,and business documents to extract actionable insights.",
    icon: <Building2 className="h-6 w-6 text-white" />,
    path: "/rag/business-analyzer",
    color: "secondary" as const,
    features: [
      "Contract analysis",
      "Financial report insights",
      "Performance metrics"
    ]
  },
  {
    title: "Email Template Generator",
    description: "Create professional emails for any situation with AI assistance tailored to your context.",
    icon: <Mail className="h-6 w-6 text-white" />,
    path: "/rag/email-generator",
    color: "accent" as const,
    features: [
      "Professional templates",
      "Context-aware content",
      "Multi-language support"
    ]
  },
  {
    title: "Meeting Notes Processor",
    description: "Transform meeting recordings and notes into structured summaries with action items.",
    icon: <Users className="h-6 w-6 text-white" />,
    path: "/rag/meeting-processor",
    color: "primary" as const,
    features: [
      "Action item extraction",
      "Key decision tracking",
      "Follow-up reminders"
    ]
  },
  {
    title: "Contract Review Assistant",
    description: "Get professional contract reviews with risk analysis and recommended modifications.",
    icon: <Shield className="h-6 w-6 text-white" />,
    path: "/rag/contract-reviewer",
    color: "secondary" as const,
    features: [
      "Risk detection",
      "Clause analysis",
      "Modification suggestions"
    ]
  },
  {
    title: "Research Paper Summarizer",
    description: "Quickly understand academic papers and research documents with detailed summaries.",
    icon: <BookOpen className="h-6 w-6 text-white" />,
    path: "/rag/research-summarizer",
    color: "accent" as const,
    features: [
      "Academic analysis",
      "Key findings extraction",
      "Citation tracking"
    ]
  }
];

export const Dashboard = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          AI-Powered RagtOR Assistants
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Choose from our specialized AI agents to automate your daily tasks and streamline your workflow
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ragAgents.map((agent, index) => (
          <div key={agent.title} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <RagCard {...agent} />
          </div>
        ))}
      </div>
    </div>
  );
};